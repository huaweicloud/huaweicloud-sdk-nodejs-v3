import { MysqlInstanceInfoDetail } from './MysqlInstanceInfoDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListGaussMySqlInstanceDetailInfoResponse extends SdkResponse {
    public instances?: Array<MysqlInstanceInfoDetail>;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<MysqlInstanceInfoDetail>): ListGaussMySqlInstanceDetailInfoResponse {
        this['instances'] = instances;
        return this;
    }
}