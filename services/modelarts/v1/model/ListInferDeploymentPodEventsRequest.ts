

export class ListInferDeploymentPodEventsRequest {
    public id?: string;
    private 'deployment_name'?: string;
    private 'instance_name'?: string;
    public name?: string;
    public constructor(id?: string, deploymentName?: string, instanceName?: string, name?: string) { 
        this['id'] = id;
        this['deployment_name'] = deploymentName;
        this['instance_name'] = instanceName;
        this['name'] = name;
    }
    public withId(id: string): ListInferDeploymentPodEventsRequest {
        this['id'] = id;
        return this;
    }
    public withDeploymentName(deploymentName: string): ListInferDeploymentPodEventsRequest {
        this['deployment_name'] = deploymentName;
        return this;
    }
    public set deploymentName(deploymentName: string  | undefined) {
        this['deployment_name'] = deploymentName;
    }
    public get deploymentName(): string | undefined {
        return this['deployment_name'];
    }
    public withInstanceName(instanceName: string): ListInferDeploymentPodEventsRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withName(name: string): ListInferDeploymentPodEventsRequest {
        this['name'] = name;
        return this;
    }
}