import { UpdateInferDeploymentScale } from './UpdateInferDeploymentScale';


export class UpdateInferDeploymentScaleRequest {
    private 'service_id'?: string;
    private 'deployment_name'?: string;
    public body?: UpdateInferDeploymentScale;
    public constructor(serviceId?: string, deploymentName?: string) { 
        this['service_id'] = serviceId;
        this['deployment_name'] = deploymentName;
    }
    public withServiceId(serviceId: string): UpdateInferDeploymentScaleRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withDeploymentName(deploymentName: string): UpdateInferDeploymentScaleRequest {
        this['deployment_name'] = deploymentName;
        return this;
    }
    public set deploymentName(deploymentName: string  | undefined) {
        this['deployment_name'] = deploymentName;
    }
    public get deploymentName(): string | undefined {
        return this['deployment_name'];
    }
    public withBody(body: UpdateInferDeploymentScale): UpdateInferDeploymentScaleRequest {
        this['body'] = body;
        return this;
    }
}