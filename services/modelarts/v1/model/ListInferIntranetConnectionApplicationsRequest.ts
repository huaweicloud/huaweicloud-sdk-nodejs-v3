

export class ListInferIntranetConnectionApplicationsRequest {
    public scene?: string;
    public status?: string;
    public id?: string;
    private 'service_id'?: string;
    private 'service_name'?: string;
    private 'vpc_id'?: string;
    private 'vpc_name'?: string;
    private 'pool_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'workspace_id'?: string;
    private 'sort_dir'?: string;
    private 'sort_key'?: string;
    public constructor() { 
    }
    public withScene(scene: string): ListInferIntranetConnectionApplicationsRequest {
        this['scene'] = scene;
        return this;
    }
    public withStatus(status: string): ListInferIntranetConnectionApplicationsRequest {
        this['status'] = status;
        return this;
    }
    public withId(id: string): ListInferIntranetConnectionApplicationsRequest {
        this['id'] = id;
        return this;
    }
    public withServiceId(serviceId: string): ListInferIntranetConnectionApplicationsRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withServiceName(serviceName: string): ListInferIntranetConnectionApplicationsRequest {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withVpcId(vpcId: string): ListInferIntranetConnectionApplicationsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVpcName(vpcName: string): ListInferIntranetConnectionApplicationsRequest {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withPoolId(poolId: string): ListInferIntranetConnectionApplicationsRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withOffset(offset: number): ListInferIntranetConnectionApplicationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInferIntranetConnectionApplicationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListInferIntranetConnectionApplicationsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withSortDir(sortDir: string): ListInferIntranetConnectionApplicationsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withSortKey(sortKey: string): ListInferIntranetConnectionApplicationsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
}