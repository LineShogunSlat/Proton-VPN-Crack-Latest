function generateRandomArray(size, min, max) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}
function calculateMean(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  return sum / arr.length;
}
function calculateMedian(arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
function calculateMode(arr) {
  const frequency = {};
  arr.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
  const maxFreq = Math.max(...Object.values(frequency));
  return Object.keys(frequency).filter(num => frequency[num] === maxFreq);
}
function calculateStatistics(size, min, max) {
  const randomArray = generateRandomArray(size, min, max);
  const mean = calculateMean(randomArray);
  const median = calculateMedian(randomArray);
  const mode = calculateMode(randomArray);
  return { mean, median, mode, randomArray };
}
const stats = calculateStatistics(100, 1, 100);
console.log('Random Array:', stats.randomArray);
console.log('Mean:', stats.mean);
console.log('Median:', stats.median);
console.log('Mode:', stats.mode);
function findMax(arr) {
  return Math.max(...arr);
}
function findMin(arr) {
  return Math.min(...arr);
}
function findRange(arr) {
  return findMax(arr) - findMin(arr);
}
const max = findMax(stats.randomArray);
const min = findMin(stats.randomArray);
const range = findRange(stats.randomArray);
console.log('Max:', max);
console.log('Min:', min);
console.log('Range:', range);
function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}
const sortedArray = sortArray(stats.randomArray);
console.log('Sorted Array:', sortedArray);
