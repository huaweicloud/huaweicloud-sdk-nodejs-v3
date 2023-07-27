import { SignApiBindingInfo } from './SignApiBindingInfo';


export class SignApiBindingResult {
    public bindings?: Array<SignApiBindingInfo>;
    public constructor() { 
    }
    public withBindings(bindings: Array<SignApiBindingInfo>): SignApiBindingResult {
        this['bindings'] = bindings;
        return this;
    }
}