import { PostgresqlHbaHistory } from './PostgresqlHbaHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPostgresqlHbaInfoHistoryResponse extends SdkResponse {
    public body?: Array<PostgresqlHbaHistory>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PostgresqlHbaHistory>): ListPostgresqlHbaInfoHistoryResponse {
        this['body'] = body;
        return this;
    }
}