import { PostgresqlDatabaseForListSchema } from './PostgresqlDatabaseForListSchema';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPostgresqlDatabaseSchemasResponse extends SdkResponse {
    private 'database_schemas'?: Array<PostgresqlDatabaseForListSchema>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDatabaseSchemas(databaseSchemas: Array<PostgresqlDatabaseForListSchema>): ListPostgresqlDatabaseSchemasResponse {
        this['database_schemas'] = databaseSchemas;
        return this;
    }
    public set databaseSchemas(databaseSchemas: Array<PostgresqlDatabaseForListSchema>  | undefined) {
        this['database_schemas'] = databaseSchemas;
    }
    public get databaseSchemas(): Array<PostgresqlDatabaseForListSchema> | undefined {
        return this['database_schemas'];
    }
    public withTotalCount(totalCount: number): ListPostgresqlDatabaseSchemasResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}