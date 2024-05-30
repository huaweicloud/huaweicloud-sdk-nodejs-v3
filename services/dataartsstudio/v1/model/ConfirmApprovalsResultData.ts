import { BatchOperationVO } from './BatchOperationVO';


export class ConfirmApprovalsResultData {
    public value?: BatchOperationVO;
    public constructor() { 
    }
    public withValue(value: BatchOperationVO): ConfirmApprovalsResultData {
        this['value'] = value;
        return this;
    }
}