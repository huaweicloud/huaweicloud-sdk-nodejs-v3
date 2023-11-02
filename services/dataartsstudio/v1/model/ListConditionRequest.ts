

export class ListConditionRequest {
    public workspace?: string;
    public name?: string;
    private 'create_by'?: string;
    public approver?: string;
    public status?: ListConditionRequestStatusEnum | string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ListConditionRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withName(name: string): ListConditionRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): ListConditionRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withApprover(approver: string): ListConditionRequest {
        this['approver'] = approver;
        return this;
    }
    public withStatus(status: ListConditionRequestStatusEnum | string): ListConditionRequest {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): ListConditionRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ListConditionRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListConditionRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListConditionRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListConditionRequestStatusEnum {
    DRAFT = 'DRAFT',
    PUBLISH_DEVELOPING = 'PUBLISH_DEVELOPING',
    PUBLISHED = 'PUBLISHED',
    OFFLINE_DEVELOPING = 'OFFLINE_DEVELOPING',
    OFFLINE = 'OFFLINE',
    REJECT = 'REJECT'
}
