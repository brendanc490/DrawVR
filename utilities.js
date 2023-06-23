var env = scene.querySelector("#env");
var preset = document.getElementById("backdrop");
preset.value = "starry";
var ground = document.getElementById("ground");
var groundtexture = document.getElementById("groundtexture");
var feature = document.getElementById("feature");
var featureSize = document.getElementById("featureSize");
var block = false;
var sens = 1;


const presets =  {
    'none' : {preset: 'none', groundType:"none",skyType: "none",dressing:"none"},
    'default' : {preset: 'default', active: true, seed: 1, skyType: 'atmosphere', skyColor: '#88c', horizonColor: '#ddd', lighting: 'distant', lightPosition: { x: -0.11, y: 1, z: 0.33}, fog: 0.78, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 3, groundTexture: 'checkerboard', groundColor: '#454545', groundColor2: '#5d5d5d', dressing: 'none', dressingAmount: 10, dressingColor: '#795449', dressingScale: 1, dressingVariance: { x: 0, y: 0, z: 0}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'none', gridColor: '#ccc', shadow: false},
    'contact': {preset: 'contact', active: true, seed: 14, skyType: 'gradient', skyColor: '#478d54', horizonColor: '#b696cb', lighting: 'distant', lightPosition: { x: 0, y: 2.01, z: -1}, fog: 0.8, flatShading: false, playArea: 1, ground: 'spikes', groundYScale: 4.91, groundTexture: 'none', groundColor: '#2e455f', groundColor2: '#694439', dressing: 'apparatus', dressingAmount: 7, dressingColor: '#657067', dressingScale: 20, dressingVariance: { x: 20, y: 20, z: 20}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: '1x1', gridColor: '#478d54', shadow: false},
    'egypt': {preset: 'egypt', active: true, seed: 26, skyType: 'gradient', skyColor: '#1b7660', horizonColor: '#e4b676', lighting: 'distant', lightPosition: { x: 0, y: 1.65, z: -1}, fog: 0.75, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 5, groundTexture: 'walkernoise', groundColor: '#664735', groundColor2: '#6c4b39', dressing: 'pyramids', dressingAmount: 10, dressingColor: '#7c5c45', dressingScale: 5, dressingVariance: { x: 20, y: 20, z: 20}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'spots', gridColor: '#e4b676', shadow: false},
    'checkerboard': {preset: 'checkerboard', active: true, seed: 1, skyType: 'gradient', skyColor: '#0d0d0d', horizonColor: '#404040', lighting: 'distant', lightPosition: { x: 0, y: 1, z: -0.2}, fog: 0.81, flatShading: true, playArea: 1, ground: 'hills', groundYScale: 4.81, groundTexture: 'checkerboard', groundColor: '#252525', groundColor2: '#111111', dressing: 'cubes', dressingAmount: 10, dressingColor: '#9f9f9f', dressingScale: 1.51, dressingVariance: { x: 5, y: 20, z: 5}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'dots', gridColor: '#ccc', shadow: false},
    'forest': {preset: 'forest', active: true, seed: 8, skyType: 'gradient', skyColor: '#24b59f', horizonColor: '#eff9b7', lighting: 'distant', lightPosition: { x: -1.2, y: 0.88, z: -0.55}, fog: 0.8, flatShading: false, playArea: 1, ground: 'noise', groundYScale: 4.18, groundTexture: 'squares', groundColor: '#937a24', groundColor2: '#987d2e', dressing: 'trees', dressingAmount: 500, dressingColor: '#888b1d', dressingScale: 1, dressingVariance: { x: 10, y: 10, z: 10}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'none', gridColor: '#c5a543', shadow: false},
    'goaland': {preset: 'goaland', active: true, seed: 17, skyType: 'gradient', skyColor: '#14645f', horizonColor: '#a3dab8', lighting: 'point', lightPosition: { x: 0.1, y: 4, z: 0.56}, fog: 0.73, flatShading: false, playArea: 1, ground: 'noise', groundYScale: 0.81, groundTexture: 'none', groundColor: '#ae3241', groundColor2: '#db4453', dressing: 'mushrooms', dressingAmount: 150, dressingColor: '#a9313d', dressingScale: 5, dressingVariance: { x: 5, y: 10, z: 5}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'dots', gridColor: '#239893', shadow: false},
    'yavapai': {preset: 'yavapai', active: true, seed: 11, skyType: 'gradient', skyColor: '#239849', horizonColor: '#cfe0af', lighting: 'distant', lightPosition: { x: 0.5, y: 1, z: 0}, fog: 0.8, flatShading: true, playArea: 1, ground: 'canyon', groundYScale: 9.76, groundTexture: 'walkernoise', groundColor: '#C66344', groundColor2: '#c96b4b', dressing: 'stones', dressingAmount: 500, dressingColor: '#C66344', dressingScale: 0.06, dressingVariance: { x: 0.2, y: 0.1, z: 0.2}, dressingUniformScale: true, dressingOnPlayArea: 1, grid: 'none', gridColor: '#239893', shadow: false},
    'goldmine': {preset: 'goldmine', active: true, seed: 53, skyType: 'gradient', skyColor: '#1e1c1a', horizonColor: '#8c7964', lighting: 'point', lightPosition: { x: -0.09, y: 3, z: 0.33}, fog: 0.43, flatShading: true, playArea: 1.08, ground: 'canyon', groundYScale: 50, groundTexture: 'none', groundColor: '#353535', groundColor2: '#454545', dressing: 'hexagons', dressingAmount: 300, dressingColor: '#fe921b', dressingScale: 0.5, dressingVariance: { x: 2, y: 8, z: 2}, dressingUniformScale: true, dressingOnPlayArea: 0.03, grid: 'none', gridColor: '#ccc', shadow: false},
    'threetowers': {preset: 'threetowers', active: true, seed: 5, skyType: 'gradient', skyColor: '#23a06b', horizonColor: '#f5e170', lighting: 'distant', lightPosition: { x: 0.5, y: 1, z: 0}, fog: 0.8, flatShading: false, playArea: 1, ground: 'spikes', groundYScale: 4.26, groundTexture: 'walkernoise', groundColor: '#273a49', groundColor2: '#2b464f', dressing: 'towers', dressingAmount: 3, dressingColor: '#5f6d94', dressingScale: 50, dressingVariance: { x: 10, y: 100, z: 10}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'none', gridColor: '#239893', shadow: false},
    'poison': {preset: 'poison', active: true, seed: 92, skyType: 'gradient', skyColor: '#1ea84a', horizonColor: '#177132', lighting: 'distant', lightPosition: { x: 0.5, y: 1, z: 0}, fog: 0.8, flatShading: false, playArea: 1, ground: 'canyon', groundYScale: 9.76, groundTexture: 'none', groundColor: '#851f31', groundColor2: '#912235', dressing: 'hexagons', dressingAmount: 20, dressingColor: '#c7415b', dressingScale: 20, dressingVariance: { x: 20, y: 200, z: 20}, dressingUniformScale: false, dressingOnPlayArea: 0, grid: 'none', gridColor: '#1ea84a', shadow: false},
    'arches': {preset: 'arches', active: true, seed: 19, skyType: 'atmosphere', skyColor: '#8cbdc8', horizonColor: '#ddd', lighting: 'distant', lightPosition: { x: -0.11, y: 0.16, z: 0.33}, fog: 0.67, flatShading: true, playArea: 1, ground: 'canyon', groundYScale: 10, groundTexture: 'walkernoise', groundColor: '#a87d6f', groundColor2: '#795449', dressing: 'arches', dressingAmount: 6, dressingColor: '#795449', dressingScale: 26, dressingVariance: { x: 20, y: 40, z: 20}, dressingUniformScale: true, dressingOnPlayArea: 0.04, grid: 'none', gridColor: '#ccc', shadow: false},
    'tron': {preset: 'tron', active: true, seed: 14, skyType: 'gradient', skyColor: '#091b39', horizonColor: '#284a9e', lighting: 'distant', lightPosition: { x: -0.72, y: 0.62, z: 0.4}, fog: 0.8, flatShading: false, playArea: 1, ground: 'spikes', groundYScale: 4.91, groundTexture: 'none', groundColor: '#061123', groundColor2: '#694439', dressing: 'towers', dressingAmount: 5, dressingColor: '#fb000e', dressingScale: 15, dressingVariance: { x: 20, y: 20, z: 20}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: '1x1', gridColor: '#fb000e', shadow: false},
    'japan': {preset: 'japan', active: true, seed: 14, skyType: 'gradient', skyColor: '#7e5db5', horizonColor: '#b4adda', lighting: 'distant', lightPosition: { x: 1.33, y: 1, z: 0.24}, fog: 0.9, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 25, groundTexture: 'walkernoise', groundColor: '#7e5db5', groundColor2: '#cabdf5', dressing: 'torii', dressingAmount: 4, dressingColor: '#bc5e7c', dressingScale: 15, dressingVariance: { x: 0, y: 0, z: 0}, dressingUniformScale: true, dressingOnPlayArea: 0, grid: 'spots', gridColor: '#e4b676', shadow: false},
    'dream': {preset: 'dream', active: true, seed: 17, skyType: 'gradient', skyColor: '#87faf4', horizonColor: '#b34093', lighting: 'distant', lightPosition: { x: -0.72, y: 0.53, z: 0.97}, fog: 0.8, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 20, groundTexture: 'checkerboard', groundColor: '#b34093', groundColor2: '#c050a2', dressing: 'mushrooms', dressingAmount: 300, dressingColor: '#3cf7ed', dressingScale: 0.2, dressingVariance: { x: 0.2, y: 0.2, z: 0.2}, dressingUniformScale: true, dressingOnPlayArea: 1, grid: 'none', gridColor: '#239893', shadow: false},
    'volcano': {preset: 'volcano', active: true, seed: 92, skyType: 'gradient', skyColor: '#4a070f', horizonColor: '#f62300', lighting: 'point', lightPosition: { x: 0.5, y: 2.25, z: 0}, fog: 0.87, flatShading: false, playArea: 1, ground: 'canyon', groundYScale: 9.76, groundTexture: 'walkernoise', groundColor: '#fb0803', groundColor2: '#510000', dressing: 'arches', dressingAmount: 15, dressingColor: '#fb0803', dressingScale: 3, dressingVariance: { x: 10, y: 100, z: 10}, dressingUniformScale: false, dressingOnPlayArea: 0.2, grid: 'none', gridColor: '#fa0e00', shadow: false},
    'starry': {preset: 'starry', active: true, seed: 1, skyType: 'atmosphere', skyColor: '#88c', horizonColor: '#ddd', lighting: 'distant', lightPosition: { x: 0, y: -0.01, z: -0.46}, fog: 0.7, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 3, groundTexture: 'none', groundColor: '#553e35', groundColor2: '#694439', dressing: 'none', dressingAmount: 100, dressingColor: '#795449', dressingScale: 5, dressingVariance: { x: 1, y: 1, z: 1}, dressingUniformScale: true, grid: '1x1', dressingOnPlayArea: 0, gridColor: '#39d2f2', shadow: false},
    'osiris': {preset: 'osiris', active: true, seed: 46, skyType: 'atmosphere', skyColor: '#88c', horizonColor: '#ddd', lighting: 'distant', lightPosition: { x: 0, y: 0.02, z: -0.46}, fog: 0, flatShading: false, playArea: 1, ground: 'hills', groundYScale: 3, groundTexture: 'none', groundColor: '#9e7b47', groundColor2: '#9e7b47', dressing: 'pyramids', dressingAmount: 7, dressingColor: '#9e7b47', dressingScale: 5, dressingVariance: { x: 30, y: 30, z: 30}, dressingUniformScale: true, grid: 'dots', dressingOnPlayArea: 0, gridColor: '#daa452', shadow: false},
    'moon': {preset: 'moon', active: true, seed: 11, skyType: 'gradient', skyColor: '#000000', horizonColor: '#000000', lighting: 'distant', lightPosition: { x: 0.5, y: 1, z: 0}, fog: 0.8, flatShading: true, playArea: 1, ground: 'canyon', groundYScale: 9.76, groundTexture: 'walkernoise', groundColor: '#D1D1D1', groundColor2: '#494949', dressing: 'stones', dressingAmount: 500, dressingColor: '#494949', dressingScale: 0.06, dressingVariance: { x: 0.2, y: 0.1, z: 0.2}, dressingUniformScale: true, dressingOnPlayArea: 1, grid: 'none', gridColor: '#239893', shadow: false}
  }

  $('.skyCol').minicolors({control: 'hue',
position:'top',
change: function () {
    updateBackground();
},
});
$('.featureCol').minicolors({control: 'hue',
position:'top',
change: function () {
    updateBackground();
},});

$('.groundCol').minicolors({control: 'hue',
position:'top',
change: function () {
    updateBackground();
},});

    env.setAttribute("environment",presets['starry']);

    ground.value = presets['starry'].ground;
    groundtexture.value = presets['starry'].groundTexture;
    feature.value = presets['starry'].dressing;
    


function updateBackground(){
    if(block){
        return;
    }
    let currSeed = env.getAttribute("environment");
    currSeed.preset = preset.value;
    currSeed.ground = ground.value;
    currSeed.groundTexture = groundtexture.value;
    currSeed.dressing = feature.value;
    currSeed.skyColor = $('.skyCol').val();
    currSeed.groundColor = $('.groundCol').val();
    currSeed.dressingColor = $('.featureCol').val();
    currSeed.dressingScale = parseFloat(featureSize.value);

    env.setAttribute("environment",currSeed);
}

function changePreset(){
    env.setAttribute("environment",presets[preset.value]);
    if(preset.value == "none"){
        block = true;
        ground.value = "none";
        groundtexture.value = "none";
        feature.value = "none";
        featureSize.value = "none";
        $('.skyCol').minicolors("value","#000000");
        $('.groundCol').minicolors("value","#000000");
        $('.featureCol').minicolors("value","#000000");
        block = false;
        return;
    }
    ground.value = presets[preset.value].ground;
    groundtexture.value = presets[preset.value].groundTexture;
    feature.value = presets[preset.value].dressing;
    updateSkyCol(presets[preset.value].skyColor);
    updateGroundCol(presets[preset.value].groundColor);
    updateFeatureCol(presets[preset.value].dressingColor);
    featureSize.value = presets[preset.value].dressingScale;
    block=false;
   
}
function updateSkyCol(colIn){
    block = true;
    $('.skyCol').minicolors("value",colIn);
}
function updateGroundCol(colIn){
    block = true;
    $('.groundCol').minicolors("value",colIn);
}
function updateFeatureCol(colIn){
    block = true;
    $('.featureCol').minicolors("value",colIn);
}

function randomizeLayout(){
    let currSeed = env.getAttribute("environment");
    console.log(currSeed);
    currSeed.seed = Math.random()*10000000;

    env.setAttribute("environment",currSeed);
}

function updateSens(){
    sens = document.getElementById("sensitivity").value;
}