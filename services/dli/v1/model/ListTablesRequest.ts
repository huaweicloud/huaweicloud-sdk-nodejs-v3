

export class ListTablesRequest {
    private 'database_name'?: string;
    private 'current-page'?: number;
    public keyword?: string;
    private 'page-size'?: number;
    private 'table-type'?: string;
    private 'with-detail'?: boolean;
    private 'with-priv'?: boolean;
    public constructor(databaseName?: string) { 
        this['database_name'] = databaseName;
    }
    public withDatabaseName(databaseName: string): ListTablesRequest {
        this['database_name'] = databaseName;
        return this;
    }
    public set databaseName(databaseName: string  | undefined) {
        this['database_name'] = databaseName;
    }
    public get databaseName(): string | undefined {
        return this['database_name'];
    }
    public withCurrentPage(currentPage: number): ListTablesRequest {
        this['current-page'] = currentPage;
        return this;
    }
    public set currentPage(currentPage: number  | undefined) {
        this['current-page'] = currentPage;
    }
    public get currentPage(): number | undefined {
        return this['current-page'];
    }
    public withKeyword(keyword: string): ListTablesRequest {
        this['keyword'] = keyword;
        return this;
    }
    public withPageSize(pageSize: number): ListTablesRequest {
        this['page-size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page-size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page-size'];
    }
    public withTableType(tableType: string): ListTablesRequest {
        this['table-type'] = tableType;
        return this;
    }
    public set tableType(tableType: string  | undefined) {
        this['table-type'] = tableType;
    }
    public get tableType(): string | undefined {
        return this['table-type'];
    }
    public withWithDetail(withDetail: boolean): ListTablesRequest {
        this['with-detail'] = withDetail;
        return this;
    }
    public set withDetail(withDetail: boolean  | undefined) {
        this['with-detail'] = withDetail;
    }
    public get withDetail(): boolean | undefined {
        return this['with-detail'];
    }
    public withWithPriv(withPriv: boolean): ListTablesRequest {
        this['with-priv'] = withPriv;
        return this;
    }
    public set withPriv(withPriv: boolean  | undefined) {
        this['with-priv'] = withPriv;
    }
    public get withPriv(): boolean | undefined {
        return this['with-priv'];
    }
}