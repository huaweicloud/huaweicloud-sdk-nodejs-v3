import { TestcasePlanVo } from './TestcasePlanVo';


export class ResultValueListTestcasePlanVo {
    public total?: number;
    public value?: Array<TestcasePlanVo>;
    public reason?: string;
    public constructor() { 
    }
    public withTotal(total: number): ResultValueListTestcasePlanVo {
        this['total'] = total;
        return this;
    }
    public withValue(value: Array<TestcasePlanVo>): ResultValueListTestcasePlanVo {
        this['value'] = value;
        return this;
    }
    public withReason(reason: string): ResultValueListTestcasePlanVo {
        this['reason'] = reason;
        return this;
    }
}