import { DataBaseBean } from './DataBaseBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditDatabasesNewResponse extends SdkResponse {
    public databases?: Array<DataBaseBean>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withDatabases(databases: Array<DataBaseBean>): ListAuditDatabasesNewResponse {
        this['databases'] = databases;
        return this;
    }
    public withTotal(total: number): ListAuditDatabasesNewResponse {
        this['total'] = total;
        return this;
    }
}