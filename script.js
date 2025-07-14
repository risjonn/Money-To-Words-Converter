// Number to words conversion functions
const englishNumbers = {
    0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
    6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
    11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
    16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty',
    30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy',
    80: 'eighty', 90: 'ninety'
};

const malayNumbers = {
    0: 'kosong', 1: 'satu', 2: 'dua', 3: 'tiga', 4: 'empat', 5: 'lima',
    6: 'enam', 7: 'tujuh', 8: 'lapan', 9: 'sembilan', 10: 'sepuluh',
    11: 'sebelas', 12: 'dua belas', 13: 'tiga belas', 14: 'empat belas', 15: 'lima belas',
    16: 'enam belas', 17: 'tujuh belas', 18: 'lapan belas', 19: 'sembilan belas', 20: 'dua puluh',
    30: 'tiga puluh', 40: 'empat puluh', 50: 'lima puluh', 60: 'enam puluh', 70: 'tujuh puluh',
    80: 'lapan puluh', 90: 'sembilan puluh'
};

function convertToEnglish(num) {
    if (num === 0) return 'zero ringgit';
    
    let result = '';
    
    // Handle millions
    if (num >= 1000000) {
        result += englishNumbers[Math.floor(num / 1000000)] + ' million ';
        num %= 1000000;
    }
    
    // Handle thousands
    if (num >= 1000) {
        const thousands = Math.floor(num / 1000);
        result += convertHundreds(thousands) + ' thousand ';
        num %= 1000;
    }
    
    // Handle hundreds
    if (num >= 100) {
        result += englishNumbers[Math.floor(num / 100)] + ' hundred ';
        num %= 100;
    }
    
    // Handle remaining numbers
    if (num > 0) {
        result += convertTens(num);
    }
    
    return result.trim() + ' ringgit';
}

function convertToMalay(num) {
    if (num === 0) return 'kosong ringgit';
    
    let result = '';
    
    // Handle millions
    if (num >= 1000000) {
        result += malayNumbers[Math.floor(num / 1000000)] + ' juta ';
        num %= 1000000;
    }
    
    // Handle thousands
    if (num >= 1000) {
        const thousands = Math.floor(num / 1000);
        if (thousands === 1) {
            result += 'satu ribu ';
        } else {
            result += convertMalayHundreds(thousands) + ' ribu ';
        }
        num %= 1000;
    }
    
    // Handle hundreds
    if (num >= 100) {
        const hundreds = Math.floor(num / 100);
        if (hundreds === 1) {
            result += 'satu ratus ';
        } else {
            result += malayNumbers[hundreds] + ' ratus ';
        }
        num %= 100;
    }
    
    // Handle remaining numbers
    if (num > 0) {
        result += convertMalayTens(num);
    }
    
    return result.trim() + ' ringgit';
}

function convertHundreds(num) {
    let result = '';
    
    if (num >= 100) {
        result += englishNumbers[Math.floor(num / 100)] + ' hundred ';
        num %= 100;
    }
    
    if (num > 0) {
        result += convertTens(num);
    }
    
    return result.trim();
}

function convertMalayHundreds(num) {
    let result = '';
    
    if (num >= 100) {
        const hundreds = Math.floor(num / 100);
        if (hundreds === 1) {
            result += 'satu ratus ';
        } else {
            result += malayNumbers[hundreds] + ' ratus ';
        }
        num %= 100;
    }
    
    if (num > 0) {
        result += convertMalayTens(num);
    }
    
    return result.trim();
}

function convertTens(num) {
    if (num < 20) {
        return englishNumbers[num];
    }
    
    const tens = Math.floor(num / 10) * 10;
    const ones = num % 10;
    
    if (ones === 0) {
        return englishNumbers[tens];
    }
    
    return englishNumbers[tens] + '-' + englishNumbers[ones];
}

function convertMalayTens(num) {
    if (num < 20) {
        return malayNumbers[num];
    }
    
    const tens = Math.floor(num / 10) * 10;
    const ones = num % 10;
    
    if (ones === 0) {
        return malayNumbers[tens];
    }
    
    return malayNumbers[tens] + ' ' + malayNumbers[ones];
}

// Language translations
const translations = {
    english: {
        title: 'Money to Words Converter',
        subtitle: 'Convert numbers to words in English or Bahasa Melayu',
        languageLabel: 'Select Language:',
        amountLabel: 'Enter Amount (0 - 1,000,000):',
        placeholder: 'Enter a number...',
        convertBtn: 'Convert to Words',
        resultLabel: 'Result:',
        initialResult: 'Enter a number and click convert',
        examplesTitle: 'Examples:',
        example1: 'twelve ringgit',
        example2: 'one hundred ringgit',
        example3: 'one thousand five hundred ringgit',
        errors: {
            empty: 'Please enter a number',
            invalid: 'Please enter a valid number',
            negative: 'Number cannot be negative',
            tooLarge: 'Number cannot exceed 1,000,000',
            decimal: 'Please enter a whole number',
            conversion: 'An error occurred during conversion'
        }
    },
    malay: {
        title: 'Penukar Wang ke Perkataan',
        subtitle: 'Tukar nombor kepada perkataan dalam Bahasa Inggeris atau Bahasa Melayu',
        languageLabel: 'Pilih Bahasa:',
        amountLabel: 'Masukkan Jumlah (0 - 1,000,000):',
        placeholder: 'Masukkan nombor...',
        convertBtn: 'Tukar ke Perkataan',
        resultLabel: 'Hasil:',
        initialResult: 'Masukkan nombor dan klik tukar',
        examplesTitle: 'Contoh:',
        example1: 'dua belas ringgit',
        example2: 'satu ratus ringgit',
        example3: 'satu ribu lima ratus ringgit',
        errors: {
            empty: 'Sila masukkan nombor',
            invalid: 'Sila masukkan nombor yang sah',
            negative: 'Nombor tidak boleh negatif',
            tooLarge: 'Nombor tidak boleh melebihi 1,000,000',
            decimal: 'Sila masukkan nombor bulat',
            conversion: 'Ralat berlaku semasa penukaran'
        }
    }
};

// DOM elements
const languageSelect = document.getElementById('language');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convert-btn');
const resultText = document.getElementById('result-text');
const errorMessage = document.getElementById('error-message');

// UI elements for translation
const mainTitle = document.getElementById('main-title');
const subtitle = document.getElementById('subtitle');
const languageLabel = document.getElementById('language-label');
const amountLabel = document.getElementById('amount-label');
const resultLabel = document.getElementById('result-label');
const examplesTitle = document.getElementById('examples-title');
const example1 = document.getElementById('example-1');
const example2 = document.getElementById('example-2');
const example3 = document.getElementById('example-3');

// Update UI language
function updateLanguage(language) {
    const t = translations[language];
    
    mainTitle.textContent = t.title;
    subtitle.textContent = t.subtitle;
    languageLabel.textContent = t.languageLabel;
    amountLabel.textContent = t.amountLabel;
    amountInput.placeholder = t.placeholder;
    convertBtn.textContent = t.convertBtn;
    resultLabel.textContent = t.resultLabel;
    examplesTitle.textContent = t.examplesTitle;
    example1.textContent = t.example1;
    example2.textContent = t.example2;
    example3.textContent = t.example3;
    
    // Update result text if it's still showing the initial message
    if (resultText.textContent === translations.english.initialResult || 
        resultText.textContent === translations.malay.initialResult) {
        resultText.textContent = t.initialResult;
    }
}

// Validation function
function validateInput(value) {
    const num = parseFloat(value);
    const language = languageSelect.value;
    const t = translations[language];
    
    if (value === '' || value === null || value === undefined) {
        return { isValid: false, message: t.errors.empty };
    }
    
    if (isNaN(num)) {
        return { isValid: false, message: t.errors.invalid };
    }
    
    if (num < 0) {
        return { isValid: false, message: t.errors.negative };
    }
    
    if (num > 1000000) {
        return { isValid: false, message: t.errors.tooLarge };
    }
    
    if (num % 1 !== 0) {
        return { isValid: false, message: t.errors.decimal };
    }
    
    return { isValid: true, message: '' };
}

// Convert function
function convertNumber() {
    const value = amountInput.value;
    const language = languageSelect.value;
    
    // Clear previous errors
    errorMessage.textContent = '';
    amountInput.classList.remove('error');
    
    // Validate input
    const validation = validateInput(value);
    
    if (!validation.isValid) {
        errorMessage.textContent = validation.message;
        amountInput.classList.add('error');
        resultText.textContent = 'Please fix the error above';
        return;
    }
    
    const num = parseInt(value);
    
    try {
        let result;
        if (language === 'english') {
            result = convertToEnglish(num);
        } else {
            result = convertToMalay(num);
        }
        
        resultText.textContent = result;
    } catch (error) {
        const t = translations[language];
        errorMessage.textContent = t.errors.conversion;
        amountInput.classList.add('error');
        resultText.textContent = 'Conversion failed';
    }
}

// Event listeners
convertBtn.addEventListener('click', convertNumber);

languageSelect.addEventListener('change', function() {
    updateLanguage(this.value);
});

amountInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        convertNumber();
    }
});

amountInput.addEventListener('input', function() {
    // Clear error state when user starts typing
    if (errorMessage.textContent !== '') {
        errorMessage.textContent = '';
        amountInput.classList.remove('error');
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage('english'); // Set default language
    amountInput.focus();
});