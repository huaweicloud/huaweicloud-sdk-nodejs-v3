import { SubTaskCaseQuery } from './SubTaskCaseQuery';


export class ListSubTestCaseByConditionsUsingRequest {
    private 'service_id'?: string;
    public body?: SubTaskCaseQuery;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): ListSubTestCaseByConditionsUsingRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBody(body: SubTaskCaseQuery): ListSubTestCaseByConditionsUsingRequest {
        this['body'] = body;
        return this;
    }
}