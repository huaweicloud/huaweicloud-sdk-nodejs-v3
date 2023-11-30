import { DerivativeIndexVO } from './DerivativeIndexVO';


export class DerivativeIndexVODetailData {
    public value?: DerivativeIndexVO;
    public constructor() { 
    }
    public withValue(value: DerivativeIndexVO): DerivativeIndexVODetailData {
        this['value'] = value;
        return this;
    }
}