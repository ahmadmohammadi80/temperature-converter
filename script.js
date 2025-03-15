function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    const resultElement = document.getElementById('result');
  
    if (isNaN(temperature)) {
      resultElement.innerText = 'لطفاً یک عدد معتبر وارد کنید.';
      return;
    }
  
    let result;
    if (unit === 'celsius') {
      result = (temperature * 9/5) + 32;
      resultElement.innerText = `${temperature}°C = ${result.toFixed(2)}°F`;
    } else {
      result = (temperature - 32) * 5/9;
      resultElement.innerText = `${temperature}°F = ${result.toFixed(2)}°C`;
    }
  }
  