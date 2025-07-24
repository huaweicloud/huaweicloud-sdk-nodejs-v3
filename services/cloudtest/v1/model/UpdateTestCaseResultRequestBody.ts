import { UpdateTestCaseResultBean } from './UpdateTestCaseResultBean';


export class UpdateTestCaseResultRequestBody {
    private 'service_id'?: number;
    private 'plan_id'?: string;
    private 'execute_list'?: Array<UpdateTestCaseResultBean>;
    public constructor(serviceId?: number, executeList?: Array<UpdateTestCaseResultBean>) { 
        this['service_id'] = serviceId;
        this['execute_list'] = executeList;
    }
    public withServiceId(serviceId: number): UpdateTestCaseResultRequestBody {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: number  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): number | undefined {
        return this['service_id'];
    }
    public withPlanId(planId: string): UpdateTestCaseResultRequestBody {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withExecuteList(executeList: Array<UpdateTestCaseResultBean>): UpdateTestCaseResultRequestBody {
        this['execute_list'] = executeList;
        return this;
    }
    public set executeList(executeList: Array<UpdateTestCaseResultBean>  | undefined) {
        this['execute_list'] = executeList;
    }
    public get executeList(): Array<UpdateTestCaseResultBean> | undefined {
        return this['execute_list'];
    }
}