import { BatchOperationVO } from './BatchOperationVO';


export class BatchOfflineResultData {
    public value?: BatchOperationVO;
    public constructor() { 
    }
    public withValue(value: BatchOperationVO): BatchOfflineResultData {
        this['value'] = value;
        return this;
    }
}