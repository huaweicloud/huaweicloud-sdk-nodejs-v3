

export class SearchSubjectRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    public name?: string;
    private 'create_by'?: string;
    public owner?: string;
    public status?: SearchSubjectRequestStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    private 'parent_id'?: string;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): SearchSubjectRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): SearchSubjectRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): SearchSubjectRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withName(name: string): SearchSubjectRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): SearchSubjectRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withOwner(owner: string): SearchSubjectRequest {
        this['owner'] = owner;
        return this;
    }
    public withStatus(status: SearchSubjectRequestStatusEnum | string): SearchSubjectRequest {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): SearchSubjectRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): SearchSubjectRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): SearchSubjectRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchSubjectRequest {
        this['offset'] = offset;
        return this;
    }
    public withParentId(parentId: string): SearchSubjectRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchSubjectRequestStatusEnum {
    DRAFT = 'DRAFT',
    PUBLISH_DEVELOPING = 'PUBLISH_DEVELOPING',
    PUBLISHED = 'PUBLISHED',
    OFFLINE_DEVELOPING = 'OFFLINE_DEVELOPING',
    OFFLINE = 'OFFLINE',
    REJECT = 'REJECT'
}
