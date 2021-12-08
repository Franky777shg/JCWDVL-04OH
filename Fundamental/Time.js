let time = 7320

let hour = 3600
let minute = 60
let second = 1

let jam = Math.floor(time / hour)
let sisaDariJam = time % hour
let menit = Math.floor(sisaDariJam / minute)
let detik = sisaDariJam % minute

console.log(`${time} detik = ${jam} Jam, ${menit} Menit, ${detik} Detik`)