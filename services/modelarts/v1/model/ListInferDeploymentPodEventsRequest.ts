

export class ListInferDeploymentPodEventsRequest {
    public id?: string;
    private 'deployment_name'?: string;
    private 'instance_name'?: string;
    public name?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
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
    public withStartTime(startTime: string): ListInferDeploymentPodEventsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListInferDeploymentPodEventsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}