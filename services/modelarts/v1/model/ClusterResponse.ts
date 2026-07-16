import { Flavor } from './Flavor';


export class ClusterResponse {
    private 'logic_cluster_id'?: string;
    public status?: string;
    private 'pool_id'?: string;
    public type?: string;
    private 'resource_categories'?: string;
    private 'workspace_id'?: string;
    private 'create_at'?: string;
    private 'update_at'?: string;
    private 'project_id'?: string;
    private 'domain_id'?: string;
    public flavors?: Array<Flavor>;
    private 'is_allow_root'?: boolean;
    public constructor() { 
    }
    public withLogicClusterId(logicClusterId: string): ClusterResponse {
        this['logic_cluster_id'] = logicClusterId;
        return this;
    }
    public set logicClusterId(logicClusterId: string  | undefined) {
        this['logic_cluster_id'] = logicClusterId;
    }
    public get logicClusterId(): string | undefined {
        return this['logic_cluster_id'];
    }
    public withStatus(status: string): ClusterResponse {
        this['status'] = status;
        return this;
    }
    public withPoolId(poolId: string): ClusterResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withType(type: string): ClusterResponse {
        this['type'] = type;
        return this;
    }
    public withResourceCategories(resourceCategories: string): ClusterResponse {
        this['resource_categories'] = resourceCategories;
        return this;
    }
    public set resourceCategories(resourceCategories: string  | undefined) {
        this['resource_categories'] = resourceCategories;
    }
    public get resourceCategories(): string | undefined {
        return this['resource_categories'];
    }
    public withWorkspaceId(workspaceId: string): ClusterResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withCreateAt(createAt: string): ClusterResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): ClusterResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withProjectId(projectId: string): ClusterResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): ClusterResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withFlavors(flavors: Array<Flavor>): ClusterResponse {
        this['flavors'] = flavors;
        return this;
    }
    public withIsAllowRoot(isAllowRoot: boolean): ClusterResponse {
        this['is_allow_root'] = isAllowRoot;
        return this;
    }
    public set isAllowRoot(isAllowRoot: boolean  | undefined) {
        this['is_allow_root'] = isAllowRoot;
    }
    public get isAllowRoot(): boolean | undefined {
        return this['is_allow_root'];
    }
}