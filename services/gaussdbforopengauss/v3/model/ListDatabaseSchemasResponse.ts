import { GaussDBforOpenGaussDatabaseForListSchema } from './GaussDBforOpenGaussDatabaseForListSchema';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseSchemasResponse extends SdkResponse {
    private 'database_schemas'?: Array<GaussDBforOpenGaussDatabaseForListSchema>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDatabaseSchemas(databaseSchemas: Array<GaussDBforOpenGaussDatabaseForListSchema>): ListDatabaseSchemasResponse {
        this['database_schemas'] = databaseSchemas;
        return this;
    }
    public set databaseSchemas(databaseSchemas: Array<GaussDBforOpenGaussDatabaseForListSchema>  | undefined) {
        this['database_schemas'] = databaseSchemas;
    }
    public get databaseSchemas(): Array<GaussDBforOpenGaussDatabaseForListSchema> | undefined {
        return this['database_schemas'];
    }
    public withTotalCount(totalCount: number): ListDatabaseSchemasResponse {
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