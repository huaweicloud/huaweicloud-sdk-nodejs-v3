import { PostgresqlHbaConf } from './PostgresqlHbaConf';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPostgresqlHbaInfoResponse extends SdkResponse {
    public body?: Array<PostgresqlHbaConf>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<PostgresqlHbaConf>): ListPostgresqlHbaInfoResponse {
        this['body'] = body;
        return this;
    }
}