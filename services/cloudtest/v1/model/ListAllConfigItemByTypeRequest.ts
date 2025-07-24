import { ListAllConfigItemByTypeRequestBody } from './ListAllConfigItemByTypeRequestBody';


export class ListAllConfigItemByTypeRequest {
    private 'service_id'?: string;
    public body?: ListAllConfigItemByTypeRequestBody;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): ListAllConfigItemByTypeRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBody(body: ListAllConfigItemByTypeRequestBody): ListAllConfigItemByTypeRequest {
        this['body'] = body;
        return this;
    }
}