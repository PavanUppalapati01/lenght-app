const convertBtn = document.getElementById('convertBtn');
const input = document.getElementById('input');
const unit = document.getElementById('unit');
const result = document.getElementById('result');

convertBtn.addEventListener('click', () => {
    const length = parseFloat(input.value);
    const selectedUnit = unit.value;

    if (!isNaN(length)) {
        let convertedLength;
        let unitText;

        switch (selectedUnit) {
            case 'cm':
                convertedLength = length;
                unitText = 'Centimeters';
                break;
            case 'm':
                convertedLength = length * 0.01;
                unitText = 'Meters';
                break;
            case 'in':
                convertedLength = length * 0.3937;
                unitText = 'Inches';
                break;
            case 'ft':
                convertedLength = length * 0.0328;
                unitText = 'Feet';
                break;
            default:
                convertedLength = length;
                unitText = 'Unknown';
        }

        result.textContent = `Converted Length: ${convertedLength} ${unitText}`;
    } else {
        result.textContent = 'Invalid length value!';
    }
});
