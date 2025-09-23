import type { Song } from '@/types/model/Song';
import type { Artist } from '@/types/model/Artist';
import type { Genre } from '@/types/model/Genre';

const ARTISTS: Artist[] = [
	{ id: '1', fullName: 'Hòa Minzy', followers: 1000 },
	{ id: '2', fullName: 'Nguyễn Văn Chung', followers: 1000 },
	{ id: '3', fullName: 'Sơn Tùng M-TP', followers: 5000 },
	{ id: '4', fullName: 'Đen Vâu', followers: 3000 },
	{ id: '5', fullName: 'Bích Phương', followers: 2500 },
	{ id: '6', fullName: 'Vũ', followers: 2000 },
	{ id: '7', fullName: 'Mỹ Tâm', followers: 4000 },
	{ id: '8', fullName: 'Đức Phúc', followers: 1800 },
];

const GENRES: Genre[] = [
	{ id: '1', title: 'Pop', description: 'Nhạc Pop Việt Nam' },
	{ id: '2', title: 'Rap', description: 'Nhạc Rap Việt Nam' },
	{ id: '3', title: 'Ballad', description: 'Nhạc Ballad' },
	{ id: '4', title: 'EDM', description: 'Electronic Dance Music' },
	{ id: '5', title: 'R&B', description: 'Rhythm and Blues' },
];

export const MOCK_SONGS: Song[] = [
	{
		id: '1',
		src: '/audio/song1.mp3',
		title: 'Chúng Ta Của Hiện Tại',
		thumbnail: '/assets/images/auth-bg.jpg',
		artists: [ARTISTS[0], ARTISTS[1], ARTISTS[2]],
		duration: 240, // 4 minutes
		genre: GENRES[0],
		playCount: '2.5M',
		like: 125000,
		lyrics: [
			{ id: '1', startTime: 0, endTime: 5, text: 'Chúng ta của hiện tại' },
			{ id: '2', startTime: 5, endTime: 10, text: 'Không còn như ngày xưa' },
			{ id: '3', startTime: 10, endTime: 15, text: 'Thời gian đã thay đổi' },
		],
	},
	{
		id: '2',
		src: '/audio/song2.mp3',
		title: 'Muộn Rồi Mà Sao Còn',
		thumbnail: '/assets/images/auth-bg.jpg',
		artists: [ARTISTS[1]],
		duration: 195, // 3:15
		genre: GENRES[2],
		playCount: '1.8M',
		like: 95000,
		lyrics: [
			{ id: '1', startTime: 0, endTime: 4, text: 'Muộn rồi mà sao còn' },
			{ id: '2', startTime: 4, endTime: 8, text: 'Đợi chờ ai đó về' },
			{ id: '3', startTime: 8, endTime: 12, text: 'Trái tim vẫn đang đau' },
		],
	},
	{
		id: '3',
		src: '/audio/song3.mp3',
		title: 'Hãy Trao Cho Anh',
		thumbnail: '/assets/images/auth-bg.jpg',
		artists: [ARTISTS[2]],
		duration: 210, // 3:30
		genre: GENRES[0],
		playCount: '5.2M',
		like: 320000,
		lyrics: [
			{ id: '1', startTime: 0, endTime: 6, text: 'Hãy trao cho anh' },
			{ id: '2', startTime: 6, endTime: 12, text: 'Tình yêu của em' },
			{ id: '3', startTime: 12, endTime: 18, text: 'Để anh được yêu thương' },
		],
	},
	{
		id: '4',
		src: '/audio/song4.mp3',
		title: 'Lạc Trôi',
		thumbnail: '/assets/images/auth-bg.jpg',
		artists: [ARTISTS[3]],
		duration: 225, // 3:45
		genre: GENRES[1],
		playCount: '3.7M',
		like: 280000,
		lyrics: [
			{ id: '1', startTime: 0, endTime: 5, text: 'Lạc trôi giữa dòng đời' },
			{ id: '2', startTime: 5, endTime: 10, text: 'Không biết đi về đâu' },
			{ id: '3', startTime: 10, endTime: 15, text: 'Chỉ biết rằng em yêu anh' },
		],
	},
	{
		id: '5',
		src: '/audio/song5.mp3',
		title: 'Bước Qua Mùa Cô Đơn',
		thumbnail: '/assets/images/auth-bg.jpg',
		artists: [ARTISTS[4]],
		duration: 200, // 3:20
		genre: GENRES[2],
		playCount: '2.1M',
		like: 150000,
		lyrics: [
			{ id: '1', startTime: 0, endTime: 4, text: 'Bước qua mùa cô đơn' },
			{ id: '2', startTime: 4, endTime: 8, text: 'Tìm lại chính mình' },
			{ id: '3', startTime: 8, endTime: 12, text: 'Trong những ngày tháng qua' },
		],
	},
	{
		id: '6',
		src: '/audio/song6.mp3',
		title: 'Yêu Đương Khó Quá',
		thumbnail: '/assets/images/auth-bg.jpg',
		artists: [ARTISTS[5]],
		duration: 180, // 3:00
		genre: GENRES[0],
		playCount: '1.5M',
		like: 120000,
		lyrics: [
			{ id: '1', startTime: 0, endTime: 5, text: 'Yêu đương khó quá' },
			{ id: '2', startTime: 5, endTime: 10, text: 'Sao em không hiểu' },
			{ id: '3', startTime: 10, endTime: 15, text: 'Tình yêu là gì' },
		],
	},
	{
		id: '7',
		src: '/audio/song7.mp3',
		title: 'Đừng Như Thói Quen',
		thumbnail: '/assets/images/auth-bg.jpg',
		artists: [ARTISTS[6]],
		duration: 255, // 4:15
		genre: GENRES[2],
		playCount: '4.3M',
		like: 290000,
		lyrics: [
			{ id: '1', startTime: 0, endTime: 6, text: 'Đừng như thói quen' },
			{ id: '2', startTime: 6, endTime: 12, text: 'Yêu rồi lại quên' },
			{ id: '3', startTime: 12, endTime: 18, text: 'Trái tim em đã mệt' },
		],
	},
	{
		id: '8',
		src: '/audio/song8.mp3',
		title: 'Có Chắc Yêu Là Đây',
		thumbnail: '/assets/images/auth-bg.jpg',
		artists: [ARTISTS[7]],
		duration: 195, // 3:15
		genre: GENRES[0],
		playCount: '2.8M',
		like: 180000,
		lyrics: [
			{ id: '1', startTime: 0, endTime: 4, text: 'Có chắc yêu là đây' },
			{ id: '2', startTime: 4, endTime: 8, text: 'Hay chỉ là ảo tưởng' },
			{ id: '3', startTime: 8, endTime: 12, text: 'Trái tim em đang đau' },
		],
	},
	{
		id: '9',
		src: '/audio/song9.mp3',
		title: 'Đi Về Nhà',
		thumbnail: '/assets/images/auth-bg.jpg',
		artists: [ARTISTS[3]],
		duration: 210, // 3:30
		genre: GENRES[1],
		playCount: '3.2M',
		like: 220000,
		lyrics: [
			{ id: '1', startTime: 0, endTime: 5, text: 'Đi về nhà cùng anh' },
			{ id: '2', startTime: 5, endTime: 10, text: 'Nơi có tình yêu' },
			{ id: '3', startTime: 10, endTime: 15, text: 'Và những kỷ niệm' },
		],
	},
	{
		id: '10',
		src: '/audio/song10.mp3',
		title: 'Nơi Này Có Anh',
		thumbnail: '/assets/images/auth-bg.jpg',
		artists: [ARTISTS[2]],
		duration: 240, // 4:00
		genre: GENRES[4],
		playCount: '6.1M',
		like: 450000,
		lyrics: [
			{ id: '1', startTime: 0, endTime: 6, text: 'Nơi này có anh' },
			{ id: '2', startTime: 6, endTime: 12, text: 'Có tình yêu của chúng ta' },
			{ id: '3', startTime: 12, endTime: 18, text: 'Và những ước mơ' },
		],
	},
];
