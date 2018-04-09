import { FormControl, AbstractControl} from '@angular/forms';

// 手机正则
const TEL_REGEXP = new RegExp("1[0-9]{10}");
const LING_REGEXP = new RegExp("\s+");


export function validateUserTelephone(c : FormControl):any {
     return (TEL_REGEXP.test(c.value)) ? null : { valid : false, msg : '非法手机号' }
}


export function validateUserPw(c : FormControl):any{
      return (LING_REGEXP.test(c.value)) ? null : { userPassword : { valid : false , errorMsg : '含有空格' } };
}


export function ageValidator(c:AbstractControl):{[key : string]:any} | null{
      let age = c.value;
      if(age && (isNaN(age) || age < 20 || age > 120 )){
            return { 'range' :true, min : 20, max : 120, msg : '错误'}
      }
      return null;
}


