export interface LiturgicalDay {
  date: string;       // YYYY-MM-DD
  day: number;        // Day of month (1-31)
  status: string;     // status (e.g. Hari Biasa, Pesta, Perayaan Wajib)
  name: string;       // Name of feast/saint or general day description
  readings: string;   // Scripture readings summary
  gospelCode: string; // Query code for imankatolik.or.id
  bco: string;        // Bacaan Harian / Bacaan Ibadat Bacaan (BcO)
  color: 'Hijau' | 'Merah' | 'Putih' | 'Ungu' | 'Ungu/Hitam'; // Liturgical color
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

export const LITURGICAL_CALENDAR_AUGUST_2026: LiturgicalDay[] = [
  {
    date: '2026-08-01',
    day: 1,
    status: 'Perayaan Wajib',
    name: 'St. Alfonsus Maria de Liguori, Hari Sabtu Imam',
    readings: 'Yer 26:11-16.24; Mzm 69:15-16.30-31.33-34; Mat 14:1-12',
    gospelCode: 'Mat 14:1-12',
    bco: 'Ayb 42:7-17',
    color: 'Putih'
  },
  {
    date: '2026-08-02',
    day: 2,
    status: 'Hari Minggu Biasa XVIII',
    name: 'Hari Minggu Biasa XVIII',
    readings: 'Yes. 55:1-3; Mzm. 145:8-9,15-16,17-18; Rm. 8:35,37-39; Mat. 14:13-21',
    gospelCode: 'Mat 14:13-21',
    bco: 'Ob 1-21',
    color: 'Hijau'
  },
  {
    date: '2026-08-03',
    day: 3,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Yer. 28:1-17; Mzm. 119:29.43.79.80.95.102; Mat. 14:22-36',
    gospelCode: 'Mat 14:22-36',
    bco: 'Yl 1:13-2:11',
    color: 'Hijau'
  },
  {
    date: '2026-08-04',
    day: 4,
    status: 'Perayaan Wajib',
    name: 'St. Yohanes Maria Vianney',
    readings: 'Yer. 30:1-2.12-15.18-22; Mzm. 102:16-18.19-21.29.22-23; Mat. 15:1-2.10-14',
    gospelCode: 'Mat 15:1-2.10-14',
    bco: 'Yl 2:12-27',
    color: 'Putih'
  },
  {
    date: '2026-08-05',
    day: 5,
    status: 'Hari Biasa',
    name: 'Pemberkatan Gereja Basilik SP Maria',
    readings: 'Yer. 31:1-7; MT Yer. 31:10.11-12ab.13; Mat. 15:21-28',
    gospelCode: 'Mat 15:21-28',
    bco: 'Yl 2:28-3:8',
    color: 'Hijau'
  },
  {
    date: '2026-08-06',
    day: 6,
    status: 'Pesta Yesus Menampakkan Kemuliaan-Nya',
    name: 'Pesta Yesus Menampakkan Kemuliaan-Nya',
    readings: 'Dan. 7:9-10,13-14 atau 2Ptr. 1:16-19; Mzm. 97:1-2,5-6,9; Mat. 17:1-9',
    gospelCode: 'Mat 17:1-9',
    bco: '2Kor. 3:7-4:6',
    color: 'Putih'
  },
  {
    date: '2026-08-07',
    day: 7,
    status: 'Hari Biasa',
    name: 'St. Sistus II, St. Kayetanus',
    readings: 'Nah. 1:15; 2:2; 3:1-3.6-7; MT Ul. 32:35cd-36ab.39abcd.41; Mat. 16:24-28',
    gospelCode: 'Mat 16:24-28',
    bco: 'Mal 1:1-14; 2:13-16',
    color: 'Hijau'
  },
  {
    date: '2026-08-08',
    day: 8,
    status: 'Perayaan Wajib',
    name: 'St. Dominikus',
    readings: 'Hab. 1:12 � 2:4; Mzm. 9:8-9.10-11.12-13; Mat. 17:14-20;',
    gospelCode: 'Mat 17:14-20',
    bco: 'Mal 3:1-4:6',
    color: 'Putih'
  },
  {
    date: '2026-08-09',
    day: 9,
    status: 'Hari Minggu Biasa XIX',
    name: 'Hari Minggu Biasa XIX',
    readings: '1Raj. 19:9a,11-13a; Mzm. 85:9ab-10,11-12,13-14; Rm. 9:1-5; Mat. 14:22-33',
    gospelCode: 'Mat 14:22-33',
    bco: 'Yun 1:1�17; 2: 10',
    color: 'Hijau'
  },
  {
    date: '2026-08-10',
    day: 10,
    status: 'Pesta St. Laurensius',
    name: 'Pesta St. Laurensius',
    readings: '2Kor. 9:6-10; Mzm. 112:1-2,5-6,7-8,9; Yoh. 12:24-26;',
    gospelCode: 'Yoh 12:24-26',
    bco: 'Kis. 6:1-6; 8:1,4-8',
    color: 'Merah'
  },
  {
    date: '2026-08-11',
    day: 11,
    status: 'Perayaan Wajib',
    name: 'St. Klara',
    readings: 'Yeh 2:8-3:4; Mzm 119:14.24.72.103.111.131; Mat 18:1-5.10.12-14',
    gospelCode: 'Mat 18:1-5.10.12-14',
    bco: 'Za 9:1-10:2',
    color: 'Putih'
  },
  {
    date: '2026-08-12',
    day: 12,
    status: 'Hari Biasa',
    name: 'St. Yohana Fransiska de Chantal',
    readings: 'Yeh 9:1-7; 10:18-22; Mzm 113:1-2.3-4.5-6; Mat 18:15-20',
    gospelCode: 'Mat 18:15-20',
    bco: 'Za 10:3-11:3',
    color: 'Hijau'
  },
  {
    date: '2026-08-13',
    day: 13,
    status: 'Hari Biasa',
    name: 'St. Pontianus, St. Hippolitus',
    readings: 'Yeh 12:1-12; Mzm 78:56-57.58-59.61-62; Mat 18:21-19:1',
    gospelCode: 'Mat 18:21-19:1',
    bco: 'Za 11:4-12:8',
    color: 'Hijau'
  },
  {
    date: '2026-08-14',
    day: 14,
    status: 'Perayaan Wajib',
    name: 'St. Maksimilianus Maria Kolbe',
    readings: 'Yeh 16:1-15.60.63 atau Yeh 16:59-63; MT Yes 12:2-3.4bcd.5-6; Mat 19:3-12',
    gospelCode: 'Mat 19:3-12',
    bco: 'Za 12:9-13:9',
    color: 'Merah'
  },
  {
    date: '2026-08-15',
    day: 15,
    status: 'Hari Biasa',
    name: 'St. Tarsisius',
    readings: 'Yeh 18:1-10.13b.30-32; Mzm 51:12-13.14-15.18-19; Mat 19:13-15; Sore Menjelang Hari Raya: 1Taw. 15:3-4,15-16; 16:1-2; Mzm. 132:6-7,9-10,13-14; 1Kor. 15:54b-57; Luk. 11:27-28',
    gospelCode: 'Mat 19:13-15',
    bco: 'Za 14:1-21',
    color: 'Hijau'
  },
  {
    date: '2026-08-16',
    day: 16,
    status: 'HARI RAYA',
    name: 'SP MARIA DIANGKAT KE SURGA',
    readings: 'Why. 11:19a; 12:1,3-6a,10ab; Mzm. 45:10c-12,16; 1Kor. 15:20-26; Luk. 1:39-56',
    gospelCode: 'Luk 1:39-56',
    bco: 'Ef. 1:16-2:10 atau Why. 12:1-17',
    color: 'Putih'
  },
  {
    date: '2026-08-17',
    day: 17,
    status: 'HARI RAYA',
    name: 'KEMERDEKAAN REPUBLIK INDONESIA',
    readings: 'Sir. 10:1-8; Mzm. 101:1a,2ac, 3a,6-7; 1Ptr. 2:13-17; Mat. 22:15-21',
    gospelCode: 'Mat 22:15-21',
    bco: 'Gal. 5:1-26',
    color: 'Putih'
  },
  {
    date: '2026-08-18',
    day: 18,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Yeh 28:1-10; MT Ul 32:26-27ab.27cd-28.30.35cd-36ab; Mat 19:23-30',
    gospelCode: 'Mat 19:23-30',
    bco: 'Pkh 3:1-22',
    color: 'Hijau'
  },
  {
    date: '2026-08-19',
    day: 19,
    status: 'Hari Biasa',
    name: 'St. Yohanes Eudes',
    readings: 'Yeh 34:1-11; Mzm 23:1-3a.3b-4.5.6; Mat 20:1-16a',
    gospelCode: 'Mat 20:1-16a',
    bco: 'Pkh 5:10-6:8',
    color: 'Hijau'
  },
  {
    date: '2026-08-20',
    day: 20,
    status: 'Perayaan Wajib',
    name: 'St. Bernardus',
    readings: 'Yeh 36:23-28; Mzm 51:12-13.14-15.18-19; Mat 22:1-14;',
    gospelCode: 'Mat 22:1-14',
    bco: 'Pkh 6:12-7:28',
    color: 'Putih'
  },
  {
    date: '2026-08-21',
    day: 21,
    status: 'Perayaan Wajib',
    name: 'St. Pius X',
    readings: 'Yeh 37:1-14; Mzm 107:2-3.4-5.6-7.8-9; Mat 22:34-40;',
    gospelCode: 'Mat 22:34-40',
    bco: 'Pkh 8:5-9:10',
    color: 'Putih'
  },
  {
    date: '2026-08-22',
    day: 22,
    status: 'Perayaan Wajib',
    name: 'SP Maria, Ratu',
    readings: 'Yeh 43:1-7a; Mzm 85:9ab-10.11-12.13-14; Mat 23:1-12;',
    gospelCode: 'Mat 23:1-12',
    bco: 'Pkh 11:7-12:14',
    color: 'Putih'
  },
  {
    date: '2026-08-23',
    day: 23,
    status: 'Hari Minggu Biasa XXI',
    name: 'Hari Minggu Biasa XXI',
    readings: 'Yes. 22:19-23; Mzm. 138:1-2a,2bc-3,6,8bc; Rm. 11:33-36; Mat. 16:13-20',
    gospelCode: 'Mat 16:13-20',
    bco: 'Tit 1:1-16',
    color: 'Hijau'
  },
  {
    date: '2026-08-24',
    day: 24,
    status: 'Pesta',
    name: 'St. Bartolomeus, Rasul',
    readings: 'BcE Why. 21:9b-14; Mzm. 145:10-11,12-13ab,17-18; Yoh. 1:45-51',
    gospelCode: 'Yoh 1:45-51',
    bco: 'Kis. 5:12-32 atau 1Kor. 1:17-2:5 atau 1Kor. 4:1-16',
    color: 'Merah'
  },
  {
    date: '2026-08-25',
    day: 25,
    status: 'Hari Biasa',
    name: 'St. Ludovikus, St. Yosef dr Calasanz',
    readings: '2Tes 2:1-3a.13b-17; Mzm 96:10.11-12a.12b-13; Mat 23:23-26',
    gospelCode: 'Mat 23:23-26',
    bco: 'Tit 3:3-15',
    color: 'Hijau'
  },
  {
    date: '2026-08-26',
    day: 26,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: '2Tes 3:6-10.16-18; Mzm 128:1-2.4-5; Mat 23:27-32',
    gospelCode: 'Mat 23:27-32',
    bco: '1Tim 1:1-20',
    color: 'Hijau'
  },
  {
    date: '2026-08-27',
    day: 27,
    status: 'Perayaan Wajib',
    name: 'St. Monika',
    readings: '1Kor 1:1-9; Mzm 145:2-3.4-5.6-7; Mat 24:42-51;',
    gospelCode: 'Mat 24:42-51',
    bco: '1Tim 2:1-15',
    color: 'Putih'
  },
  {
    date: '2026-08-28',
    day: 28,
    status: 'Perayaan Wajib',
    name: 'St. Agustinus',
    readings: '1Kor 1:17-25; Mzm 33:1-2.4-5.10ab.11; Mat 25:1-13',
    gospelCode: 'Mat 25:1-13',
    bco: '1Tim 3:1-16',
    color: 'Putih'
  },
  {
    date: '2026-08-29',
    day: 29,
    status: 'Perayaan Wajib',
    name: 'Wafatnya S. Yohanes Pembaptis',
    readings: 'Yer. 1:17-19; Mzm. 71:1-2,3-4a,5-6ab,15ab,17; Mrk. 6:17-29',
    gospelCode: 'Mrk 6:17-29',
    bco: '1Tim 4:1-5:2',
    color: 'Merah'
  },
  {
    date: '2026-08-30',
    day: 30,
    status: 'Hari Minggu Biasa XXII',
    name: 'Hari Minggu Biasa XXII',
    readings: 'Yer. 20:7-9; Mzm. 63:2,3-4,5-6,8-9; Rm. 12:1-2; Mat. 16:21-27',
    gospelCode: 'Mat 16:21-27',
    bco: '1Tim 5:3-25',
    color: 'Hijau'
  },
  {
    date: '2026-08-31',
    day: 31,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: '1Kor 2:1-5; Mzm 119:97.98.99. 100.101.102; Luk 4:16-30',
    gospelCode: 'Luk 4:16-30',
    bco: '1Tim 6:1-10',
    color: 'Hijau'
  }
];

export const LITURGICAL_CALENDAR_SEPTEMBER_2026: LiturgicalDay[] = [
  {
    date: '2026-09-01',
    day: 1,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: '1Kor 2:10b-16; Mzm 145:8-9.10-11.12-13ab.13cd-14; Luk 4:31-37',
    gospelCode: 'Luk 4:31-37',
    bco: '1Tim 6:11-21',
    color: 'Hijau'
  },
  {
    date: '2026-09-02',
    day: 2,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: '1Kor 3:1-9; Mzm 33:12-13.14-15.20-21; Luk 4:38-44',
    gospelCode: 'Luk 4:38-44',
    bco: '2Tim 1:1-18',
    color: 'Hijau'
  },
  {
    date: '2026-09-03',
    day: 3,
    status: 'Peringatan Wajib',
    name: 'St. Gregorius Agung',
    readings: '1Kor 3:18-23; Mzm 24:1-2.3-4ab.5-6; Luk 5:1-11',
    gospelCode: 'Luk 5:1-11',
    bco: '2Tim 2:1-21',
    color: 'Putih'
  },
  {
    date: '2026-09-04',
    day: 4,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: '1Kor 4:1-5; Mzm 37:3-4.5-6.27-28. 39-40; Luk 5:33-39',
    gospelCode: 'Luk 5:33-39',
    bco: '2Tim 2:22-3:17',
    color: 'Hijau'
  },
  {
    date: '2026-09-05',
    day: 5,
    status: 'Hari Biasa',
    name: 'St. Teresa dr Kalkuta, Hari Sabtu Imam',
    readings: '1Kor 4:6b-15; Mzm 145:17-18.19-20.21; Luk 6:1-5',
    gospelCode: 'Luk 6:1-5',
    bco: '2Tim 4:1-22',
    color: 'Hijau'
  },
  {
    date: '2026-09-06',
    day: 6,
    status: 'Hari Minggu Biasa XXIII / Hari Minggu Kitab Suci Nasional',
    name: 'Hari Minggu Biasa XXIII / Hari Minggu Kitab Suci Nasional',
    readings: 'Yeh. 33:7-9; Mzm. 95:1-2,6-7,8-9; Rm. 13:8-10; Mat. 18:15-20',
    gospelCode: 'Mat 18:15-20',
    bco: '2Ptr 1:1-11',
    color: 'Hijau'
  },
  {
    date: '2026-09-07',
    day: 7,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: '1Kor 5:1-8; Mzm 5:5-6.7.12; Luk 6:6-11',
    gospelCode: 'Luk 6:6-11',
    bco: '2Ptr 1:12-21',
    color: 'Hijau'
  },
  {
    date: '2026-09-08',
    day: 8,
    status: 'Pesta',
    name: 'Kelahiran Santa Perawan Maria',
    readings: 'Mi 5:1-4a atau Rm 8:28-30; Mzm 13:6ab.6cd; Mat 1:1-16.18-23 (panjang) atau Mat 1:18-23 (singkat)',
    gospelCode: 'Mat 1:1-16.18-23 (panjang) atau Mat 1:18-23 (singkat)',
    bco: 'Kej 3:9-20 atau Sir 24:2-12.16-22',
    color: 'Putih'
  },
  {
    date: '2026-09-09',
    day: 9,
    status: 'Hari Biasa',
    name: 'St. Petrus Klaver',
    readings: '1Kor 7:25-31; Mzm 45:11-12.14-15.16-17; Luk 6:20-26',
    gospelCode: 'Luk 6:20-26',
    bco: '2Ptr 2:9-22',
    color: 'Hijau'
  },
  {
    date: '2026-09-10',
    day: 10,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: '1Kor 8:1b-7.11-13; Mzm 139:1-3.13-14ab.23-24; Luk 6:27-38',
    gospelCode: 'Luk 6:27-38',
    bco: '2Ptr 3:1-10',
    color: 'Hijau'
  },
  {
    date: '2026-09-11',
    day: 11,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: '1Kor 9:16-19.22b-27; Mzm 84:3.4.5-6.12; Luk 6:39-42',
    gospelCode: 'Luk 6:39-42',
    bco: '2Ptr 3:11-18',
    color: 'Hijau'
  },
  {
    date: '2026-09-12',
    day: 12,
    status: 'Hari Biasa',
    name: 'Nama Tersuci Maria',
    readings: '1Kor 10:14-22a; Mzm 116:12-13.17-18; Luk 6:43-49',
    gospelCode: 'Luk 6:43-49',
    bco: 'Yud 1-25',
    color: 'Hijau'
  },
  {
    date: '2026-09-13',
    day: 13,
    status: 'Hari Minggu Biasa XXIV',
    name: 'Hari Minggu Biasa XXIV',
    readings: 'Sir. 27:33-28:9; Mzm. 103:1-2,3-4,9-10,11-12; Rm. 14:7-9; Mat. 18:21-35',
    gospelCode: 'Mat 18:21-35',
    bco: 'Est 1:1-3.9-16.19; 2:5-10.16-17',
    color: 'Hijau'
  },
  {
    date: '2026-09-14',
    day: 14,
    status: 'Pesta',
    name: 'Pemuliaan Salib Suci',
    readings: 'Bil. 21:4-9 atau Flp. 2:6-11; Mzm. 78:1-2.34-35,36-37,38; Yoh. 3:13-17',
    gospelCode: 'Yoh 3:13-17',
    bco: 'Gal. 2:19-3:7,13-14; 6:14-18',
    color: 'Merah'
  },
  {
    date: '2026-09-15',
    day: 15,
    status: 'Perayaan Wajib',
    name: 'SP Maria Berdukacita',
    readings: 'Ibr. 5:7-9; Mzm. 31:2-3a,3b-4,5-6,15-16,20; Yoh. 19:25-27 atau Luk. 2:33-35',
    gospelCode: 'Yoh 19:25-27 atau Luk. 2:33-35',
    bco: 'Est 4:1-16',
    color: 'Putih'
  },
  {
    date: '2026-09-16',
    day: 16,
    status: 'Perayaan Wajib',
    name: 'St. Kornelius, St. Siprianus',
    readings: '1Kor 12:31-13:13; Mzm 33:2-3.4-5.12.22; Luk 7:31-35',
    gospelCode: 'Luk 7:31-35',
    bco: 'Est 14:1-19',
    color: 'Merah'
  },
  {
    date: '2026-09-17',
    day: 17,
    status: 'Hari Biasa',
    name: 'St. Robertus Bellarminus, St. Hildegardis dr Bingen',
    readings: '1Kor 15:1-11; Mzm 118:1-2.16ab-17.28; Luk 7:36-50',
    gospelCode: 'Luk 7:36-50',
    bco: 'Est 5:1-14; 7:1-10',
    color: 'Hijau'
  },
  {
    date: '2026-09-18',
    day: 18,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: '1Kor 15:12-20; Mzm 17:1.6-7.8b.15; Luk 8:1-3',
    gospelCode: 'Luk 8:1-3',
    bco: 'Bar 1:14-2:5; 3:1-8',
    color: 'Hijau'
  },
  {
    date: '2026-09-19',
    day: 19,
    status: 'Hari Biasa',
    name: 'St. Yanuarius',
    readings: '1Kor 15:35-37.42-49; Mzm 56:10.11-12.13-14; Luk 8:4-15',
    gospelCode: 'Luk 8:4-15',
    bco: 'Bar 3:9-15.24-4:4',
    color: 'Hijau'
  },
  {
    date: '2026-09-20',
    day: 20,
    status: 'Hari Minggu Biasa XXV',
    name: 'Hari Minggu Biasa XXV',
    readings: 'Yes. 55:6-9; Mzm. 145:2-3,8-9,17-18; Flp. 1:20c-24,27a; Mat. 20:1-16a',
    gospelCode: 'Mat 20:1-16a',
    bco: 'Tob 1:1-22',
    color: 'Hijau'
  },
  {
    date: '2026-09-21',
    day: 21,
    status: 'Pesta',
    name: 'St. Matius, Penginjil',
    readings: 'Ef. 4:1-7,11-13; Mzm. 19:2-3,4-5; Mat. 9:9-13',
    gospelCode: 'Mat 9:9-13',
    bco: 'Ef. 4:1-16',
    color: 'Merah'
  },
  {
    date: '2026-09-22',
    day: 22,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Ams. 21:1-6.10-13; Mzm. 119:1.27.30.34.35.44; Luk. 8:19-21',
    gospelCode: 'Luk 8:19-21',
    bco: 'Tob 3:7-17',
    color: 'Hijau'
  },
  {
    date: '2026-09-23',
    day: 23,
    status: 'Perayaan Wajib',
    name: 'St. Pius dr Pietrelcina - Padre Pio',
    readings: 'Ams 30:5-9; Mzm 119:29.72.89.101.104.163; Luk 9:1-6;',
    gospelCode: 'Luk 9:1-6',
    bco: 'Tob 4:1-5.19-21; 5:1-16',
    color: 'Putih'
  },
  {
    date: '2026-09-24',
    day: 24,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Pkh 1:2-11; Mzm 90:3-4.5-6.12-13.14.17; Luk 9:7-9',
    gospelCode: 'Luk 9:7-9',
    bco: 'Tob 6:1-17',
    color: 'Hijau'
  },
  {
    date: '2026-09-25',
    day: 25,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Pkh 3:1-11; Mzm 144:1a.2abc.3-4; Luk 9:18-22',
    gospelCode: 'Luk 9:18-22',
    bco: 'Tob 7:1.8b-17; 8:5-13',
    color: 'Hijau'
  },
  {
    date: '2026-09-26',
    day: 26,
    status: 'Hari Biasa',
    name: 'St. Kosmas dan Damianus',
    readings: 'Pkh 11:9-12:8; Mzm 90:3-4.5-6.12-13.14.17; Luk 9:43b-45',
    gospelCode: 'Luk 9:43b-45',
    bco: 'Tob 10:7c-11:15',
    color: 'Hijau'
  },
  {
    date: '2026-09-27',
    day: 27,
    status: 'Hari Minggu Biasa XXVI',
    name: 'Hari Minggu Biasa XXVI',
    readings: 'Yeh. 18:25-28; Mzm. 25:4bc-5,6-7,8-9; Flp. 2:1-11 (panjang) atau Flp. 2:1-5 (singkat); Mat. 21:28-32',
    gospelCode: 'Mat 21:28-32',
    bco: 'Ydt 2:1-6; 3:6; 4:1-2.9-15',
    color: 'Hijau'
  },
  {
    date: '2026-09-28',
    day: 28,
    status: 'Hari Biasa',
    name: 'St. Wenseslaus, St. Laurensius Ruiz, dkk',
    readings: 'Ayb 1:6-22; Mzm 17:1.2-3.6-7; Luk 9:46-50',
    gospelCode: 'Luk 9:46-50',
    bco: 'Ydt 5:1-21',
    color: 'Hijau'
  },
  {
    date: '2026-09-29',
    day: 29,
    status: 'Pesta',
    name: 'St. Mikael, Gabriel, dan Rafael, Malaikat Agung',
    readings: 'Dan 7:9-10.13-14 atau Why 12:7-12a; Mzm 138:1-2a.2bc-3.4-5; Yoh 1:47-51',
    gospelCode: 'Yoh 1:47-51',
    bco: 'Why 12:1-18',
    color: 'Putih'
  },
  {
    date: '2026-09-30',
    day: 30,
    status: 'Perayaan Wajib',
    name: 'St. Hieronimus',
    readings: 'Ayb 9:1-12.14-16; Mzm 88:10bc-11.12-13.14-15; Luk 9:57-62',
    gospelCode: 'Luk 9:57-62',
    bco: 'Ydt 8:1a.10-14.28-33; 9:1-14',
    color: 'Putih'
  }
];

export const LITURGICAL_CALENDAR_OCTOBER_2026: LiturgicalDay[] = [
  {
    date: '2026-10-01',
    day: 1,
    status: 'Pesta St. Teresia dr Kanak-kanak Yesus',
    name: 'Pesta St. Teresia dr Kanak-kanak Yesus',
    readings: 'Yes. 66:10-14b atau 1 Kor. 12:31-13:13; Mzm. 131:1,2,3; Mat. 18:1-5',
    gospelCode: 'Mat 18:1-5',
    bco: '1Kor 7:25-40',
    color: 'Putih'
  },
  {
    date: '2026-10-02',
    day: 2,
    status: 'Perayaan Wajib',
    name: 'Para Malaikat Pelindung',
    readings: 'Kel 23:20-23a; Mzm 91:1-2.3-4.5-6.10-11; Mat 18:1-5.10',
    gospelCode: 'Mat 18:1-5.10',
    bco: 'Ydt 12:1-13:2',
    color: 'Putih'
  },
  {
    date: '2026-10-03',
    day: 3,
    status: 'Hari Biasa',
    name: 'Hari Sabtu Imam',
    readings: 'Ayb 42:1-3.5-6.12-16; Mzm 119:66.71.75.91.125.130; Luk 10:17-24',
    gospelCode: 'Luk 10:17-24',
    bco: 'Ydt 13:3-14:7',
    color: 'Hijau'
  },
  {
    date: '2026-10-04',
    day: 4,
    status: 'Hari Minggu biasa XXVII',
    name: 'Hari Minggu biasa XXVII',
    readings: 'Yes. 5:1-7; Mzm. 80:9,12,13-14,15-16,19-20; Flp. 4:6-9; Mat. 21:33-43',
    gospelCode: 'Mat 21:33-43',
    bco: 'Sir 1:1-20',
    color: 'Hijau'
  },
  {
    date: '2026-10-05',
    day: 5,
    status: 'Hari Biasa',
    name: 'St. Faustina Kowalska',
    readings: 'Gal 1:6-12; Mzm 111:1-2.7-8.9.10c; Luk 10:25-37',
    gospelCode: 'Luk 10:25-37',
    bco: 'Sir 2:1-18',
    color: 'Hijau'
  },
  {
    date: '2026-10-06',
    day: 6,
    status: 'Hari Biasa',
    name: 'St. Bruno',
    readings: 'Gal 1:13-24; Mzm 139:1-3.13-14ab.14c-15; Luk 10:38-42',
    gospelCode: 'Luk 10:38-42',
    bco: 'Sir 3:1-16',
    color: 'Hijau'
  },
  {
    date: '2026-10-07',
    day: 7,
    status: 'Perayaan Wajib',
    name: 'SP Maria, Ratu Rosario',
    readings: 'Gal 2:1-2.7-14; Mzm 117:1.2; Luk 11:1-4',
    gospelCode: 'Luk 11:1-4',
    bco: 'Sir 3:17-4:10',
    color: 'Putih'
  },
  {
    date: '2026-10-08',
    day: 8,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Gal 3:1-5; MT Luk 1:69-70.71-72.73-75; Luk 11:5-13',
    gospelCode: 'Luk 11:5-13',
    bco: 'Sir 5:1-6:4',
    color: 'Hijau'
  },
  {
    date: '2026-10-09',
    day: 9,
    status: 'Hari Biasa',
    name: 'St. Dionisius, St. Yohanes Leonardus',
    readings: 'Gal 3:7-14; Mzm 111:1-2.3-4.5-6; Luk 11:15-26',
    gospelCode: 'Luk 11:15-26',
    bco: 'Sir 6:5-37',
    color: 'Hijau'
  },
  {
    date: '2026-10-10',
    day: 10,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Gal 3:22-29; Mzm 105:2-3.4-5.6-7; Luk 11:27-28',
    gospelCode: 'Luk 11:27-28',
    bco: 'Sir 7:22-36',
    color: 'Hijau'
  },
  {
    date: '2026-10-11',
    day: 11,
    status: 'Hari Minggu Biasa XXVIII',
    name: 'Hari Minggu Biasa XXVIII',
    readings: 'Yes. 25:6-10a; Mzm. 23:1-3a,3b-4,5,6; Flp. 4:12-14,19-20; Mat. 22:1-14 (panjang) atau Mat. 22:1-10 (singkat)',
    gospelCode: 'Mat 22:1-14 (panjang) atau Mat. 22:1-10 (singkat)',
    bco: 'Sir 10:6-18',
    color: 'Hijau'
  },
  {
    date: '2026-10-12',
    day: 12,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Gal. 4:22-24.26-27.31-5:1; Mzm. 113:1-2.3-4.5a.6-7; Luk. 11:29-32',
    gospelCode: 'Luk 11:29-32',
    bco: 'Sir 11:11-28',
    color: 'Hijau'
  },
  {
    date: '2026-10-13',
    day: 13,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Gal. 4: 31b � 5:6; Mzm. 119:41.43.44.45.47.48; Luk. 11:37-41',
    gospelCode: 'Luk 11:37-41',
    bco: 'Sir 14:20-15:10',
    color: 'Hijau'
  },
  {
    date: '2026-10-14',
    day: 14,
    status: 'Hari Biasa',
    name: 'St. Kalistus I',
    readings: 'Gal. 5:18-25; Mzm. 1:1-2.3.4.6; Luk. 11:42-46',
    gospelCode: 'Luk 11:42-46',
    bco: 'Sir 15:11-20',
    color: 'Hijau'
  },
  {
    date: '2026-10-15',
    day: 15,
    status: 'Perayaan Wajib',
    name: 'St. Teresia dr Yesus',
    readings: 'Ef. 1:1-10; Mzm. 98:1.2-3ab.3cd-4.5-6; Luk. 11:47-54',
    gospelCode: 'Luk 11:47-54',
    bco: 'Sir 16:24-17:14',
    color: 'Putih'
  },
  {
    date: '2026-10-16',
    day: 16,
    status: 'Hari Biasa',
    name: 'St. Hedwig, St. Margarita Maria Alacoque',
    readings: 'Ef. 1:11-14; Mzm. 33:1-2.4-5.12-13; Luk. 12:1-7',
    gospelCode: 'Luk 12:1-7',
    bco: 'Sir 17:15-32',
    color: 'Hijau'
  },
  {
    date: '2026-10-17',
    day: 17,
    status: 'Perayaan Wajib',
    name: 'Perayaan Wajib',
    readings: 'Ef. 1:15-23; Mzm. 8:2-3a.4-5.6-7; Luk. 12:8-12',
    gospelCode: 'Luk 12:8-12',
    bco: 'Sir 24:1-22',
    color: 'Merah'
  },
  {
    date: '2026-10-18',
    day: 18,
    status: 'Hari Minggu Biasa XXIX / Hari Minggu Misi',
    name: 'Hari Minggu Biasa XXIX / Hari Minggu Misi',
    readings: 'Yes. 45:1,4-6; Mzm. 96:1,3,4-5,7-8,9-10ac; 1Tes. 1:1-5b; Mat. 22:15-21',
    gospelCode: 'Mat 22:15-21',
    bco: 'Sir 26:1-4.9-18',
    color: 'Hijau'
  },
  {
    date: '2026-10-19',
    day: 19,
    status: 'Hari Biasa',
    name: 'St. Yohanes de Brebeuf dan Isaac Jogues, St. Paulus dr Salib',
    readings: 'Ef. 2:1-10; Mzm. 100:2.3.4.5; Luk. 12: 13-21',
    gospelCode: 'Luk 12: 13-21',
    bco: 'Sir 27:22-28:7',
    color: 'Hijau'
  },
  {
    date: '2026-10-20',
    day: 20,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Ef. 2:12-22; Mzm. 85:9ab-10.11-12.13-14; Luk. 12:35-38',
    gospelCode: 'Luk 12:35-38',
    bco: 'Sir 29:1-13; 31:1-4',
    color: 'Hijau'
  },
  {
    date: '2026-10-21',
    day: 21,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Ef. 3:2-12; MT Yes. 12:2-3.4bcd.5-6; Luk. 12:39-48',
    gospelCode: 'Luk 12:39-48',
    bco: 'Sir 35:1-17',
    color: 'Hijau'
  },
  {
    date: '2026-10-22',
    day: 22,
    status: 'Hari Biasa',
    name: 'St. Yohanes Paulus II',
    readings: 'Ef. 3:14-21; Mzm. 33:1-2.4-5.11-12.18-19; Luk. 12:49-53',
    gospelCode: 'Luk 12:49-53',
    bco: 'Sir 38:24-39:11',
    color: 'Hijau'
  },
  {
    date: '2026-10-23',
    day: 23,
    status: 'Hari Biasa',
    name: 'Yohanes dr Kapestrano',
    readings: 'Ef. 4:1-6; Mzm. 24:1-2.3-4ab.5-6; Luk. 12:54-59',
    gospelCode: 'Luk 12:54-59',
    bco: 'Sir 42:15-25; 43:27-33',
    color: 'Hijau'
  },
  {
    date: '2026-10-24',
    day: 24,
    status: 'Hari Biasa',
    name: 'St. Antonius Maria Claret',
    readings: 'Ef. 4:7-16; Mzm. 122:1-2.3-4a.4b-5; Luk. 13:1-9',
    gospelCode: 'Luk 13:1-9',
    bco: 'Sir 51:1-12',
    color: 'Hijau'
  },
  {
    date: '2026-10-25',
    day: 25,
    status: 'Hari Minggu Biasa XXX',
    name: 'Hari Minggu Biasa XXX',
    readings: 'Kel. 22:21-27; Mzm. 18:2-3a,3bc-4,47,51ab; 1Tes. 1:5c-10; Mat. 22:34-40',
    gospelCode: 'Mat 22:34-40',
    bco: 'Keb 1:1-15',
    color: 'Hijau'
  },
  {
    date: '2026-10-26',
    day: 26,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Ef. 4:32 � 5:8; Mzm. 1:1-2.3.4.6; Luk. 13:10-17',
    gospelCode: 'Luk 13:10-17',
    bco: 'Keb 1:16-2:24',
    color: 'Hijau'
  },
  {
    date: '2026-10-27',
    day: 27,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Ef. 5:21-33; Mzm. 128:1-2.3.4-5; Luk. 13:18-21',
    gospelCode: 'Luk 13:18-21',
    bco: 'Keb 3:1-19',
    color: 'Hijau'
  },
  {
    date: '2026-10-28',
    day: 28,
    status: 'Pesta',
    name: 'St. Simon dan Yudas, Rasul',
    readings: 'Ef. 2:19-22; Mzm. 19:2-3.4-5; Luk. 6:12-19',
    gospelCode: 'Luk 6:12-19',
    bco: 'Kis. 5:12-32 atau 1Kor. 1:17-2:5 atau 1Kor. 4:1-16',
    color: 'Merah'
  },
  {
    date: '2026-10-29',
    day: 29,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Ef. 6:10-20; Mzm. 144:1.2.9-10; Luk. 13:31-35',
    gospelCode: 'Luk 13:31-35',
    bco: 'Keb 5:1-23',
    color: 'Hijau'
  },
  {
    date: '2026-10-30',
    day: 30,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Flp. 1:1-11; Mzm. 111:1-2.3-4.5-6; Luk. 14:1-6',
    gospelCode: 'Luk 14:1-6',
    bco: 'Keb 6:1-25',
    color: 'Hijau'
  },
  {
    date: '2026-10-31',
    day: 31,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Flp. 1:18b-26; Mzm. 42:2.3.5bcd; Luk. 14:1.7-11',
    gospelCode: 'Luk 14:1.7-11',
    bco: 'Keb 7:15-30',
    color: 'Hijau'
  }
];

export const LITURGICAL_CALENDAR_NOVEMBER_2026: LiturgicalDay[] = [
  {
    date: '2026-11-01',
    day: 1,
    status: 'HARI RAYA SEMUA ORANG KUDUS',
    name: 'HARI RAYA SEMUA ORANG KUDUS',
    readings: 'Why. 7:2-4.9-14; Mzm. 24:1-2.3-4ab.5-6; 1Yoh. 3:1-3; Mat. 5:1-12a',
    gospelCode: 'Mat 5:1-12a',
    bco: 'Why. 4:1-11 atau Why. 5:1-14',
    color: 'Putih'
  },
  {
    date: '2026-11-02',
    day: 2,
    status: 'Hari Biasa',
    name: 'PENGENANGAN ARWAH SEMUA ORANG BERIMAN',
    readings: '2Mak. 12:43-46; Mzm. 143:1-2, 5-6,7ab.8ab.10; 1Kor. 15:20-24a.25-28; Yoh. 6:37-40',
    gospelCode: 'Yoh 6:37-40',
    bco: '1 Kor. 15:12-34; atau 1Kor. 15:35-57; atau 2Kor. 4:16-5:10',
    color: 'Ungu/Hitam'
  },
  {
    date: '2026-11-03',
    day: 3,
    status: 'Hari Biasa',
    name: 'St. Martinus de Porres',
    readings: 'Flp. 2:5-11; Mzm. 22:26b-27.28-30a.31-32; Luk. 14:15-24',
    gospelCode: 'Luk 14:15-24',
    bco: 'Keb 10:1-11:4',
    color: 'Hijau'
  },
  {
    date: '2026-11-04',
    day: 4,
    status: 'Perayaan Wajib',
    name: 'St. Karolus Borromeus',
    readings: 'BcE Flp. 2:12-18; Mzm. 27:1.4.13-14; Luk. 14:25-33;',
    gospelCode: 'Luk 14:25-33',
    bco: 'Keb 11:20b-12:2.11b-19',
    color: 'Putih'
  },
  {
    date: '2026-11-05',
    day: 5,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Flp. 3:3-8a; Mzm. 105:2-3.4-5.6-7; Luk. 15:1-10',
    gospelCode: 'Luk 15:1-10',
    bco: 'Keb 13:1-10; 14:15-21; 15:1-6',
    color: 'Hijau'
  },
  {
    date: '2026-11-06',
    day: 6,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Flp. 3:17-4:1; Mzm. 122:1-2.3-4a.4b-5; Luk. 16:1-8',
    gospelCode: 'Luk 16:1-8',
    bco: 'Keb 15:18-16:13.20-25',
    color: 'Hijau'
  },
  {
    date: '2026-11-07',
    day: 7,
    status: 'Hari Biasa',
    name: 'Hari Sabtu Imam',
    readings: 'Flp. 4:10-19; Mzm. 112:1-2.5-6.8a.9; Luk. 16:9-15',
    gospelCode: 'Luk 16:9-15',
    bco: 'Keb 18:1-15a',
    color: 'Hijau'
  },
  {
    date: '2026-11-08',
    day: 8,
    status: 'Hari Minggu',
    name: 'Biasa XXXII',
    readings: 'Keb. 6:12-17; Mzm. 63:2,3-4,5-6,7-8; 1Tes. 4:13-18 (panjang) atau 1Tes. 4:13-14 (singkat); Mat. 25:1-13',
    gospelCode: 'Mat 25:1-13',
    bco: '1Mak 1:1-24',
    color: 'Hijau'
  },
  {
    date: '2026-11-09',
    day: 9,
    status: 'Pesta',
    name: 'Pemberkatan Gereja Basilik Lateran',
    readings: 'Yeh. 47:1-2.8-9,12 atau 1Kor. 3:9b-11,16-17; Mzm. 46:2-3,5-6,8-9; Yoh. 2:13-22',
    gospelCode: 'Yoh 2:13-22',
    bco: '1Ptr. 2:1-17 atau Why. 21:9-27',
    color: 'Putih'
  },
  {
    date: '2026-11-10',
    day: 10,
    status: 'Perayaan Wajib',
    name: 'St. Leo Agung',
    readings: 'Tit. 2:1-8.11-14; Mzm. 37:3-4.18.23.27.29; Luk. 17:7-10;',
    gospelCode: 'Luk 17:7-10',
    bco: '2Mak 6:12-31',
    color: 'Putih'
  },
  {
    date: '2026-11-11',
    day: 11,
    status: 'Perayaan Wajib',
    name: 'St. Martinus dr Tours',
    readings: 'Tit. 3:1-7; Mzm. 23:1-3a.3b-4.5.6; Luk. 17:11-19;',
    gospelCode: 'Luk 17:11-19',
    bco: '2Mak 7:1-19',
    color: 'Putih'
  },
  {
    date: '2026-11-12',
    day: 12,
    status: 'Perayaan Wajib',
    name: 'St. Yosafat',
    readings: 'Flm. 7-20; Mzm. 146:7.8-9a.9bc-10; Luk. 17:20-25;',
    gospelCode: 'Luk 17:20-25',
    bco: '2Mak 7:20-41',
    color: 'Merah'
  },
  {
    date: '2026-11-13',
    day: 13,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: '2Yoh. 4-9; Mzm. 119:1.2.10.11.17.18; Luk. 17:26-37',
    gospelCode: 'Luk 17:26-37',
    bco: '1Mak 2:1.15-28.42-50.65-70',
    color: 'Hijau'
  },
  {
    date: '2026-11-14',
    day: 14,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: '3Yoh. 5-8; Mzm. 112:1-2.3-4.5-6; Luk. 18:1-8',
    gospelCode: 'Luk 18:1-8',
    bco: '1Mak 3:1-26',
    color: 'Hijau'
  },
  {
    date: '2026-11-15',
    day: 15,
    status: 'Hari Minggu',
    name: 'Biasa XXXIII',
    readings: 'Ams. 31:10-13,19-20,30-31; Mzm. 128:1-2,3,4-5; 1Tes. 5:1-6; Mat. 25:14-30 (panjang) atau Mat. 25:14-15,19-21 (singkat)',
    gospelCode: 'Mat 25:14-30 (panjang) atau Mat. 25:14-15,19-21 (singkat)',
    bco: '1Mak 4:36-59',
    color: 'Hijau'
  },
  {
    date: '2026-11-16',
    day: 16,
    status: 'Hari Biasa',
    name: 'St. Margarita dr Skotlandia, St. Gertrud',
    readings: 'Why. 1:1-4; 2:1-5a; Mzm. 1:1-2.3.4.6; Luk. 18:35-43',
    gospelCode: 'Luk 18:35-43',
    bco: '2Mak 12:36-45',
    color: 'Hijau'
  },
  {
    date: '2026-11-17',
    day: 17,
    status: 'Perayaan Wajib',
    name: 'St. Elisabet dr Hungaria',
    readings: 'Why. 3:1-6.14-22; Mzm. 15:2-3ab.3cd-4ab.5; Luk. 19:1-10',
    gospelCode: 'Luk 19:1-10',
    bco: '1Mak. 6:1-17',
    color: 'Putih'
  },
  {
    date: '2026-11-18',
    day: 18,
    status: 'Hari Biasa',
    name: 'Pemberkatan Gereja-gereja Basilik St. Petrus dan Paulus, Rasul',
    readings: 'Why. 4:1-11; Mzm. 150:1-2.3-4.5-6; Luk. 19:11-28',
    gospelCode: 'Luk 19:11-28',
    bco: '1Mak. 9:1-22',
    color: 'Hijau'
  },
  {
    date: '2026-11-19',
    day: 19,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Why. 5:1-10; Mzm. 149:1-2.3-4.5-6a.9b; Luk. 19:41-44',
    gospelCode: 'Luk 19:41-44',
    bco: 'Dan. 1:1-21',
    color: 'Hijau'
  },
  {
    date: '2026-11-20',
    day: 20,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Why. 10:8-11; Mzm. 119:14.24.72.103.111.131; Luk. 19:45-48',
    gospelCode: 'Luk 19:45-48',
    bco: 'Dan. 2:1.25-47',
    color: 'Hijau'
  },
  {
    date: '2026-11-21',
    day: 21,
    status: 'Perayaan Wajib',
    name: 'SP Maria Dipersembahkan kepada Allah',
    readings: 'Why. 11:4-12; Mzm. 144:1.2.9-10; Luk. 20:27-40',
    gospelCode: 'Luk 20:27-40',
    bco: 'Dan. 3:8-23.24-30',
    color: 'Putih'
  },
  {
    date: '2026-11-22',
    day: 22,
    status: 'HARI RAYA',
    name: 'TUHAN KITA YESUS KRISTUS RAJA SEMESTA ALAM, Hari Orang Muda Sedunia',
    readings: 'Yeh. 34:11-12,15-17; Mzm. 23:1-2a,2b-3,5-6; 1Kor. 15:20-26,28; Mat. 25:31-46',
    gospelCode: 'Mat 25:31-46',
    bco: 'Dan. 7:1-27 atau Why. 1:4-6.10.12-18; 2:26.28; 3:5.12.20-21',
    color: 'Putih'
  },
  {
    date: '2026-11-23',
    day: 23,
    status: 'Hari Biasa',
    name: 'St. Klemens I, St. Kolumbanus',
    readings: 'Why. 14:1-3.4b-5; Mzm. 24:1-2.3-4ab.5-6; Luk. 21:1-4',
    gospelCode: 'Luk 21:1-4',
    bco: 'Dan. 5:1-17.23-6:1',
    color: 'Hijau'
  },
  {
    date: '2026-11-24',
    day: 24,
    status: 'Perayaan Wajib',
    name: 'St. Andreas Dung Lac',
    readings: 'Why. 14:14-20; Mzm. 96:10.11-12.13; Luk. 21:5-11',
    gospelCode: 'Luk 21:5-11',
    bco: 'Dan. 6:5-28',
    color: 'Merah'
  },
  {
    date: '2026-11-25',
    day: 25,
    status: 'Hari Biasa',
    name: 'St. Katarina dr Aleksandria',
    readings: 'Why. 15:1-4; Mzm. 98:1.2-3ab.7-8.9; Luk. 21:12-19',
    gospelCode: 'Luk 21:12-19',
    bco: 'Dan. 8:1-26',
    color: 'Hijau'
  },
  {
    date: '2026-11-26',
    day: 26,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Why. 18:1-2.21-23; 19:1-3.9a; Mzm. 100:2.3.4.5; Luk. 21:20-28',
    gospelCode: 'Luk 21:20-28',
    bco: 'Dan. 9:1-4.18-27',
    color: 'Hijau'
  },
  {
    date: '2026-11-27',
    day: 27,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Why. 20:1-4.11-21:2; Mzm. 84:3.4.5-6a.8a; Luk. 21:29-33',
    gospelCode: 'Luk 21:29-33',
    bco: 'Dan. 10:1-11:1',
    color: 'Hijau'
  },
  {
    date: '2026-11-28',
    day: 28,
    status: 'Hari Biasa',
    name: 'Hari Biasa',
    readings: 'Why. 22:1-7; Mzm. 95:1-2.3-5.6-7; Luk. 21:34-36',
    gospelCode: 'Luk 21:34-36',
    bco: 'Dan. 12:1-13',
    color: 'Hijau'
  },
  {
    date: '2026-11-29',
    day: 29,
    status: 'HARI MINGGU',
    name: 'ADVEN I',
    readings: 'BcE Yes. 63:16b-17; 64:1,3b-8; Mzm. 80:2ac,3b,15-16,18-19; 1Kor. 1:3-9; Mrk. 13:33-37',
    gospelCode: 'Mrk 13:33-37',
    bco: 'Yes. 6:1-13',
    color: 'Ungu'
  },
  {
    date: '2026-11-30',
    day: 30,
    status: 'Pesta',
    name: 'St. Andreas, Rasul',
    readings: 'Rm. 10:9-18; Mzm. 19:2-3.4-5; Mat. 4:18-22',
    gospelCode: 'Mat 4:18-22',
    bco: '1Kor. 1:17-2:5',
    color: 'Merah'
  }
];

export const LITURGICAL_CALENDAR: LiturgicalDay[] = [
  ...LITURGICAL_CALENDAR_JULY_2026,
  ...LITURGICAL_CALENDAR_AUGUST_2026,
  ...LITURGICAL_CALENDAR_SEPTEMBER_2026,
  ...LITURGICAL_CALENDAR_OCTOBER_2026,
  ...LITURGICAL_CALENDAR_NOVEMBER_2026
];
