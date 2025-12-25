

export class ListCollectorNodeRequest {
    private 'workspace_id'?: string;
    private 'health_status'?: ListCollectorNodeRequestHealthStatusEnum | string;
    public region?: string;
    private 'node_id'?: string;
    private 'node_name'?: string;
    private 'ip_address'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: ListCollectorNodeRequestSortDirEnum | string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListCollectorNodeRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withHealthStatus(healthStatus: ListCollectorNodeRequestHealthStatusEnum | string): ListCollectorNodeRequest {
        this['health_status'] = healthStatus;
        return this;
    }
    public set healthStatus(healthStatus: ListCollectorNodeRequestHealthStatusEnum | string  | undefined) {
        this['health_status'] = healthStatus;
    }
    public get healthStatus(): ListCollectorNodeRequestHealthStatusEnum | string | undefined {
        return this['health_status'];
    }
    public withRegion(region: string): ListCollectorNodeRequest {
        this['region'] = region;
        return this;
    }
    public withNodeId(nodeId: string): ListCollectorNodeRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): ListCollectorNodeRequest {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withIpAddress(ipAddress: string): ListCollectorNodeRequest {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withOffset(offset: number): ListCollectorNodeRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCollectorNodeRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListCollectorNodeRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListCollectorNodeRequestSortDirEnum | string): ListCollectorNodeRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListCollectorNodeRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListCollectorNodeRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListCollectorNodeRequestHealthStatusEnum {
    NORMAL = 'NORMAL',
    ANOMALIES = 'ANOMALIES',
    FAULTS = 'FAULTS',
    LOST_CONTACT = 'LOST_CONTACT'
}
/**
    * @export
    * @enum {string}
    */
export enum ListCollectorNodeRequestSortDirEnum {
    ASC = 'asc',
    DESC = 'desc'
}
