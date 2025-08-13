function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculateResult() {
  let result = document.getElementById('display').value;
  try {
    document.getElementById('display').value = eval(result);
  } catch {
    document.getElementById('display').value = 'Error';
  }
}
