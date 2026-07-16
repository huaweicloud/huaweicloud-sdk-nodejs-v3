

export class DeleteInferDeploymentVersionRequest {
    private 'service_id'?: string;
    public version?: string;
    private 'deployment_id'?: string;
    public constructor(serviceId?: string, version?: string, deploymentId?: string) { 
        this['service_id'] = serviceId;
        this['version'] = version;
        this['deployment_id'] = deploymentId;
    }
    public withServiceId(serviceId: string): DeleteInferDeploymentVersionRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withVersion(version: string): DeleteInferDeploymentVersionRequest {
        this['version'] = version;
        return this;
    }
    public withDeploymentId(deploymentId: string): DeleteInferDeploymentVersionRequest {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string  | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId(): string | undefined {
        return this['deployment_id'];
    }
}