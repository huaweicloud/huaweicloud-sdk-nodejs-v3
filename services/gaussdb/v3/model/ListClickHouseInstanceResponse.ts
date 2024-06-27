import { ChInstancesInfoRsponseInstance } from './ChInstancesInfoRsponseInstance';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClickHouseInstanceResponse extends SdkResponse {
    public instance?: ChInstancesInfoRsponseInstance;
    public constructor() { 
        super();
    }
    public withInstance(instance: ChInstancesInfoRsponseInstance): ListClickHouseInstanceResponse {
        this['instance'] = instance;
        return this;
    }
}