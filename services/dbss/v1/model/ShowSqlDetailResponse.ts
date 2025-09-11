import { SqlDetailBean } from './SqlDetailBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlDetailResponse extends SdkResponse {
    public sql?: SqlDetailBean;
    public constructor() { 
        super();
    }
    public withSql(sql: SqlDetailBean): ShowSqlDetailResponse {
        this['sql'] = sql;
        return this;
    }
}