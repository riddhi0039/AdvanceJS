function calculate_area(radius) {
    return Math.PI * radius * radius;
} 
function calculate_perimeter(radius) {
    return 2 * Math.PI * radius;
}

module.exports = {
    calculate_area,
    calculate_perimeter
};