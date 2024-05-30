import { BatchOperationVO } from './BatchOperationVO';


export class CheckDimensionStatusResultData {
    public value?: BatchOperationVO;
    public constructor() { 
    }
    public withValue(value: BatchOperationVO): CheckDimensionStatusResultData {
        this['value'] = value;
        return this;
    }
}