using System;
using MySql.Data.MySqlClient;

namespace GyumolcsKonzol
{
    class Program
    {
        // Adatbázis kapcsolat string
        private static string connectionString = "Server=localhost;Port=3307;Database=gyumolcs_db;Uid=root;Pwd=;";

        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.Encoding.UTF8;
            Console.WriteLine("GYÜMÖLCSÖK NYILVÁNTARTÁSI RENDSZER - STATISZTIKÁK");
            Console.WriteLine();

            try
            {
                // 1. Az összes gyümölcs mennyisége
                Console.WriteLine("Az összes gyümölcs mennyisége:");
                OsszMennyiseg();
                Console.WriteLine();

                // 2. Az összes gyümölcs értéke
                Console.WriteLine("Az összes gyümölcs értéke:");
                Console.ResetColor();
                OsszErtek();
                Console.WriteLine();

                // 3. A legdrágább gyümölcs
                Console.WriteLine("A legdrágább gyümölcs:");
                LegdragabbGyumolcs();
                Console.WriteLine();

                // 4. Alma összes érkezésének értéke
                Console.WriteLine("Az 'Alma' érkezéseinek összértéke:");
                AlmaOsszerteke();
                Console.WriteLine();

                // 5. Legtöbbször érkezett gyümölcs
                Console.WriteLine("A legtöbb alkalommal érkezett gyümölcs:");
                LegtobszorErkezett();
                Console.WriteLine();

                // 6. 2026 februári szállítmányok
                Console.WriteLine("2026 februárjában érkezett szállítmányok száma:");
                FebruariSzallitmanyok();
                Console.WriteLine();

            }
            catch (Exception ex)
            {
                Console.WriteLine($"Hiba történt: {ex.Message}");
            }

            Console.WriteLine();
            Console.WriteLine("Nyomj meg egy billentyűt a kilépéshez...");
            Console.ReadKey();
        }

        // 1. Az összes gyümölcs mennyisége
        static void OsszMennyiseg()
        {
            using (MySqlConnection conn = new MySqlConnection(connectionString))
            {
                conn.Open();
                string query = "SELECT SUM(mennyiseg) as osszeg FROM erkezes";
                MySqlCommand cmd = new MySqlCommand(query, conn);

                object result = cmd.ExecuteScalar();
                int osszeg = result != DBNull.Value ? Convert.ToInt32(result) : 0;

                Console.WriteLine($"Összesen {osszeg} kg gyümölcs érkezett");
            }
        }

        // 2. Az összes gyümölcs értéke
        static void OsszErtek()
        {
            using (MySqlConnection conn = new MySqlConnection(connectionString))
            {
                conn.Open();
                string query = "SELECT SUM(mennyiseg * egysegar) as osszeg FROM erkezes";
                MySqlCommand cmd = new MySqlCommand(query, conn);

                object result = cmd.ExecuteScalar();
                decimal osszeg = result != DBNull.Value ? Convert.ToDecimal(result) : 0;

                Console.WriteLine($"Az összes gyümölcs értéke: {osszeg:N2} Ft");
            }
        }

        // 3. A legdrágább gyümölcs
        static void LegdragabbGyumolcs()
        {
            using (MySqlConnection conn = new MySqlConnection(connectionString))
            {
                conn.Open();
                string query = @"
                    SELECT g.nev, MAX(e.egysegar) as max_ar 
                    FROM erkezes e
                    JOIN gyumolcs g ON e.gyumolcsid = g.gyumolcsid
                    GROUP BY g.nev
                    ORDER BY max_ar DESC
                    LIMIT 1";

                MySqlCommand cmd = new MySqlCommand(query, conn);
                MySqlDataReader reader = cmd.ExecuteReader();

                if (reader.Read())
                {
                    string nev = reader["nev"].ToString();
                    decimal ar = Convert.ToDecimal(reader["max_ar"]);

                    Console.WriteLine($" {nev} - {ar:N2} Ft/kg");
                }
                reader.Close();
            }
        }

        // 4. Alma összes érkezésének értéke
        static void AlmaOsszerteke()
        {
            using (MySqlConnection conn = new MySqlConnection(connectionString))
            {
                conn.Open();
                string query = @"
                    SELECT SUM(mennyiseg * egysegar) as osszeg 
                    FROM erkezes 
                    WHERE gyumolcsid = 1";

                MySqlCommand cmd = new MySqlCommand(query, conn);
                object result = cmd.ExecuteScalar();
                decimal osszeg = result != DBNull.Value ? Convert.ToDecimal(result) : 0;

                Console.WriteLine($" Az Alma érkezéseinek összértéke: {osszeg:N2} Ft");
            }
        }

        // 5. Legtöbb alkalommal érkezett gyümölcs
        static void LegtobszorErkezett()
        {
            using (MySqlConnection conn = new MySqlConnection(connectionString))
            {
                conn.Open();
                string query = @"
                    SELECT g.nev, COUNT(*) as db 
                    FROM erkezes e
                    JOIN gyumolcs g ON e.gyumolcsid = g.gyumolcsid
                    GROUP BY g.nev
                    ORDER BY db DESC
                    LIMIT 1";

                MySqlCommand cmd = new MySqlCommand(query, conn);
                MySqlDataReader reader = cmd.ExecuteReader();

                if (reader.Read())
                {
                    string nev = reader["nev"].ToString();
                    int db = Convert.ToInt32(reader["db"]);

                    Console.WriteLine($" {nev} - {db} alkalommal");
                }
                reader.Close();
            }
        }

        // 6. 2026 februári szállítmányok
        static void FebruariSzallitmanyok()
        {
            using (MySqlConnection conn = new MySqlConnection(connectionString))
            {
                conn.Open();
                string query = @"
                    SELECT COUNT(*) as db 
                    FROM erkezes 
                    WHERE YEAR(erkezett) = 2026 AND MONTH(erkezett) = 2";

                MySqlCommand cmd = new MySqlCommand(query, conn);
                object result = cmd.ExecuteScalar();
                int db = result != DBNull.Value ? Convert.ToInt32(result) : 0;

                Console.WriteLine($" 2026 februárjában {db} szállítmány érkezett");
            }
        }
    }
}