

export class ListComponentTemplateRequest {
    private 'workspace_id'?: string;
    private 'component_id'?: string;
    private 'file_type'?: ListComponentTemplateRequestFileTypeEnum | string;
    public limit?: number;
    public offset?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public constructor(workspaceId?: string, componentId?: string) { 
        this['workspace_id'] = workspaceId;
        this['component_id'] = componentId;
    }
    public withWorkspaceId(workspaceId: string): ListComponentTemplateRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withComponentId(componentId: string): ListComponentTemplateRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withFileType(fileType: ListComponentTemplateRequestFileTypeEnum | string): ListComponentTemplateRequest {
        this['file_type'] = fileType;
        return this;
    }
    public set fileType(fileType: ListComponentTemplateRequestFileTypeEnum | string  | undefined) {
        this['file_type'] = fileType;
    }
    public get fileType(): ListComponentTemplateRequestFileTypeEnum | string | undefined {
        return this['file_type'];
    }
    public withLimit(limit: number): ListComponentTemplateRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListComponentTemplateRequest {
        this['offset'] = offset;
        return this;
    }
    public withSortKey(sortKey: string): ListComponentTemplateRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListComponentTemplateRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListComponentTemplateRequestFileTypeEnum {
    JVM = 'JVM',
    LOG4J2 = 'LOG4J2',
    YML = 'YML'
}
