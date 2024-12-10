

export class ListRdsDatabasesRequest {
    private 'db_type'?: ListRdsDatabasesRequestDbTypeEnum | string;
    public offset?: string;
    public limit?: string;
    public constructor(dbType?: string) { 
        this['db_type'] = dbType;
    }
    public withDbType(dbType: ListRdsDatabasesRequestDbTypeEnum | string): ListRdsDatabasesRequest {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: ListRdsDatabasesRequestDbTypeEnum | string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): ListRdsDatabasesRequestDbTypeEnum | string | undefined {
        return this['db_type'];
    }
    public withOffset(offset: string): ListRdsDatabasesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListRdsDatabasesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListRdsDatabasesRequestDbTypeEnum {
    MYSQL = 'MYSQL',
    POSTGRESQL = 'POSTGRESQL',
    SQLSERVER = 'SQLSERVER',
    TAURUS = 'TAURUS',
    DWS = 'DWS',
    MARIADB = 'MARIADB',
    GAUSSDBOPENGAUSS = 'GAUSSDBOPENGAUSS'
}
