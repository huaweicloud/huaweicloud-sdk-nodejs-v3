import { GetDatabaseResponseBean } from './GetDatabaseResponseBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDatabaseResponse extends SdkResponse {
    public database?: GetDatabaseResponseBean;
    public constructor() { 
        super();
    }
    public withDatabase(database: GetDatabaseResponseBean): ShowDatabaseResponse {
        this['database'] = database;
        return this;
    }
}