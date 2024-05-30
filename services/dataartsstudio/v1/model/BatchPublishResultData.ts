import { BatchOperationVO } from './BatchOperationVO';


export class BatchPublishResultData {
    public value?: BatchOperationVO;
    public constructor() { 
    }
    public withValue(value: BatchOperationVO): BatchPublishResultData {
        this['value'] = value;
        return this;
    }
}