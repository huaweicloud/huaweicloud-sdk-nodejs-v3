

export class DeleteInferDeploymentInstanceRequest {
    public id?: string;
    private 'deployment_name'?: string;
    public name?: string;
    public force?: boolean;
    public operation?: string;
    public constructor(id?: string, deploymentName?: string, name?: string) { 
        this['id'] = id;
        this['deployment_name'] = deploymentName;
        this['name'] = name;
    }
    public withId(id: string): DeleteInferDeploymentInstanceRequest {
        this['id'] = id;
        return this;
    }
    public withDeploymentName(deploymentName: string): DeleteInferDeploymentInstanceRequest {
        this['deployment_name'] = deploymentName;
        return this;
    }
    public set deploymentName(deploymentName: string  | undefined) {
        this['deployment_name'] = deploymentName;
    }
    public get deploymentName(): string | undefined {
        return this['deployment_name'];
    }
    public withName(name: string): DeleteInferDeploymentInstanceRequest {
        this['name'] = name;
        return this;
    }
    public withForce(force: boolean): DeleteInferDeploymentInstanceRequest {
        this['force'] = force;
        return this;
    }
    public withOperation(operation: string): DeleteInferDeploymentInstanceRequest {
        this['operation'] = operation;
        return this;
    }
}