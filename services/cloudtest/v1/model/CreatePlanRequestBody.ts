import { PlanCycle } from './PlanCycle';


export class CreatePlanRequestBody {
    public name?: string;
    private 'assigned_id'?: string;
    private 'service_id_list'?: Array<number>;
    private 'plan_cycle'?: PlanCycle;
    public constructor(name?: string, serviceIdList?: Array<number>, planCycle?: PlanCycle) { 
        this['name'] = name;
        this['service_id_list'] = serviceIdList;
        this['plan_cycle'] = planCycle;
    }
    public withName(name: string): CreatePlanRequestBody {
        this['name'] = name;
        return this;
    }
    public withAssignedId(assignedId: string): CreatePlanRequestBody {
        this['assigned_id'] = assignedId;
        return this;
    }
    public set assignedId(assignedId: string  | undefined) {
        this['assigned_id'] = assignedId;
    }
    public get assignedId(): string | undefined {
        return this['assigned_id'];
    }
    public withServiceIdList(serviceIdList: Array<number>): CreatePlanRequestBody {
        this['service_id_list'] = serviceIdList;
        return this;
    }
    public set serviceIdList(serviceIdList: Array<number>  | undefined) {
        this['service_id_list'] = serviceIdList;
    }
    public get serviceIdList(): Array<number> | undefined {
        return this['service_id_list'];
    }
    public withPlanCycle(planCycle: PlanCycle): CreatePlanRequestBody {
        this['plan_cycle'] = planCycle;
        return this;
    }
    public set planCycle(planCycle: PlanCycle  | undefined) {
        this['plan_cycle'] = planCycle;
    }
    public get planCycle(): PlanCycle | undefined {
        return this['plan_cycle'];
    }
}