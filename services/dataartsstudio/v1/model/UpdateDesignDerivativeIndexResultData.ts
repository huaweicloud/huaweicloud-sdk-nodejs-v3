import { DerivativeIndexVO } from './DerivativeIndexVO';


export class UpdateDesignDerivativeIndexResultData {
    public value?: DerivativeIndexVO;
    public constructor() { 
    }
    public withValue(value: DerivativeIndexVO): UpdateDesignDerivativeIndexResultData {
        this['value'] = value;
        return this;
    }
}