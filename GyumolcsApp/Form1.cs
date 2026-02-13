using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Newtonsoft.Json;

namespace GyumolcsApp
{
    public partial class Form1 : Form
    {
        private HttpClient client = new HttpClient();
        private List<Fruit> fruits = new List<Fruit>();
        private Fruit selectedFruit = null;

        private string baseUrl = "http://localhost:3000";

        public Form1()
        {
            InitializeComponent();
            LoadFruits();
            lstFruits.SelectedIndexChanged += LstFruits_SelectedIndexChanged;
        }

        private async void LoadFruits()
        {
            try
            {
                var res = await client.GetStringAsync($"{baseUrl}/fruits");
                fruits = JsonConvert.DeserializeObject<List<Fruit>>(res);
                lstFruits.DataSource = null;
                lstFruits.DataSource = fruits;
                lstFruits.DisplayMember = "nev";
            }
            catch (Exception ex)
            {
                MessageBox.Show("Hiba a gyümölcsök betöltésekor: " + ex.Message);
            }
        }

        private void LstFruits_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (lstFruits.SelectedItem is Fruit f)
            {
                selectedFruit = f;
                txtNev.Text = f.nev;
                txtNevEng.Text = f.nev_eng;
                txtMegjegyzes.Text = f.megjegyzes;
                txtAltSzoveg.Text = f.alt_szoveg;
                txtSrc.Text = f.src;

                // Kép betöltése
                picFruit.LoadAsync($"{baseUrl}/kepek/{f.src}");
            }
        }

        private async void btnAdd_Click(object sender, EventArgs e)
        {
            var fruit = new Fruit
            {
                nev = txtNev.Text,
                nev_eng = txtNevEng.Text,
                megjegyzes = txtMegjegyzes.Text,
                alt_szoveg = txtAltSzoveg.Text,
                src = txtSrc.Text
            };

            try
            {
                var json = JsonConvert.SerializeObject(fruit);
                var content = new StringContent(json, Encoding.UTF8, "application/json");
                var res = await client.PostAsync($"{baseUrl}/fruits", content);
                if (res.IsSuccessStatusCode)
                {
                    LoadFruits();
                    MessageBox.Show("Gyümölcs hozzáadva!");
                }
                else
                {
                    var error = await res.Content.ReadAsStringAsync();
                    MessageBox.Show("Hiba: " + error);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private async void btnUpdate_Click(object sender, EventArgs e)
        {
            if (selectedFruit == null) return;

            var fruit = new Fruit
            {
                nev = txtNev.Text,
                nev_eng = txtNevEng.Text,
                megjegyzes = txtMegjegyzes.Text,
                alt_szoveg = txtAltSzoveg.Text,
                src = txtSrc.Text
            };

            try
            {
                var json = JsonConvert.SerializeObject(fruit);
                var content = new StringContent(json, Encoding.UTF8, "application/json");
                var res = await client.PutAsync($"{baseUrl}/fruits/{selectedFruit.gyumolcsid}", content);
                if (res.IsSuccessStatusCode)
                {
                    LoadFruits();
                    MessageBox.Show("Gyümölcs frissítve!");
                }
                else
                {
                    var error = await res.Content.ReadAsStringAsync();
                    MessageBox.Show("Hiba: " + error);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private async void btnDelete_Click(object sender, EventArgs e)
        {
            if (selectedFruit == null) return;

            try
            {
                var res = await client.DeleteAsync($"{baseUrl}/fruits/{selectedFruit.gyumolcsid}");
                if (res.IsSuccessStatusCode)
                {
                    LoadFruits();
                    MessageBox.Show("Gyümölcs törölve!");
                }
                else
                {
                    var error = await res.Content.ReadAsStringAsync();
                    MessageBox.Show("Hiba: " + error);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }
    }

    public class Fruit
    {
        public int gyumolcsid { get; set; }
        public string nev { get; set; }
        public string nev_eng { get; set; }
        public string megjegyzes { get; set; }
        public string alt_szoveg { get; set; }
        public string src { get; set; }
    }
}