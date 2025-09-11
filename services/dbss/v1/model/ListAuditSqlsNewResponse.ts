import { AuditSqlResponseSqls } from './AuditSqlResponseSqls';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuditSqlsNewResponse extends SdkResponse {
    public total?: number;
    public count?: number;
    public sqls?: Array<AuditSqlResponseSqls>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAuditSqlsNewResponse {
        this['total'] = total;
        return this;
    }
    public withCount(count: number): ListAuditSqlsNewResponse {
        this['count'] = count;
        return this;
    }
    public withSqls(sqls: Array<AuditSqlResponseSqls>): ListAuditSqlsNewResponse {
        this['sqls'] = sqls;
        return this;
    }
}