import { TestCaseExecuteBean } from './TestCaseExecuteBean';


export class RunTestCaseRequestBody {
    private 'service_id'?: number;
    private 'plan_id'?: string;
    private 'execute_list'?: Array<TestCaseExecuteBean>;
    public constructor(serviceId?: number, executeList?: Array<TestCaseExecuteBean>) { 
        this['service_id'] = serviceId;
        this['execute_list'] = executeList;
    }
    public withServiceId(serviceId: number): RunTestCaseRequestBody {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: number  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): number | undefined {
        return this['service_id'];
    }
    public withPlanId(planId: string): RunTestCaseRequestBody {
        this['plan_id'] = planId;
        return this;
    }
    public set planId(planId: string  | undefined) {
        this['plan_id'] = planId;
    }
    public get planId(): string | undefined {
        return this['plan_id'];
    }
    public withExecuteList(executeList: Array<TestCaseExecuteBean>): RunTestCaseRequestBody {
        this['execute_list'] = executeList;
        return this;
    }
    public set executeList(executeList: Array<TestCaseExecuteBean>  | undefined) {
        this['execute_list'] = executeList;
    }
    public get executeList(): Array<TestCaseExecuteBean> | undefined {
        return this['execute_list'];
    }
}