

export class SwitchInferDeploymentVersionRequestBody {
    private 'service_id'?: string;
    private 'target_deployment_version'?: string;
    private 'infer_name'?: string;
    public constructor(inferName?: string) { 
        this['infer_name'] = inferName;
    }
    public withServiceId(serviceId: string): SwitchInferDeploymentVersionRequestBody {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withTargetDeploymentVersion(targetDeploymentVersion: string): SwitchInferDeploymentVersionRequestBody {
        this['target_deployment_version'] = targetDeploymentVersion;
        return this;
    }
    public set targetDeploymentVersion(targetDeploymentVersion: string  | undefined) {
        this['target_deployment_version'] = targetDeploymentVersion;
    }
    public get targetDeploymentVersion(): string | undefined {
        return this['target_deployment_version'];
    }
    public withInferName(inferName: string): SwitchInferDeploymentVersionRequestBody {
        this['infer_name'] = inferName;
        return this;
    }
    public set inferName(inferName: string  | undefined) {
        this['infer_name'] = inferName;
    }
    public get inferName(): string | undefined {
        return this['infer_name'];
    }
}