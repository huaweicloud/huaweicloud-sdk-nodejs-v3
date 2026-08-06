

export class ListInferDeploymentVersionsRequest {
    private 'service_id'?: string;
    private 'deployment_id'?: string;
    private 'sort_key'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(serviceId?: string, deploymentId?: string) { 
        this['service_id'] = serviceId;
        this['deployment_id'] = deploymentId;
    }
    public withServiceId(serviceId: string): ListInferDeploymentVersionsRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withDeploymentId(deploymentId: string): ListInferDeploymentVersionsRequest {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string  | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId(): string | undefined {
        return this['deployment_id'];
    }
    public withSortKey(sortKey: string): ListInferDeploymentVersionsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withLimit(limit: number): ListInferDeploymentVersionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInferDeploymentVersionsRequest {
        this['offset'] = offset;
        return this;
    }
}