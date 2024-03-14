
//// "ci" = card identity/cedula
//
export default function CiValidation(ci: string){
    if (ci.length !== 10){
    return false;
  }

  const ciNumber = ci.split('').map(Number); 

  let sum =  0;

  for(let i = 0; i < 9; i++) {
    let multiply = (i % 2 === 0)? 2 : 1;
    let res = ciNumber[i] * multiply;
    sum += (res >= 10) ? res - 9:res;
  }

  let calcVerify = (sum % 10 === 0) ? 0 : 10 - (sum % 10);
  let verify = ciNumber[9];
  return verify === calcVerify;
}
