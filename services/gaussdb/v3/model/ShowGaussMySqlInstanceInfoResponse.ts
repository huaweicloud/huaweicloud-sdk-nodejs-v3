import { MysqlInstanceInfoDetail } from './MysqlInstanceInfoDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGaussMySqlInstanceInfoResponse extends SdkResponse {
    public instance?: MysqlInstanceInfoDetail;
    public constructor() { 
        super();
    }
    public withInstance(instance: MysqlInstanceInfoDetail): ShowGaussMySqlInstanceInfoResponse {
        this['instance'] = instance;
        return this;
    }
}