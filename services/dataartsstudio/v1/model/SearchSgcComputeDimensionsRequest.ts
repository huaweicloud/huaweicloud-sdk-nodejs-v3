

export class SearchSgcComputeDimensionsRequest {
    private 'instance_id'?: string;
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    private 'node_creator_name'?: string;
    public type?: SearchSgcComputeDimensionsRequestTypeEnum | number;
    private 'node_type'?: SearchSgcComputeDimensionsRequestNodeTypeEnum | string;
    private 'order_by'?: string;
    public constructor(instanceId?: string, workspaceId?: string) { 
        this['instance_id'] = instanceId;
        this['workspace_id'] = workspaceId;
    }
    public withInstanceId(instanceId: string): SearchSgcComputeDimensionsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withWorkspaceId(workspaceId: string): SearchSgcComputeDimensionsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): SearchSgcComputeDimensionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchSgcComputeDimensionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): SearchSgcComputeDimensionsRequest {
        this['name'] = name;
        return this;
    }
    public withNodeCreatorName(nodeCreatorName: string): SearchSgcComputeDimensionsRequest {
        this['node_creator_name'] = nodeCreatorName;
        return this;
    }
    public set nodeCreatorName(nodeCreatorName: string  | undefined) {
        this['node_creator_name'] = nodeCreatorName;
    }
    public get nodeCreatorName(): string | undefined {
        return this['node_creator_name'];
    }
    public withType(type: SearchSgcComputeDimensionsRequestTypeEnum | number): SearchSgcComputeDimensionsRequest {
        this['type'] = type;
        return this;
    }
    public withNodeType(nodeType: SearchSgcComputeDimensionsRequestNodeTypeEnum | string): SearchSgcComputeDimensionsRequest {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: SearchSgcComputeDimensionsRequestNodeTypeEnum | string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): SearchSgcComputeDimensionsRequestNodeTypeEnum | string | undefined {
        return this['node_type'];
    }
    public withOrderBy(orderBy: string): SearchSgcComputeDimensionsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchSgcComputeDimensionsRequestTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_2 = 2
}
/**
    * @export
    * @enum {string}
    */
export enum SearchSgcComputeDimensionsRequestNodeTypeEnum {
    HIVE_SQL = 'HIVE SQL',
    SPARKSQL = 'SparkSQL',
    SPARK = 'Spark',
    FLINK_SQL = 'Flink SQL',
    MRS_FLINK_JOB = 'MRS Flink Job',
    DWS_SQL = 'DWS SQL'
}
