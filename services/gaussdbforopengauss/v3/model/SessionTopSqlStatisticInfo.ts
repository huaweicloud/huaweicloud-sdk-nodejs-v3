

export class SessionTopSqlStatisticInfo {
    private 'node_name'?: string;
    private 'unique_sql_id'?: string;
    public query?: string;
    public count?: number;
    public constructor() { 
    }
    public withNodeName(nodeName: string): SessionTopSqlStatisticInfo {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withUniqueSqlId(uniqueSqlId: string): SessionTopSqlStatisticInfo {
        this['unique_sql_id'] = uniqueSqlId;
        return this;
    }
    public set uniqueSqlId(uniqueSqlId: string  | undefined) {
        this['unique_sql_id'] = uniqueSqlId;
    }
    public get uniqueSqlId(): string | undefined {
        return this['unique_sql_id'];
    }
    public withQuery(query: string): SessionTopSqlStatisticInfo {
        this['query'] = query;
        return this;
    }
    public withCount(count: number): SessionTopSqlStatisticInfo {
        this['count'] = count;
        return this;
    }
}