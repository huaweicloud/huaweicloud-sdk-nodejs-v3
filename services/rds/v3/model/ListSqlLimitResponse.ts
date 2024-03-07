import { SqlLimitObject } from './SqlLimitObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlLimitResponse extends SdkResponse {
    public count?: number;
    private 'sql_limit_objects'?: Array<SqlLimitObject>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListSqlLimitResponse {
        this['count'] = count;
        return this;
    }
    public withSqlLimitObjects(sqlLimitObjects: Array<SqlLimitObject>): ListSqlLimitResponse {
        this['sql_limit_objects'] = sqlLimitObjects;
        return this;
    }
    public set sqlLimitObjects(sqlLimitObjects: Array<SqlLimitObject>  | undefined) {
        this['sql_limit_objects'] = sqlLimitObjects;
    }
    public get sqlLimitObjects(): Array<SqlLimitObject> | undefined {
        return this['sql_limit_objects'];
    }
}