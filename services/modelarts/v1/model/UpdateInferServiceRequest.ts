import { ServiceUpdateRequest } from './ServiceUpdateRequest';


export class UpdateInferServiceRequest {
    private 'service_id'?: string;
    public body?: ServiceUpdateRequest;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): UpdateInferServiceRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBody(body: ServiceUpdateRequest): UpdateInferServiceRequest {
        this['body'] = body;
        return this;
    }
}