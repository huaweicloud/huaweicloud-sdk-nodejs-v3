import { MysqlEngineVersionInfo } from './MysqlEngineVersionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGaussMySqlEngineVersionResponse extends SdkResponse {
    public datastores?: Array<MysqlEngineVersionInfo>;
    public constructor() { 
        super();
    }
    public withDatastores(datastores: Array<MysqlEngineVersionInfo>): ShowGaussMySqlEngineVersionResponse {
        this['datastores'] = datastores;
        return this;
    }
}