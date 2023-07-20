

export class DeploymentIdPrimitiveTypeHolder {
    private 'deployment_id'?: string;
    public constructor() { 
    }
    public withDeploymentId(deploymentId: string): DeploymentIdPrimitiveTypeHolder {
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