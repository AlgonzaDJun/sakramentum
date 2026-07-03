import LiturgicalCalendar from './components/LiturgicalCalendar';

export const metadata = {
  title: 'Sakramentum - Kalender Liturgi Harian',
  description: 'Aplikasi kalender liturgi katolik harian dinamis dengan pembacaan Kitab Suci, Doa Malaikat Tuhan, dan tema warna liturgi interaktif.',
};

export default function Home() {
  return <LiturgicalCalendar />;
}
