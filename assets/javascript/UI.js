const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const scoreEl = document.getElementById("scoreElement");
const startBtnEl = document.getElementById("startBtn");
const dialogEL = document.getElementById("dialog");
const bigScoreEL = document.getElementById("bigScore");

const bgVolumeRange = document.getElementById("bgVolumeRange");
const bgVolumeIcon = document.getElementById("bgVolumeIcon");

const shootVolumeRange = document.getElementById("shootVolumeRange");
const shootVolumeIcon = document.getElementById("shootVolumeIcon");

const collisionVolumeRange = document.getElementById("collisionVolumeRange");
const collisionVolumeIcon = document.getElementById("collisionVolumeIcon");
// const backgroundMusic = document.getElementById("backgroundMusic");
// const bgVolumeRange = document.getElementById("bgVolumeRange");
// const bgVolumeIcon = document.getElementById("bgVolumeIcon");
