import { GetDatabaseInfo } from './GetDatabaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabasesResponse extends SdkResponse {
    public databases?: Array<GetDatabaseInfo>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withDatabases(databases: Array<GetDatabaseInfo>): ListDatabasesResponse {
        this['databases'] = databases;
        return this;
    }
    public withTotal(total: number): ListDatabasesResponse {
        this['total'] = total;
        return this;
    }
}