module.exports = function toReadable (number) {
  let res = '';
  let res1 = '';
  let res2 = '';
  let res3 = '';
  if (number < 20) {
    number = number.toString();
    switch (number) {
      case '0':
        res = 'zero';
        break;
      case '1':
        res = 'one';
        break;
      case '2':
        res = 'two';
        break;
      case '3':
        res = 'three';
        break;
      case '4':
        res = 'four';
        break;
      case '5':
        res = 'five';
        break;
      case '6':
        res = 'six';
        break;
      case '7':
        res = 'seven';
        break;
      case '8':
        res = 'eight';
        break;
      case '9':
        res = 'nine';
        break;
      case '10':
        res = 'ten';
        break;
      case '11':
        res = 'eleven';
        break;
      case '12':
        res = 'twelve';
        break;
      case '13':
        res = 'thirteen';
        break;
      case '14':
        res = 'fourteen';
        break;
      case '15':
        res = 'fifteen';
        break;
      case '16':
        res = 'sixteen';
        break;
      case '17':
        res = 'seventeen';
        break;
      case '18':
        res = 'eighteen';
        break;
      case '19':
        res = 'nineteen';
        break;
    }   
  } else if (number >= 20 && number < 100) {
    number = number.toString().split('')
    switch (number[0]) {
      case '2':
        res1 = 'twenty';
        break;
      case '3':
        res1 = 'thirty';
        break;
      case '4':
        res1 = 'forty';
        break;
      case '5':
        res1 = 'fifty';
        break;
      case '6':
        res1 = 'sixty';
        break;
      case '7':
        res1 = 'seventy';
        break;
      case '8':
        res1 = 'eighty';
        break;
      case '9':
        res1 = 'ninety';
        break;
    }
    switch (number[1]) {
      case '0':
        res2 = '';
        break;
      case '1':
        res2 = 'one';
        break;
      case '2':
        res2 = 'two';
        break;
      case '3':
        res2 = 'three';
        break;
      case '4':
        res2 = 'four';
        break;
      case '5':
        res2 = 'five';
        break;
      case '6':
        res2 = 'six';
        break;
      case '7':
        res2 = 'seven';
        break;
      case '8':
        res2 = 'eight';
        break;
      case '9':
        res2 = 'nine';
        break;
    }
    if (res2 === '') {
      res = `${res1}`
    } else {
      res = `${res1} ${res2}`
    }
    
  } else if (number > 99 && number < 1000) {
    number = number.toString().split('')
    switch (number[0]) {
      case '0':
        break;
      case '1':
        res1 = 'one hundred';
        break;
      case '2':
        res1 = 'two hundred';
        break;
      case '3':
        res1 = 'three hundred';
        break;
      case '4':
        res1 = 'four hundred';
        break;
      case '5':
        res1 = 'five hundred';
        break;
      case '6':
        res1 = 'six hundred';
        break;
      case '7':
        res1 = 'seven hundred';
        break;
      case '8':
        res1 = 'eight hundred';
        break;
      case '9':
        res1 = 'nine hundred';
        break;
    }
    switch (number[2]) {
      case '0':
        break;
      case '1':
        res3 = 'one';
        break;
      case '2':
        res3 = 'two';
        break;
      case '3':
        res3 = 'three';
        break;
      case '4':
        res3 = 'four';
        break;
      case '5':
        res3 = 'five';
        break;
      case '6':
        res3 = 'six';
        break;
      case '7':
        res3 = 'seven';
        break;
      case '8':
        res3 = 'eight';
        break;
      case '9':
        res3 = 'nine';
        break;
    }
    if (number[1] === '0' && number[2] === '0') {
      res2 = '';
      res3 = '';
    }
    if (number[1] === '0') {
      res2 = '';
    }
    if (number[1] === '1') {
      res3 = '';
      switch (number[2]) {
        case '0':
          res2 = 'ten';
          break;
        case '1':
          res2 = 'eleven';
          break;
        case '2':
          res2 = 'twelve';
          break;
        case '3':
          res2 = 'thirteen';
          break;
        case '4':
          res2 = 'fourteen';
          break;
        case '5':
          res2 = 'fifteen';
          break;
        case '6':
          res2 = 'sixteen';
          break;
        case '7':
          res2 = 'seventeen';
          break;
        case '8':
          res2 = 'eighteen';
          break;
        case '9':
          res2 = 'nineteen';
          break;
      } 
    }
    switch (number[1]) {
      case '0':
        break;
      case '1':
        break;
      case '2':
        res2 = 'twenty';
        break;
      case '3':
        res2 = 'thirty';
        break;
      case '4':
        res2= 'forty';
        break;
      case '5':
        res2 = 'fifty';
        break;
      case '6':
        res2 = 'sixty';
        break;
      case '7':
        res2 = 'seventy';
        break;
      case '8':
        res2 = 'eighty';
        break;
      case '9':
        res2 = 'ninety';
        break;
    } 
    if (number[2] === '0') {
      res3 = '';
    }

  if (res1 !== '' && res2 !== '' && res3 !== '') {
    res = `${res1} ${res2} ${res3}`;
  } else if (res2 === '' && res3 === '') {
    res = `${res1}`;
  } else if (res2 === '') {
    res = `${res1} ${res3}`
  } else if (res3 === '') {
    res = `${res1} ${res2}`
  } 
  
  }
return res

}
