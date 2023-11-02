import { DataBaseBean } from './DataBaseBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditDatabasesResponse extends SdkResponse {
    public databases?: Array<DataBaseBean>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withDatabases(databases: Array<DataBaseBean>): ListAuditDatabasesResponse {
        this['databases'] = databases;
        return this;
    }
    public withTotal(total: number): ListAuditDatabasesResponse {
        this['total'] = total;
        return this;
    }
}