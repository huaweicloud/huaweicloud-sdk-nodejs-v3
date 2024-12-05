import { BatchOperationVO } from './BatchOperationVO';


export class CreateDesignDerivativeIndexResultData {
    public value?: BatchOperationVO;
    public constructor() { 
    }
    public withValue(value: BatchOperationVO): CreateDesignDerivativeIndexResultData {
        this['value'] = value;
        return this;
    }
}