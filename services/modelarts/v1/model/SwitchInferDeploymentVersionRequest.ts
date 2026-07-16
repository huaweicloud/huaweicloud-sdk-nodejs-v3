import { SwitchInferDeploymentVersionRequestBody } from './SwitchInferDeploymentVersionRequestBody';


export class SwitchInferDeploymentVersionRequest {
    private 'service_id'?: string;
    private 'deployment_id'?: string;
    public version?: string;
    public body?: SwitchInferDeploymentVersionRequestBody;
    public constructor(serviceId?: string, deploymentId?: string, version?: string) { 
        this['service_id'] = serviceId;
        this['deployment_id'] = deploymentId;
        this['version'] = version;
    }
    public withServiceId(serviceId: string): SwitchInferDeploymentVersionRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withDeploymentId(deploymentId: string): SwitchInferDeploymentVersionRequest {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string  | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId(): string | undefined {
        return this['deployment_id'];
    }
    public withVersion(version: string): SwitchInferDeploymentVersionRequest {
        this['version'] = version;
        return this;
    }
    public withBody(body: SwitchInferDeploymentVersionRequestBody): SwitchInferDeploymentVersionRequest {
        this['body'] = body;
        return this;
    }
}