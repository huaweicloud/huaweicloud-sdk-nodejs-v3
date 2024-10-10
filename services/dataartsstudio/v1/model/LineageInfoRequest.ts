import { TableLineageV2 } from './TableLineageV2';


export class LineageInfoRequest {
    private 'cluster_id'?: string;
    private 'data_source_type'?: string;
    private 'connection_id'?: string;
    private 'connection_name'?: string;
    private 'workspace_id'?: string;
    private 'job_id'?: string;
    private 'node_name'?: string;
    private 'table_lineage'?: TableLineageV2;
    public constructor() { 
    }
    public withClusterId(clusterId: string): LineageInfoRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withDataSourceType(dataSourceType: string): LineageInfoRequest {
        this['data_source_type'] = dataSourceType;
        return this;
    }
    public set dataSourceType(dataSourceType: string  | undefined) {
        this['data_source_type'] = dataSourceType;
    }
    public get dataSourceType(): string | undefined {
        return this['data_source_type'];
    }
    public withConnectionId(connectionId: string): LineageInfoRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withConnectionName(connectionName: string): LineageInfoRequest {
        this['connection_name'] = connectionName;
        return this;
    }
    public set connectionName(connectionName: string  | undefined) {
        this['connection_name'] = connectionName;
    }
    public get connectionName(): string | undefined {
        return this['connection_name'];
    }
    public withWorkspaceId(workspaceId: string): LineageInfoRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withJobId(jobId: string): LineageInfoRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withNodeName(nodeName: string): LineageInfoRequest {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withTableLineage(tableLineage: TableLineageV2): LineageInfoRequest {
        this['table_lineage'] = tableLineage;
        return this;
    }
    public set tableLineage(tableLineage: TableLineageV2  | undefined) {
        this['table_lineage'] = tableLineage;
    }
    public get tableLineage(): TableLineageV2 | undefined {
        return this['table_lineage'];
    }
}