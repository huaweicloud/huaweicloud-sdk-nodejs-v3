import { ClusterElbInfo } from './ClusterElbInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListElbsResponse extends SdkResponse {
    public elbs?: Array<ClusterElbInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withElbs(elbs: Array<ClusterElbInfo>): ListElbsResponse {
        this['elbs'] = elbs;
        return this;
    }
    public withCount(count: number): ListElbsResponse {
        this['count'] = count;
        return this;
    }
}