

export class ListReportsRequest {
    private 'project_id'?: string;
    private 'page_size'?: number;
    public offset?: number;
    private 'version_id'?: string;
    public type?: number;
    public constructor(projectId?: string, pageSize?: number, offset?: number, versionId?: string, type?: number) { 
        this['project_id'] = projectId;
        this['page_size'] = pageSize;
        this['offset'] = offset;
        this['version_id'] = versionId;
        this['type'] = type;
    }
    public withProjectId(projectId: string): ListReportsRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withPageSize(pageSize: number): ListReportsRequest {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withOffset(offset: number): ListReportsRequest {
        this['offset'] = offset;
        return this;
    }
    public withVersionId(versionId: string): ListReportsRequest {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withType(type: number): ListReportsRequest {
        this['type'] = type;
        return this;
    }
}