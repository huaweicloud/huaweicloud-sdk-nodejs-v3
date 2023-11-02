

export class SearchVersionsRequest {
    public workspace?: string;
    public name?: string;
    private 'create_by'?: string;
    private 'biz_id'?: number;
    private 'biz_type'?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): SearchVersionsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withName(name: string): SearchVersionsRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): SearchVersionsRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withBizId(bizId: number): SearchVersionsRequest {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: number  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): number | undefined {
        return this['biz_id'];
    }
    public withBizType(bizType: string): SearchVersionsRequest {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: string  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): string | undefined {
        return this['biz_type'];
    }
    public withBeginTime(beginTime: string): SearchVersionsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): SearchVersionsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): SearchVersionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchVersionsRequest {
        this['offset'] = offset;
        return this;
    }
}