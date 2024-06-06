

export class ListNodesRequest {
    private 'cluster_id'?: string;
    private 'node_group'?: string;
    public limit?: number;
    public offset?: number;
    private 'node_name'?: string;
    private 'sort_key'?: ListNodesRequestSortKeyEnum | string;
    private 'sort_dir'?: ListNodesRequestSortDirEnum | string;
    private 'query_node_detail'?: boolean;
    private 'query_ecs_detail'?: boolean;
    private 'internal_ip'?: string;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListNodesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNodeGroup(nodeGroup: string): ListNodesRequest {
        this['node_group'] = nodeGroup;
        return this;
    }
    public set nodeGroup(nodeGroup: string  | undefined) {
        this['node_group'] = nodeGroup;
    }
    public get nodeGroup(): string | undefined {
        return this['node_group'];
    }
    public withLimit(limit: number): ListNodesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListNodesRequest {
        this['offset'] = offset;
        return this;
    }
    public withNodeName(nodeName: string): ListNodesRequest {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withSortKey(sortKey: ListNodesRequestSortKeyEnum | string): ListNodesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListNodesRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListNodesRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListNodesRequestSortDirEnum | string): ListNodesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListNodesRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListNodesRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
    }
    public withQueryNodeDetail(queryNodeDetail: boolean): ListNodesRequest {
        this['query_node_detail'] = queryNodeDetail;
        return this;
    }
    public set queryNodeDetail(queryNodeDetail: boolean  | undefined) {
        this['query_node_detail'] = queryNodeDetail;
    }
    public get queryNodeDetail(): boolean | undefined {
        return this['query_node_detail'];
    }
    public withQueryEcsDetail(queryEcsDetail: boolean): ListNodesRequest {
        this['query_ecs_detail'] = queryEcsDetail;
        return this;
    }
    public set queryEcsDetail(queryEcsDetail: boolean  | undefined) {
        this['query_ecs_detail'] = queryEcsDetail;
    }
    public get queryEcsDetail(): boolean | undefined {
        return this['query_ecs_detail'];
    }
    public withInternalIp(internalIp: string): ListNodesRequest {
        this['internal_ip'] = internalIp;
        return this;
    }
    public set internalIp(internalIp: string  | undefined) {
        this['internal_ip'] = internalIp;
    }
    public get internalIp(): string | undefined {
        return this['internal_ip'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNodesRequestSortKeyEnum {
    NODE_NAME = 'node_name'
}
/**
    * @export
    * @enum {string}
    */
export enum ListNodesRequestSortDirEnum {
    DESC = 'desc',
    ASC = 'asc'
}
