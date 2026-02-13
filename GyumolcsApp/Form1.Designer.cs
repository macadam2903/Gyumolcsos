namespace GyumolcsApp
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.lstFruits = new System.Windows.Forms.ListBox();
            this.txtNev = new System.Windows.Forms.TextBox();
            this.txtNevEng = new System.Windows.Forms.TextBox();
            this.txtMegjegyzes = new System.Windows.Forms.TextBox();
            this.txtAltSzoveg = new System.Windows.Forms.TextBox();
            this.txtSrc = new System.Windows.Forms.TextBox();
            this.btnAdd = new System.Windows.Forms.Button();
            this.btnUpdate = new System.Windows.Forms.Button();
            this.btnDelete = new System.Windows.Forms.Button();
            this.picFruit = new System.Windows.Forms.PictureBox();
            ((System.ComponentModel.ISupportInitialize)(this.picFruit)).BeginInit();
            this.SuspendLayout();
            // 
            // lstFruits
            // 
            this.lstFruits.FormattingEnabled = true;
            this.lstFruits.Location = new System.Drawing.Point(22, 28);
            this.lstFruits.Name = "lstFruits";
            this.lstFruits.Size = new System.Drawing.Size(158, 264);
            this.lstFruits.TabIndex = 0;
            // 
            // txtNev
            // 
            this.txtNev.Location = new System.Drawing.Point(45, 307);
            this.txtNev.Name = "txtNev";
            this.txtNev.Size = new System.Drawing.Size(100, 20);
            this.txtNev.TabIndex = 1;
            // 
            // txtNevEng
            // 
            this.txtNevEng.Location = new System.Drawing.Point(45, 333);
            this.txtNevEng.Name = "txtNevEng";
            this.txtNevEng.Size = new System.Drawing.Size(100, 20);
            this.txtNevEng.TabIndex = 1;
            // 
            // txtMegjegyzes
            // 
            this.txtMegjegyzes.Location = new System.Drawing.Point(45, 359);
            this.txtMegjegyzes.Name = "txtMegjegyzes";
            this.txtMegjegyzes.Size = new System.Drawing.Size(100, 20);
            this.txtMegjegyzes.TabIndex = 1;
            // 
            // txtAltSzoveg
            // 
            this.txtAltSzoveg.Location = new System.Drawing.Point(45, 385);
            this.txtAltSzoveg.Name = "txtAltSzoveg";
            this.txtAltSzoveg.Size = new System.Drawing.Size(100, 20);
            this.txtAltSzoveg.TabIndex = 1;
            // 
            // txtSrc
            // 
            this.txtSrc.Location = new System.Drawing.Point(45, 411);
            this.txtSrc.Name = "txtSrc";
            this.txtSrc.Size = new System.Drawing.Size(100, 20);
            this.txtSrc.TabIndex = 1;
            // 
            // btnAdd
            // 
            this.btnAdd.Location = new System.Drawing.Point(271, 330);
            this.btnAdd.Name = "btnAdd";
            this.btnAdd.Size = new System.Drawing.Size(75, 23);
            this.btnAdd.TabIndex = 2;
            this.btnAdd.Text = "Hozzáadás";
            this.btnAdd.UseVisualStyleBackColor = true;
            this.btnAdd.Click += new System.EventHandler(this.btnAdd_Click);
            // 
            // btnUpdate
            // 
            this.btnUpdate.Location = new System.Drawing.Point(271, 359);
            this.btnUpdate.Name = "btnUpdate";
            this.btnUpdate.Size = new System.Drawing.Size(75, 23);
            this.btnUpdate.TabIndex = 2;
            this.btnUpdate.Text = "Frissites";
            this.btnUpdate.UseVisualStyleBackColor = true;
            this.btnUpdate.Click += new System.EventHandler(this.btnUpdate_Click);
            // 
            // btnDelete
            // 
            this.btnDelete.Location = new System.Drawing.Point(271, 388);
            this.btnDelete.Name = "btnDelete";
            this.btnDelete.Size = new System.Drawing.Size(75, 23);
            this.btnDelete.TabIndex = 2;
            this.btnDelete.Text = "Torles";
            this.btnDelete.UseVisualStyleBackColor = true;
            this.btnDelete.Click += new System.EventHandler(this.btnDelete_Click);
            // 
            // picFruit
            // 
            this.picFruit.Location = new System.Drawing.Point(216, 12);
            this.picFruit.Name = "picFruit";
            this.picFruit.Size = new System.Drawing.Size(316, 299);
            this.picFruit.TabIndex = 3;
            this.picFruit.TabStop = false;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.picFruit);
            this.Controls.Add(this.btnDelete);
            this.Controls.Add(this.btnUpdate);
            this.Controls.Add(this.btnAdd);
            this.Controls.Add(this.txtSrc);
            this.Controls.Add(this.txtAltSzoveg);
            this.Controls.Add(this.txtMegjegyzes);
            this.Controls.Add(this.txtNevEng);
            this.Controls.Add(this.txtNev);
            this.Controls.Add(this.lstFruits);
            this.Name = "Form1";
            this.Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)(this.picFruit)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.ListBox lstFruits;
        private System.Windows.Forms.TextBox txtNev;
        private System.Windows.Forms.TextBox txtNevEng;
        private System.Windows.Forms.TextBox txtMegjegyzes;
        private System.Windows.Forms.TextBox txtAltSzoveg;
        private System.Windows.Forms.TextBox txtSrc;
        private System.Windows.Forms.Button btnAdd;
        private System.Windows.Forms.Button btnUpdate;
        private System.Windows.Forms.Button btnDelete;
        private System.Windows.Forms.PictureBox picFruit;
    }
}

