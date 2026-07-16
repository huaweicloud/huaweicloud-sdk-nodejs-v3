import { GroupConfig } from './GroupConfig';


export class CreateInferDeploymentRequest {
    private 'service_id'?: string;
    public body?: GroupConfig;
    public constructor(serviceId?: string) { 
        this['service_id'] = serviceId;
    }
    public withServiceId(serviceId: string): CreateInferDeploymentRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withBody(body: GroupConfig): CreateInferDeploymentRequest {
        this['body'] = body;
        return this;
    }
}