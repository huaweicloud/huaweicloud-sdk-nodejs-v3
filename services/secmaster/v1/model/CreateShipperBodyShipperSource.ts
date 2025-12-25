

export class CreateShipperBodyShipperSource {
    public region?: string;
    private 'source_dataspace'?: string;
    private 'source_dataspace_name'?: string;
    private 'source_identity_role'?: string;
    private 'source_table'?: string;
    private 'source_table_name'?: string;
    private 'source_pipe'?: string;
    private 'source_pipe_name'?: string;
    private 'source_type'?: number;
    private 'source_workspace'?: string;
    private 'source_workspace_name'?: string;
    public constructor() { 
    }
    public withRegion(region: string): CreateShipperBodyShipperSource {
        this['region'] = region;
        return this;
    }
    public withSourceDataspace(sourceDataspace: string): CreateShipperBodyShipperSource {
        this['source_dataspace'] = sourceDataspace;
        return this;
    }
    public set sourceDataspace(sourceDataspace: string  | undefined) {
        this['source_dataspace'] = sourceDataspace;
    }
    public get sourceDataspace(): string | undefined {
        return this['source_dataspace'];
    }
    public withSourceDataspaceName(sourceDataspaceName: string): CreateShipperBodyShipperSource {
        this['source_dataspace_name'] = sourceDataspaceName;
        return this;
    }
    public set sourceDataspaceName(sourceDataspaceName: string  | undefined) {
        this['source_dataspace_name'] = sourceDataspaceName;
    }
    public get sourceDataspaceName(): string | undefined {
        return this['source_dataspace_name'];
    }
    public withSourceIdentityRole(sourceIdentityRole: string): CreateShipperBodyShipperSource {
        this['source_identity_role'] = sourceIdentityRole;
        return this;
    }
    public set sourceIdentityRole(sourceIdentityRole: string  | undefined) {
        this['source_identity_role'] = sourceIdentityRole;
    }
    public get sourceIdentityRole(): string | undefined {
        return this['source_identity_role'];
    }
    public withSourceTable(sourceTable: string): CreateShipperBodyShipperSource {
        this['source_table'] = sourceTable;
        return this;
    }
    public set sourceTable(sourceTable: string  | undefined) {
        this['source_table'] = sourceTable;
    }
    public get sourceTable(): string | undefined {
        return this['source_table'];
    }
    public withSourceTableName(sourceTableName: string): CreateShipperBodyShipperSource {
        this['source_table_name'] = sourceTableName;
        return this;
    }
    public set sourceTableName(sourceTableName: string  | undefined) {
        this['source_table_name'] = sourceTableName;
    }
    public get sourceTableName(): string | undefined {
        return this['source_table_name'];
    }
    public withSourcePipe(sourcePipe: string): CreateShipperBodyShipperSource {
        this['source_pipe'] = sourcePipe;
        return this;
    }
    public set sourcePipe(sourcePipe: string  | undefined) {
        this['source_pipe'] = sourcePipe;
    }
    public get sourcePipe(): string | undefined {
        return this['source_pipe'];
    }
    public withSourcePipeName(sourcePipeName: string): CreateShipperBodyShipperSource {
        this['source_pipe_name'] = sourcePipeName;
        return this;
    }
    public set sourcePipeName(sourcePipeName: string  | undefined) {
        this['source_pipe_name'] = sourcePipeName;
    }
    public get sourcePipeName(): string | undefined {
        return this['source_pipe_name'];
    }
    public withSourceType(sourceType: number): CreateShipperBodyShipperSource {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: number  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): number | undefined {
        return this['source_type'];
    }
    public withSourceWorkspace(sourceWorkspace: string): CreateShipperBodyShipperSource {
        this['source_workspace'] = sourceWorkspace;
        return this;
    }
    public set sourceWorkspace(sourceWorkspace: string  | undefined) {
        this['source_workspace'] = sourceWorkspace;
    }
    public get sourceWorkspace(): string | undefined {
        return this['source_workspace'];
    }
    public withSourceWorkspaceName(sourceWorkspaceName: string): CreateShipperBodyShipperSource {
        this['source_workspace_name'] = sourceWorkspaceName;
        return this;
    }
    public set sourceWorkspaceName(sourceWorkspaceName: string  | undefined) {
        this['source_workspace_name'] = sourceWorkspaceName;
    }
    public get sourceWorkspaceName(): string | undefined {
        return this['source_workspace_name'];
    }
}