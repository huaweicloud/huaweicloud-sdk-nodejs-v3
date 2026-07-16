

export class ListInferDeploymentHpaEventsRequest {
    private 'service_id'?: string;
    private 'deployment_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor(serviceId?: string, deploymentId?: string) { 
        this['service_id'] = serviceId;
        this['deployment_id'] = deploymentId;
    }
    public withServiceId(serviceId: string): ListInferDeploymentHpaEventsRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withDeploymentId(deploymentId: string): ListInferDeploymentHpaEventsRequest {
        this['deployment_id'] = deploymentId;
        return this;
    }
    public set deploymentId(deploymentId: string  | undefined) {
        this['deployment_id'] = deploymentId;
    }
    public get deploymentId(): string | undefined {
        return this['deployment_id'];
    }
    public withLimit(limit: number): ListInferDeploymentHpaEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInferDeploymentHpaEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: string): ListInferDeploymentHpaEventsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListInferDeploymentHpaEventsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}