

export class TableLineageInfo {
    private 'source_guid'?: string;
    private 'source_qualified_name'?: string;
    private 'source_type'?: string;
    private 'source_db'?: string;
    private 'source_schema'?: string;
    private 'source_table'?: string;
    private 'target_guid'?: string;
    private 'target_qualified_name'?: string;
    private 'target_type'?: string;
    private 'target_db'?: string;
    private 'target_schema'?: string;
    private 'target_table'?: string;
    private 'node_guid'?: string;
    private 'node_name'?: string;
    private 'node_type'?: string;
    private 'node_qualified_name'?: string;
    private 'workspace_id'?: string;
    public constructor() { 
    }
    public withSourceGuid(sourceGuid: string): TableLineageInfo {
        this['source_guid'] = sourceGuid;
        return this;
    }
    public set sourceGuid(sourceGuid: string  | undefined) {
        this['source_guid'] = sourceGuid;
    }
    public get sourceGuid(): string | undefined {
        return this['source_guid'];
    }
    public withSourceQualifiedName(sourceQualifiedName: string): TableLineageInfo {
        this['source_qualified_name'] = sourceQualifiedName;
        return this;
    }
    public set sourceQualifiedName(sourceQualifiedName: string  | undefined) {
        this['source_qualified_name'] = sourceQualifiedName;
    }
    public get sourceQualifiedName(): string | undefined {
        return this['source_qualified_name'];
    }
    public withSourceType(sourceType: string): TableLineageInfo {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): string | undefined {
        return this['source_type'];
    }
    public withSourceDb(sourceDb: string): TableLineageInfo {
        this['source_db'] = sourceDb;
        return this;
    }
    public set sourceDb(sourceDb: string  | undefined) {
        this['source_db'] = sourceDb;
    }
    public get sourceDb(): string | undefined {
        return this['source_db'];
    }
    public withSourceSchema(sourceSchema: string): TableLineageInfo {
        this['source_schema'] = sourceSchema;
        return this;
    }
    public set sourceSchema(sourceSchema: string  | undefined) {
        this['source_schema'] = sourceSchema;
    }
    public get sourceSchema(): string | undefined {
        return this['source_schema'];
    }
    public withSourceTable(sourceTable: string): TableLineageInfo {
        this['source_table'] = sourceTable;
        return this;
    }
    public set sourceTable(sourceTable: string  | undefined) {
        this['source_table'] = sourceTable;
    }
    public get sourceTable(): string | undefined {
        return this['source_table'];
    }
    public withTargetGuid(targetGuid: string): TableLineageInfo {
        this['target_guid'] = targetGuid;
        return this;
    }
    public set targetGuid(targetGuid: string  | undefined) {
        this['target_guid'] = targetGuid;
    }
    public get targetGuid(): string | undefined {
        return this['target_guid'];
    }
    public withTargetQualifiedName(targetQualifiedName: string): TableLineageInfo {
        this['target_qualified_name'] = targetQualifiedName;
        return this;
    }
    public set targetQualifiedName(targetQualifiedName: string  | undefined) {
        this['target_qualified_name'] = targetQualifiedName;
    }
    public get targetQualifiedName(): string | undefined {
        return this['target_qualified_name'];
    }
    public withTargetType(targetType: string): TableLineageInfo {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withTargetDb(targetDb: string): TableLineageInfo {
        this['target_db'] = targetDb;
        return this;
    }
    public set targetDb(targetDb: string  | undefined) {
        this['target_db'] = targetDb;
    }
    public get targetDb(): string | undefined {
        return this['target_db'];
    }
    public withTargetSchema(targetSchema: string): TableLineageInfo {
        this['target_schema'] = targetSchema;
        return this;
    }
    public set targetSchema(targetSchema: string  | undefined) {
        this['target_schema'] = targetSchema;
    }
    public get targetSchema(): string | undefined {
        return this['target_schema'];
    }
    public withTargetTable(targetTable: string): TableLineageInfo {
        this['target_table'] = targetTable;
        return this;
    }
    public set targetTable(targetTable: string  | undefined) {
        this['target_table'] = targetTable;
    }
    public get targetTable(): string | undefined {
        return this['target_table'];
    }
    public withNodeGuid(nodeGuid: string): TableLineageInfo {
        this['node_guid'] = nodeGuid;
        return this;
    }
    public set nodeGuid(nodeGuid: string  | undefined) {
        this['node_guid'] = nodeGuid;
    }
    public get nodeGuid(): string | undefined {
        return this['node_guid'];
    }
    public withNodeName(nodeName: string): TableLineageInfo {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withNodeType(nodeType: string): TableLineageInfo {
        this['node_type'] = nodeType;
        return this;
    }
    public set nodeType(nodeType: string  | undefined) {
        this['node_type'] = nodeType;
    }
    public get nodeType(): string | undefined {
        return this['node_type'];
    }
    public withNodeQualifiedName(nodeQualifiedName: string): TableLineageInfo {
        this['node_qualified_name'] = nodeQualifiedName;
        return this;
    }
    public set nodeQualifiedName(nodeQualifiedName: string  | undefined) {
        this['node_qualified_name'] = nodeQualifiedName;
    }
    public get nodeQualifiedName(): string | undefined {
        return this['node_qualified_name'];
    }
    public withWorkspaceId(workspaceId: string): TableLineageInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}