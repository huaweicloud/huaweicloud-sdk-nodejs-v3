

export class QuerySelectObjectInfoReq {
    private 'db_names'?: Array<string>;
    public type?: string;
    private 'is_refresh'?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withDbNames(dbNames: Array<string>): QuerySelectObjectInfoReq {
        this['db_names'] = dbNames;
        return this;
    }
    public set dbNames(dbNames: Array<string>  | undefined) {
        this['db_names'] = dbNames;
    }
    public get dbNames(): Array<string> | undefined {
        return this['db_names'];
    }
    public withType(type: string): QuerySelectObjectInfoReq {
        this['type'] = type;
        return this;
    }
    public withIsRefresh(isRefresh: string): QuerySelectObjectInfoReq {
        this['is_refresh'] = isRefresh;
        return this;
    }
    public set isRefresh(isRefresh: string  | undefined) {
        this['is_refresh'] = isRefresh;
    }
    public get isRefresh(): string | undefined {
        return this['is_refresh'];
    }
}