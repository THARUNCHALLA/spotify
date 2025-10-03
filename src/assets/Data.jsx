import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import asvr from "./asvr.jpg"
import asvr1 from "./asvr1.jpg"
import asvr2 from "./asvr2.jpg"
import asvr3 from "./asvr3.jpg"
import asvr4 from "./asvr4.jpg"
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import img7 from './img7.jpg'
import img8 from './img8.jpg'
import img9 from './img9.jpg'
import img10 from './img10.jpg'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import song1 from './song1.mp3'
import song2 from './song2.mp3'
import song3 from './song3.mp3'
import JLV from './JLV.jpg'
import JLV1 from './JLV1.jpg'
import JLV2 from './JLV2.jpg'
import JLV3 from './JLV3.jpg'
import Devara from "./Devara.jpg"
import Devara1 from "./Devara1.jpg"
import Devara2 from "./Devara2.jpg"
import Devara3 from "./Devara3.jpg"
import Devara4 from "./Devara4.jpg"
import AllHailTheTiger from "./AllHailTheTiger.mp3"
import AyudhaPooja from "./AyudhaPooja.mp3"
import Chuttamalle from "./Chuttamalle.mp3"
import Daavudi from "./Daavudi.mp3"
import Dochestha from "./Dochestha.mp3"
import Fear from "./Fear.mp3"
import NeeKallalona from "./NeeKallalona.mp3"
import Raavana from "./Raavana.mp3"
import RedSea from "./RedSea.mp3"
import TringTring from "./TringTring.mp3"
import Peniviti from './Peniviti.mp3'
import Anaganaganaga from "./Anaganaganaga.mp3"
import ReddammaThalli from "./ReddammaThalli.mp3"
import ReddyIkkadaSoodu from "./ReddyIkkadaSoodu.mp3"
import YedaPoyindo from "./YedaPoyindo.mp3"
export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon
}

export const albumsData = [
  {
    id: 0,
    name: "Top 50 Global",
    image: img8,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#2a4365"
  },
  {
    id: 1,
    name: "Top 50 India",
    image: img9,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#22543d"
  },
  {
    id: 2,
    name: "Trending India",
    image: img10,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#742a2a"
  },
  {
    id: 3,
    name: "Trending Global",
    image: img16,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#44337a"
  },
  {
    id: 4,
    name: "Mega Hits,",
    image: img11,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#234e52"
  },
  {
    id: 5,
    name: "Happy Favorites",
    image: img15,
    desc: "Your weekly update of the most played tracks",
    bgColor: "#744210"
  }
]

export const songsData = [
  {
    id: 1,
    name: "Song One",
    image: img1,
    file: song1,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:00",
    toggle: false
  },
  {
    id: 2,
    name: "Song Two",
    image: img2,
    file: song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:20",
    toggle: false
  },
  {
    id: 3,
    name: "Song Three",
    image: img3,
    file: song3,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:32",
    toggle: false
  },
  {
    id: 4,
    name: "Song Four",
    image: img4,
    file: song1,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:50",
    toggle: false
  },
  {
    id:5,
    name: "Song Five",
    image: img5,
    file: song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:10",
    toggle: false
  },
  {
    id:6,
    name: "Song Six",
    image: img14,
    file: song3,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:45",
    toggle: false
  },
  {
    id:7,
    name: "Song Seven",
    image: img7,
    file: song1,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:18",
    toggle: false
  },
  {
    id: 8,
    name: "Song Eight",
    image: img12,
    file: song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:35",
    toggle: false
  }
];

export const ntrAnnaSongs = [
  {
    id: 1,
    name: "All Hail The Tiger",
    image: Devara,
    file: AllHailTheTiger,
    desc: "From 'Devara' — high-energy, powerful anthem",
    duration: "5:09",
    toggle: false
  },
  {
    id: 2,
    name: "Daavudi",
    image: Devara1,
    file: Daavudi,
    desc: "From 'Devara' — intense and action-packed track",
    duration: "5:09",
    toggle: false
  },
  {
    id: 3,
    name: "Fear",
    image: Devara2,
    file: Fear,
    desc: "From 'Devara' — suspenseful and dramatic",
    duration: "5:09",
    toggle: false
  },
  {
    id: 4,
    name: "Chuttamalle",
    image: Devara3,
    file: Chuttamalle,
    desc: "From 'Devara' — soulful and melodious",
    duration: "5:09",
    toggle: false
  },
  {
    id: 5,
    name: "Ayudha Pooja",
    image: Devara4,
    file: AyudhaPooja,
    desc: "From 'Devara' — festive and uplifting",
    duration: "5:09",
    toggle: false
  },
  {
    id: 6,
    name: "Red Sea",
    image: Devara,
    file: RedSea,
    desc: "From 'Devara' — epic and energetic battle theme",
    duration: "5:09",
    toggle: false
  },
  {
    id: 7,
    name: "Dochestha",
    image: JLV,
    file: Dochestha,
    desc: "From 'JLV' — romantic and soothing",
    duration: "5:09",
    toggle: false
  },
  {
    id: 8,
    name: "Tring Tring",
    image: JLV1,
    file: TringTring,
    desc: "From 'JLV' — lively and fun track",
    duration: "5:09",
    toggle: false
  },
  {
    id: 9,
    name: "Nee Kallalona",
    image: JLV2,
    file: NeeKallalona,
    desc: "From 'JLV' — soulful romantic melody",
    duration: "5:09",
    toggle: false
  },
  {
    id: 10,
    name: "Raavana",
    image: JLV3,
    file: Raavana,
    desc: "From 'JLV' — intense and dramatic theme",
    duration: "5:09",
    toggle: false
  },
  {
    id: 11,
    name: "Peniviti",
    image: asvr,
    file: Peniviti,
    desc: "From NTR movie — soulful and heart-touching",
    duration: "5:09",
    toggle: false
  },
  {
    id: 12,
    name: "Reddy Ikkada Soodu",
    image: asvr1,
    file: ReddyIkkadaSoodu,
    desc: "From NTR movie — energetic and fun",
    duration: "5:09",
    toggle: false
  },
  {
    id: 13,
    name: "Anaganaganaga",
    image: asvr2,
    file: Anaganaganaga,
    desc: "From NTR movie — romantic and melodious",
    duration: "5:09",
    toggle: false
  },
  {
    id: 14,
    name: "Yeda Poyindo",
    image: asvr3,
    file: YedaPoyindo,
    desc: "From NTR movie — soulful and emotional",
    duration: "5:09",
    toggle: false
  },
  {
    id: 15,
    name: "Reddamma Thalli",
    image: asvr4,
    file: ReddammaThalli,
    desc: "From NTR movie — lively and energetic",
    duration: "5:09",
    toggle: false
  }
];
