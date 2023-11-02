

export class SearchCodeTablesRequest {
    public workspace?: string;
    public name?: string;
    private 'create_by'?: string;
    public approver?: string;
    private 'directory_id'?: number;
    public status?: SearchCodeTablesRequestStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): SearchCodeTablesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withName(name: string): SearchCodeTablesRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): SearchCodeTablesRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withApprover(approver: string): SearchCodeTablesRequest {
        this['approver'] = approver;
        return this;
    }
    public withDirectoryId(directoryId: number): SearchCodeTablesRequest {
        this['directory_id'] = directoryId;
        return this;
    }
    public set directoryId(directoryId: number  | undefined) {
        this['directory_id'] = directoryId;
    }
    public get directoryId(): number | undefined {
        return this['directory_id'];
    }
    public withStatus(status: SearchCodeTablesRequestStatusEnum | string): SearchCodeTablesRequest {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): SearchCodeTablesRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): SearchCodeTablesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): SearchCodeTablesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchCodeTablesRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchCodeTablesRequestStatusEnum {
    DRAFT = 'DRAFT',
    PUBLISH_DEVELOPING = 'PUBLISH_DEVELOPING',
    PUBLISHED = 'PUBLISHED',
    OFFLINE_DEVELOPING = 'OFFLINE_DEVELOPING',
    OFFLINE = 'OFFLINE',
    REJECT = 'REJECT'
}
