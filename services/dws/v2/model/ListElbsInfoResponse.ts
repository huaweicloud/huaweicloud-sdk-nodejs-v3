import { ClusterElbInfo } from './ClusterElbInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListElbsInfoResponse extends SdkResponse {
    public elbs?: Array<ClusterElbInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withElbs(elbs: Array<ClusterElbInfo>): ListElbsInfoResponse {
        this['elbs'] = elbs;
        return this;
    }
    public withCount(count: number): ListElbsInfoResponse {
        this['count'] = count;
        return this;
    }
}