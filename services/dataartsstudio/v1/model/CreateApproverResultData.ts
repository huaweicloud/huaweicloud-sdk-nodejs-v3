import { ApproverVO } from './ApproverVO';


export class CreateApproverResultData {
    public value?: ApproverVO;
    public constructor() { 
    }
    public withValue(value: ApproverVO): CreateApproverResultData {
        this['value'] = value;
        return this;
    }
}