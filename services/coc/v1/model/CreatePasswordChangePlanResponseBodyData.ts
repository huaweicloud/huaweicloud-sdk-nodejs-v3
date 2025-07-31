import { AccountChangePwdPlan } from './AccountChangePwdPlan';


export class CreatePasswordChangePlanResponseBodyData {
    public total?: number;
    public list?: Array<AccountChangePwdPlan>;
    public constructor(total?: number, list?: Array<AccountChangePwdPlan>) { 
        this['total'] = total;
        this['list'] = list;
    }
    public withTotal(total: number): CreatePasswordChangePlanResponseBodyData {
        this['total'] = total;
        return this;
    }
    public withList(list: Array<AccountChangePwdPlan>): CreatePasswordChangePlanResponseBodyData {
        this['list'] = list;
        return this;
    }
}