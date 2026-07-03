export interface LiturgicalDay {
  date: string;       // YYYY-MM-DD
  day: number;        // Day of month (1-31)
  status: string;     // status (e.g. Hari Biasa, Pesta, Perayaan Wajib)
  name: string;       // Name of feast/saint or general day description
  readings: string;   // Scripture readings summary
  gospelCode: string; // Query code for imankatolik.or.id
  bco: string;        // Bacaan Harian / Bacaan Ibadat Bacaan (BcO)
  color: 'Hijau' | 'Merah' | 'Putih'; // Liturgical color
}

export const LITURGICAL_CALENDAR_JULY_2026: LiturgicalDay[] = [
  {
    date: '2026-07-01',
    day: 1,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Am 5:14-15.21-24; Mzm 50:7.8-9.10-11.12-13.16bc-17; Mat 8:28-34',
    gospelCode: 'Mat 8:28-34',
    bco: 'Neh 9:1-2.5-21',
    color: 'Hijau'
  },
  {
    date: '2026-07-02',
    day: 2,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Am 7:10-17; Mzm 19:8.9.10.11; Mat 9:1-8',
    gospelCode: 'Mat 9:1-8',
    bco: 'Neh 9:22-37',
    color: 'Hijau'
  },
  {
    date: '2026-07-03',
    day: 3,
    status: 'Pesta',
    name: 'St. Thomas, Rasul',
    readings: 'Ef 2:19-22; Mzm. 117:1,2; Yoh. 20:24-29',
    gospelCode: 'Yoh 20:24-29',
    bco: 'Kis. 5:12-32 atau 1Kor. 1:17- 2:5 atau 1Kor. 4:1-16',
    color: 'Merah'
  },
  {
    date: '2026-07-04',
    day: 4,
    status: 'Hari Biasa',
    name: 'St. Elisabet dr Portugal',
    readings: 'Am 9:11-15; Mzm 85:9.11-12.13-14; Mat 9:14-17',
    gospelCode: 'Mat 9:14-17',
    bco: 'Yes 59:1-14',
    color: 'Hijau'
  },
  {
    date: '2026-07-05',
    day: 5,
    status: 'Hari Minggu',
    name: 'Hari Minggu Biasa XIV',
    readings: 'BcE Za. 9:9-10; Mzm. 145:1-2,8-9,10-11,13cd-14; Rm. 8:9,11-13; Mat. 11:25-30',
    gospelCode: 'Mat 11:25-30',
    bco: 'Ams 1:1-7.20-33',
    color: 'Hijau'
  },
  {
    date: '2026-07-06',
    day: 6,
    status: 'Hari Biasa',
    name: 'St. Maria Goretti',
    readings: 'Hos 2:13.14b-15.18-19; Mzm 145:2-3.4-5.6-7.8-9; Mat 9:18-26',
    gospelCode: 'Mat 9:18-26',
    bco: 'Ams 3:1-20',
    color: 'Hijau'
  },
  {
    date: '2026-07-07',
    day: 7,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Hos 8:4-7.11-13; Mzm 115:3-4.5-6.7ab-8.9-10; Mat 9:32-38',
    gospelCode: 'Mat 9:32-38',
    bco: 'Ams 8:1-5.12-36',
    color: 'Hijau'
  },
  {
    date: '2026-07-08',
    day: 8,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Hos 10:1-3.7-8.12; Mzm 105:2-3.4-5.6-7; Mat 10:1-7',
    gospelCode: 'Mat 10:1-7',
    bco: 'Ams 9:1-18',
    color: 'Hijau'
  },
  {
    date: '2026-07-09',
    day: 9,
    status: 'Hari Biasa',
    name: 'St. Agustinus Zhao Rong, dkk',
    readings: 'Hos 11:1b.3-4.8c-9; Mzm 80:2ac.3b.15-16; Mat 10:7-15',
    gospelCode: 'Mat 10:7-15',
    bco: 'Ams 10:6-32',
    color: 'Hijau'
  },
  {
    date: '2026-07-10',
    day: 10,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Hos 14:2-10; Mzm 51:3-4.8-9.12-13.14.17; Mat 10:16-23',
    gospelCode: 'Mat 10:16-23',
    bco: 'Ams 15:8-30; 16:1-9',
    color: 'Hijau'
  },
  {
    date: '2026-07-11',
    day: 11,
    status: 'Perayaan Wajib',
    name: 'St. Benediktus',
    readings: 'Yes 6:1-8; Mzm 93:1ab.1c-2.5; Mat 10:24-33',
    gospelCode: 'Mat 10:24-33',
    bco: 'Ams 31:10-31',
    color: 'Putih'
  },
  {
    date: '2026-07-12',
    day: 12,
    status: 'Hari Minggu',
    name: 'Hari Minggu Biasa XV',
    readings: 'Yes. 55:10-11; Mzm. 65:10abcd,10e-11,12-13,14; Rm. 8:18-23; Mat. 13:1-23',
    gospelCode: 'Mat 13:1-23',
    bco: 'Ayb 1:1-22',
    color: 'Hijau'
  },
  {
    date: '2026-07-13',
    day: 13,
    status: 'Hari Biasa',
    name: 'St. Henrikus',
    readings: 'Yes 1:11-17; Mzm 50:8-9.16bc-17.21.23; Mat 10:34-11:1',
    gospelCode: 'Mat 10:34-11:1',
    bco: 'Ayb 2:1-13',
    color: 'Hijau'
  },
  {
    date: '2026-07-14',
    day: 14,
    status: 'Hari Biasa',
    name: 'St. Kamillus dr Lellis',
    readings: 'Yes 7:1-9; Mzm 48:2-3a.3b-4.5-6.7-8; Mat 11:20-24',
    gospelCode: 'Mat 11:20-24',
    bco: 'Ayb 3:1-26',
    color: 'Hijau'
  },
  {
    date: '2026-07-15',
    day: 15,
    status: 'Perayaan Wajib',
    name: 'St. Bonaventura',
    readings: 'Yes 10:5-7.13-16; Mzm 94:5-6.7-8.9-10.14-15; Mat 11:25-27',
    gospelCode: 'Mat 11:25-27',
    bco: 'Ayb 4:1-21',
    color: 'Putih'
  },
  {
    date: '2026-07-16',
    day: 16,
    status: 'Hari Biasa',
    name: 'St. Perawan Maria dr Gunung Karmel',
    readings: 'Yes 26:7-9.12.16-19; Mzm 102:13-14ab.15.16-18.19-21; Mat 11:28-30',
    gospelCode: 'Mat 11:28-30',
    bco: 'Ayb 5:1-27',
    color: 'Hijau'
  },
  {
    date: '2026-07-17',
    day: 17,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Yes 38:1-6.21-22.7-8; MT Yes 38:10.11.12abcd.16; Mat 12:1-8',
    gospelCode: 'Mat 12:1-8',
    bco: 'Ayb 6:1-30',
    color: 'Hijau'
  },
  {
    date: '2026-07-18',
    day: 18,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Mi 2:1-5; Mzm 10:1-2.3-4.7-8.14; Mat 12:14-21',
    gospelCode: 'Mat 12:14-21',
    bco: 'Ayb 7:1-21',
    color: 'Hijau'
  },
  {
    date: '2026-07-19',
    day: 19,
    status: 'Hari Minggu',
    name: 'Hari Minggu Biasa XVI',
    readings: 'Keb. 12:13,16-19; Mzm. 86:5-6,9-10,15-16a; Rm. 8:26-27; Mat. 13:24-43',
    gospelCode: 'Mat 13:24-43',
    bco: 'Ayb 11:1-20',
    color: 'Hijau'
  },
  {
    date: '2026-07-20',
    day: 20,
    status: 'Hari Biasa',
    name: 'St. Apollinaris',
    readings: 'Mi 6:1-4.6-8; Mzm 50:5-6.8-9.16bc-17.21.23; Mat 12:38-42',
    gospelCode: 'Mat 12:38-42',
    bco: 'Ayb 12:1-25',
    color: 'Hijau'
  },
  {
    date: '2026-07-21',
    day: 21,
    status: 'Hari Biasa',
    name: 'St. Laurensius dr Brindisi',
    readings: 'Mi 7:14-15.18-20; Mzm 85:2-4.5-6.7-8; Mat 12:46-50',
    gospelCode: 'Mat 12:46-50',
    bco: 'Ayb 13:13-14:6',
    color: 'Hijau'
  },
  {
    date: '2026-07-22',
    day: 22,
    status: 'Pesta',
    name: 'St. Maria Magdalena',
    readings: 'Kid. 3:1-4a atau 2Kor. 5:14-17; Mzm. 63:2,3-4,5-6,8-9; Yoh. 20:1.11-18',
    gospelCode: 'Yoh 20:1,11-18',
    bco: 'Rm. 12:1-21',
    color: 'Putih'
  },
  {
    date: '2026-07-23',
    day: 23,
    status: 'Hari Biasa',
    name: 'St. Birgitta',
    readings: 'Yer 2:1-3.7-8.12-13; Mzm 36:6-7ab.8-9.10-11; Mat 13:10-17',
    gospelCode: 'Mat 13:10-17',
    bco: 'Ayb 19:1-29',
    color: 'Hijau'
  },
  {
    date: '2026-07-24',
    day: 24,
    status: 'Hari Biasa',
    name: 'St. Sharbel Makhluf',
    readings: 'Yer 3:14-17; MT Yer. 31:10.11-12ab.13; Mat 13:18-23',
    gospelCode: 'Mat 13:18-23',
    bco: 'Ayb 22:1-30',
    color: 'Hijau'
  },
  {
    date: '2026-07-25',
    day: 25,
    status: 'Pesta',
    name: 'St. Yakobus, Rasul',
    readings: '2Kor. 4:7-15; Mzm. 126:1-2ab,2cd-3,4-5,6; Mat. 20:20-28',
    gospelCode: 'Mat 20:20-28',
    bco: 'Kis. 5:12-32 atau 1Kor. 1:17-2:5 atau 1Kor. 4:1-16',
    color: 'Merah'
  },
  {
    date: '2026-07-26',
    day: 26,
    status: 'Hari Minggu',
    name: 'Hari Minggu Biasa XVII (Hari Orangtua, Kakek dan Nenek Sedunia)',
    readings: '1Raj. 3:5,7-12; Mzm. 119:57,72,76-77,127-128,129-130; Rm. 8:28-30; Mat. 13:44-52',
    gospelCode: 'Mat 13:44-52',
    bco: 'Ayb 28:1-28',
    color: 'Hijau'
  },
  {
    date: '2026-07-27',
    day: 27,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Yer 13:1-11; MT Ul 32:18-19.20.21; Mat 13:31-35',
    gospelCode: 'Mat 13:31-35',
    bco: 'Ayb 29:1-10; 30:1.9-23',
    color: 'Hijau'
  },
  {
    date: '2026-07-28',
    day: 28,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Yer 14:17-22; Mzm 79:8.9.11.13; Mat 13:36-43',
    gospelCode: 'Mat 13:36-43',
    bco: 'Ayb 31:1-23.35-37',
    color: 'Hijau'
  },
  {
    date: '2026-07-29',
    day: 29,
    status: 'Perayaan Wajib',
    name: 'St. Marta, Maria, dan Lazarus',
    readings: '1Yoh. 4:7-16; Mzm. 34:2-3,4-5,6-7, 8-9,10-11; Yoh. 11:19-27 atau Luk. 10:38-42',
    gospelCode: 'Yoh 11:19-27',
    bco: 'Ayb 32:1-6; 33:1-22',
    color: 'Putih'
  },
  {
    date: '2026-07-30',
    day: 30,
    status: 'Hari Biasa',
    name: 'St. Petrus Krisologus',
    readings: 'Yer 18:1-6; Mzm 146:2abc.2d-4.5-6; Mat 13:47-53',
    gospelCode: 'Mat 13:47-53',
    bco: 'Ayb 38:1-30; 40:1-5',
    color: 'Hijau'
  },
  {
    date: '2026-07-31',
    day: 31,
    status: 'Perayaan Wajib',
    name: 'St. Ignasius dr Loyola',
    readings: 'Yer 26:1-9; Mzm 69:5.8-10.14; Mat 13:54-58',
    gospelCode: 'Mat 13:54-58',
    bco: 'Ayb 40:6-24; 42:1-6',
    color: 'Putih'
  }
];
