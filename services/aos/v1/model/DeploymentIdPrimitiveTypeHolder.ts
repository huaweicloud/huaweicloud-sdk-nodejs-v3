

export class DeploymentIdPrimitiveTypeHolder {
    private 'deployment_id'?: string | undefined;
    public constructor() { 
    }
    public withDeploymentId(deploymentId: string): DeploymentIdPrimitiveTypeHolder {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId() {
        return this['deployment_id'];
    }
}