

export class ListInferDeploymentInstancesRequest {
    public id?: string;
    public name?: string;
    public status?: Array<string>;
    public limit?: number;
    public offset?: string;
    private 'instance_name'?: string;
    public constructor(id?: string, name?: string) { 
        this['id'] = id;
        this['name'] = name;
    }
    public withId(id: string): ListInferDeploymentInstancesRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListInferDeploymentInstancesRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: Array<string>): ListInferDeploymentInstancesRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: number): ListInferDeploymentInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListInferDeploymentInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withInstanceName(instanceName: string): ListInferDeploymentInstancesRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
}