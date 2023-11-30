import { DerivativeIndexVOSearchResultDataValue } from './DerivativeIndexVOSearchResultDataValue';


export class DerivativeIndexVOSearchResultData {
    public value?: DerivativeIndexVOSearchResultDataValue;
    public constructor() { 
    }
    public withValue(value: DerivativeIndexVOSearchResultDataValue): DerivativeIndexVOSearchResultData {
        this['value'] = value;
        return this;
    }
}