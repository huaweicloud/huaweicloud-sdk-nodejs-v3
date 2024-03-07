

export class SqlLimitObject {
    public id?: string;
    private 'query_id'?: string;
    private 'query_string'?: string;
    private 'max_concurrency'?: number;
    private 'is_effective'?: boolean;
    private 'max_waiting'?: number;
    private 'search_path'?: string;
    public constructor(id?: string, queryId?: string, queryString?: string, maxConcurrency?: number, isEffective?: boolean, maxWaiting?: number, searchPath?: string) { 
        this['id'] = id;
        this['query_id'] = queryId;
        this['query_string'] = queryString;
        this['max_concurrency'] = maxConcurrency;
        this['is_effective'] = isEffective;
        this['max_waiting'] = maxWaiting;
        this['search_path'] = searchPath;
    }
    public withId(id: string): SqlLimitObject {
        this['id'] = id;
        return this;
    }
    public withQueryId(queryId: string): SqlLimitObject {
        this['query_id'] = queryId;
        return this;
    }
    public set queryId(queryId: string  | undefined) {
        this['query_id'] = queryId;
    }
    public get queryId(): string | undefined {
        return this['query_id'];
    }
    public withQueryString(queryString: string): SqlLimitObject {
        this['query_string'] = queryString;
        return this;
    }
    public set queryString(queryString: string  | undefined) {
        this['query_string'] = queryString;
    }
    public get queryString(): string | undefined {
        return this['query_string'];
    }
    public withMaxConcurrency(maxConcurrency: number): SqlLimitObject {
        this['max_concurrency'] = maxConcurrency;
        return this;
    }
    public set maxConcurrency(maxConcurrency: number  | undefined) {
        this['max_concurrency'] = maxConcurrency;
    }
    public get maxConcurrency(): number | undefined {
        return this['max_concurrency'];
    }
    public withIsEffective(isEffective: boolean): SqlLimitObject {
        this['is_effective'] = isEffective;
        return this;
    }
    public set isEffective(isEffective: boolean  | undefined) {
        this['is_effective'] = isEffective;
    }
    public get isEffective(): boolean | undefined {
        return this['is_effective'];
    }
    public withMaxWaiting(maxWaiting: number): SqlLimitObject {
        this['max_waiting'] = maxWaiting;
        return this;
    }
    public set maxWaiting(maxWaiting: number  | undefined) {
        this['max_waiting'] = maxWaiting;
    }
    public get maxWaiting(): number | undefined {
        return this['max_waiting'];
    }
    public withSearchPath(searchPath: string): SqlLimitObject {
        this['search_path'] = searchPath;
        return this;
    }
    public set searchPath(searchPath: string  | undefined) {
        this['search_path'] = searchPath;
    }
    public get searchPath(): string | undefined {
        return this['search_path'];
    }
}