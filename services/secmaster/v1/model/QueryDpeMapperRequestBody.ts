

export class QueryDpeMapperRequestBody {
    private 'mapping_id'?: string;
    private 'workspace_id'?: string;
    private 'project_id'?: string;
    private 'dataclass_id'?: string;
    private 'datasource_instance_id'?: string;
    public status?: string;
    public name?: string;
    private 'has_preprocess_rule'?: boolean;
    private 'start_time'?: Date;
    private 'end_time'?: Date;
    public offset?: number;
    public limit?: number;
    public constructor(mappingId?: string) { 
        this['mapping_id'] = mappingId;
    }
    public withMappingId(mappingId: string): QueryDpeMapperRequestBody {
        this['mapping_id'] = mappingId;
        return this;
    }
    public set mappingId(mappingId: string  | undefined) {
        this['mapping_id'] = mappingId;
    }
    public get mappingId(): string | undefined {
        return this['mapping_id'];
    }
    public withWorkspaceId(workspaceId: string): QueryDpeMapperRequestBody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withProjectId(projectId: string): QueryDpeMapperRequestBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDataclassId(dataclassId: string): QueryDpeMapperRequestBody {
        this['dataclass_id'] = dataclassId;
        return this;
    }
    public set dataclassId(dataclassId: string  | undefined) {
        this['dataclass_id'] = dataclassId;
    }
    public get dataclassId(): string | undefined {
        return this['dataclass_id'];
    }
    public withDatasourceInstanceId(datasourceInstanceId: string): QueryDpeMapperRequestBody {
        this['datasource_instance_id'] = datasourceInstanceId;
        return this;
    }
    public set datasourceInstanceId(datasourceInstanceId: string  | undefined) {
        this['datasource_instance_id'] = datasourceInstanceId;
    }
    public get datasourceInstanceId(): string | undefined {
        return this['datasource_instance_id'];
    }
    public withStatus(status: string): QueryDpeMapperRequestBody {
        this['status'] = status;
        return this;
    }
    public withName(name: string): QueryDpeMapperRequestBody {
        this['name'] = name;
        return this;
    }
    public withHasPreprocessRule(hasPreprocessRule: boolean): QueryDpeMapperRequestBody {
        this['has_preprocess_rule'] = hasPreprocessRule;
        return this;
    }
    public set hasPreprocessRule(hasPreprocessRule: boolean  | undefined) {
        this['has_preprocess_rule'] = hasPreprocessRule;
    }
    public get hasPreprocessRule(): boolean | undefined {
        return this['has_preprocess_rule'];
    }
    public withStartTime(startTime: Date): QueryDpeMapperRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: Date  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): Date | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: Date): QueryDpeMapperRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): Date | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): QueryDpeMapperRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): QueryDpeMapperRequestBody {
        this['limit'] = limit;
        return this;
    }
}