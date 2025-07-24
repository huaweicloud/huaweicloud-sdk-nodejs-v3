import { ServiceRequestBody } from './ServiceRequestBody';


export class UpdateServiceRequest {
    private 'service_id'?: number;
    public body?: ServiceRequestBody;
    public constructor(serviceId?: number) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: number): UpdateServiceRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: number  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): number | undefined {
        return this['service_id'];
    }
    public withBody(body: ServiceRequestBody): UpdateServiceRequest {
        this['body'] = body;
        return this;
    }
}