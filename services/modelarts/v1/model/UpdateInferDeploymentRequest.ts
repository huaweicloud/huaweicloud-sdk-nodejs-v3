import { GroupConfigUpdateRequest } from './GroupConfigUpdateRequest';


export class UpdateInferDeploymentRequest {
    private 'service_id'?: string;
    private 'deployment_id'?: string;
    public body?: GroupConfigUpdateRequest;
    public constructor(serviceId?: string, deploymentId?: string) { 
        this['service_id'] = serviceId;
        this['deployment_id'] = deploymentId;
    }
    public withServiceId(serviceId: string): UpdateInferDeploymentRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withDeploymentId(deploymentId: string): UpdateInferDeploymentRequest {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string  | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId(): string | undefined {
        return this['deployment_id'];
    }
    public withBody(body: GroupConfigUpdateRequest): UpdateInferDeploymentRequest {
        this['body'] = body;
        return this;
    }
}