import { AuditSqlResponseSqls } from './AuditSqlResponseSqls';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditSqlsResponse extends SdkResponse {
    public total?: number;
    public count?: number;
    public sqls?: Array<AuditSqlResponseSqls>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAuditSqlsResponse {
        this['total'] = total;
        return this;
    }
    public withCount(count: number): ListAuditSqlsResponse {
        this['count'] = count;
        return this;
    }
    public withSqls(sqls: Array<AuditSqlResponseSqls>): ListAuditSqlsResponse {
        this['sqls'] = sqls;
        return this;
    }
}