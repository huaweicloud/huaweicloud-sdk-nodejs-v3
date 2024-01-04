

export class ListFactoryTaskOverviewRequest {
    public workspace?: string;
    private 'is_own'?: string;
    private 'query_days'?: string;
    public constructor() { 
    }
    public withWorkspace(workspace: string): ListFactoryTaskOverviewRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withIsOwn(isOwn: string): ListFactoryTaskOverviewRequest {
        this['is_own'] = isOwn;
        return this;
    }
    public set isOwn(isOwn: string  | undefined) {
        this['is_own'] = isOwn;
    }
    public get isOwn(): string | undefined {
        return this['is_own'];
    }
    public withQueryDays(queryDays: string): ListFactoryTaskOverviewRequest {
        this['query_days'] = queryDays;
        return this;
    }
    public set queryDays(queryDays: string  | undefined) {
        this['query_days'] = queryDays;
    }
    public get queryDays(): string | undefined {
        return this['query_days'];
    }
}