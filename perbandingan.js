
  const komputer = {
    generasi1: {
      name: "Komputer Generasi Pertama",
      tahun: "1940–1956",
      teknologi: "Tabung Vakum",
      kecepatan: "Lambat",
      ukuran: "Sangat besar (seukuran ruangan)",
      penyimpanan: "Punched Card & Magnetic Drum",
      bahasa: "Bahasa mesin",
    },
    generasi2: {
      name: "Komputer Generasi Kedua",
      tahun: "1956–1963",
      teknologi: "Transistor",
      kecepatan: "Lebih cepat dari generasi 1",
      ukuran: "Lebih kecil",
      penyimpanan: "Magnetic Tape & Disk",
      bahasa: "Bahasa assembly",
    },
    generasi3: {
      name: "Komputer Generasi Ketiga",
      tahun: "1964–1971",
      teknologi: "IC (Integrated Circuit)",
      kecepatan: "Lebih cepat lagi",
      ukuran: "Lebih kecil dan ringan",
      penyimpanan: "Magnetic Disk",
      bahasa: "Bahasa tingkat tinggi (COBOL, FORTRAN)",
    },
    generasi4: {
      name: "Komputer Generasi Keempat",
      tahun: "1971–Sekarang",
      teknologi: "Microprocessor (VLSI)",
      kecepatan: "Sangat cepat",
      ukuran: "Kecil (PC, laptop)",
      penyimpanan: "Hard disk, SSD",
      bahasa: "Bahasa tingkat tinggi & GUI",
    },
    generasi5: {
      name: "Komputer Generasi Kelima",
      tahun: "Sekarang–Masa depan",
      teknologi: "Artificial Intelligence (AI)",
      kecepatan: "Paling cepat",
      ukuran: "Sangat kecil (bahkan seukuran beras)",
      penyimpanan: "Memori besar & cloud",
      bahasa: "Pemrosesan bahasa alami",
    },
  };

  function bandingkan() {
    const key1 = document.getElementById("komputer1").value;
    const key2 = document.getElementById("komputer2").value;
    const k1 = komputer[key1];
    const k2 = komputer[key2];

    document.getElementById("komputer1Name").textContent = k1.name;
    document.getElementById("komputer2Name").textContent = k2.name;

    const specs = ["tahun", "teknologi", "kecepatan", "ukuran", "penyimpanan", "bahasa"];
    const tbody = document.getElementById("resultBody");
    tbody.innerHTML = "";

    specs.forEach(spec => {
      const row = document.createElement("tr");
      const namaSpec = spec.charAt(0).toUpperCase() + spec.slice(1);

      const tdNama = `<td>${namaSpec}</td>`;
      const td1 = `<td>${k1[spec]}</td>`;
      const td2 = `<td>${k2[spec]}</td>`;

      row.innerHTML = tdNama + td1 + td2;
      tbody.appendChild(row);
    });

    document.getElementById("resultTable").style.display = "table";
  }
