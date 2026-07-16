

export class InferDeploymentVersionItemResp {
    private 'infer_name'?: string;
    public version?: string;
    private 'version_status'?: string;
    public description?: string;
    private 'create_at'?: Date;
    private 'update_at'?: Date;
    private 'deploy_type'?: string;
    public constructor() { 
    }
    public withInferName(inferName: string): InferDeploymentVersionItemResp {
        this['infer_name'] = inferName;
        return this;
    }
    public set inferName(inferName: string  | undefined) {
        this['infer_name'] = inferName;
    }
    public get inferName(): string | undefined {
        return this['infer_name'];
    }
    public withVersion(version: string): InferDeploymentVersionItemResp {
        this['version'] = version;
        return this;
    }
    public withVersionStatus(versionStatus: string): InferDeploymentVersionItemResp {
        this['version_status'] = versionStatus;
        return this;
    }
    public set versionStatus(versionStatus: string  | undefined) {
        this['version_status'] = versionStatus;
    }
    public get versionStatus(): string | undefined {
        return this['version_status'];
    }
    public withDescription(description: string): InferDeploymentVersionItemResp {
        this['description'] = description;
        return this;
    }
    public withCreateAt(createAt: Date): InferDeploymentVersionItemResp {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: Date  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): Date | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: Date): InferDeploymentVersionItemResp {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: Date  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): Date | undefined {
        return this['update_at'];
    }
    public withDeployType(deployType: string): InferDeploymentVersionItemResp {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): string | undefined {
        return this['deploy_type'];
    }
}