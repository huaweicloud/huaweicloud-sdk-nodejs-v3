

export class ShowPlaybookMonitorsRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'playbook_id'?: string;
    private 'start_time'?: string;
    private 'version_query_type'?: ShowPlaybookMonitorsRequestVersionQueryTypeEnum | string;
    private 'end_time'?: string;
    public constructor(contentType?: string, workspaceId?: string, playbookId?: string, startTime?: string, versionQueryType?: string, endTime?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['playbook_id'] = playbookId;
        this['start_time'] = startTime;
        this['version_query_type'] = versionQueryType;
        this['end_time'] = endTime;
    }
    public withContentType(contentType: string): ShowPlaybookMonitorsRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ShowPlaybookMonitorsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withPlaybookId(playbookId: string): ShowPlaybookMonitorsRequest {
        this['playbook_id'] = playbookId;
        return this;
    }
    public set playbookId(playbookId: string  | undefined) {
        this['playbook_id'] = playbookId;
    }
    public get playbookId(): string | undefined {
        return this['playbook_id'];
    }
    public withStartTime(startTime: string): ShowPlaybookMonitorsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withVersionQueryType(versionQueryType: ShowPlaybookMonitorsRequestVersionQueryTypeEnum | string): ShowPlaybookMonitorsRequest {
        this['version_query_type'] = versionQueryType;
        return this;
    }
    public set versionQueryType(versionQueryType: ShowPlaybookMonitorsRequestVersionQueryTypeEnum | string  | undefined) {
        this['version_query_type'] = versionQueryType;
    }
    public get versionQueryType(): ShowPlaybookMonitorsRequestVersionQueryTypeEnum | string | undefined {
        return this['version_query_type'];
    }
    public withEndTime(endTime: string): ShowPlaybookMonitorsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowPlaybookMonitorsRequestVersionQueryTypeEnum {
    ALLVALIDDELETED = 'ALL:全部，VALID:有效的，DELETED:已删除'
}
