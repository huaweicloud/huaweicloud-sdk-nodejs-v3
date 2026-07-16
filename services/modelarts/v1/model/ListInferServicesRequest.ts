

export class ListInferServicesRequest {
    public id?: string;
    private 'pool_id'?: string;
    private 'pool_name'?: string;
    private 'sort_key'?: string;
    public status?: string;
    public name?: string;
    private 'auth_type'?: string;
    public type?: string;
    public description?: string;
    private 'workspace_id'?: string;
    private 'user_name'?: string;
    public tags?: string;
    private 'asset_id'?: string;
    private 'sort_dir'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withId(id: string): ListInferServicesRequest {
        this['id'] = id;
        return this;
    }
    public withPoolId(poolId: string): ListInferServicesRequest {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withPoolName(poolName: string): ListInferServicesRequest {
        this['pool_name'] = poolName;
        return this;
    }
    public set poolName(poolName: string  | undefined) {
        this['pool_name'] = poolName;
    }
    public get poolName(): string | undefined {
        return this['pool_name'];
    }
    public withSortKey(sortKey: string): ListInferServicesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withStatus(status: string): ListInferServicesRequest {
        this['status'] = status;
        return this;
    }
    public withName(name: string): ListInferServicesRequest {
        this['name'] = name;
        return this;
    }
    public withAuthType(authType: string): ListInferServicesRequest {
        this['auth_type'] = authType;
        return this;
    }
    public set authType(authType: string  | undefined) {
        this['auth_type'] = authType;
    }
    public get authType(): string | undefined {
        return this['auth_type'];
    }
    public withType(type: string): ListInferServicesRequest {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): ListInferServicesRequest {
        this['description'] = description;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListInferServicesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withUserName(userName: string): ListInferServicesRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withTags(tags: string): ListInferServicesRequest {
        this['tags'] = tags;
        return this;
    }
    public withAssetId(assetId: string): ListInferServicesRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withSortDir(sortDir: string): ListInferServicesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withLimit(limit: number): ListInferServicesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInferServicesRequest {
        this['offset'] = offset;
        return this;
    }
}