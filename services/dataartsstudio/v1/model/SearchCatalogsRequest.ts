

export class SearchCatalogsRequest {
    public workspace?: string;
    public name?: string;
    private 'create_by'?: string;
    public owner?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): SearchCatalogsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withName(name: string): SearchCatalogsRequest {
        this['name'] = name;
        return this;
    }
    public withCreateBy(createBy: string): SearchCatalogsRequest {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withOwner(owner: string): SearchCatalogsRequest {
        this['owner'] = owner;
        return this;
    }
    public withBeginTime(beginTime: string): SearchCatalogsRequest {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): SearchCatalogsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): SearchCatalogsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchCatalogsRequest {
        this['offset'] = offset;
        return this;
    }
}