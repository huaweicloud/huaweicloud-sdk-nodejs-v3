import { ListAlertGroupsByConditionRequestBody } from './ListAlertGroupsByConditionRequestBody';


export class ListAlertGroupsByConditionRequest {
    private 'service_id'?: string;
    public body?: ListAlertGroupsByConditionRequestBody;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): ListAlertGroupsByConditionRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBody(body: ListAlertGroupsByConditionRequestBody): ListAlertGroupsByConditionRequest {
        this['body'] = body;
        return this;
    }
}