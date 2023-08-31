import { HostClusterInfoDetail } from './HostClusterInfoDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHostClusterDetailResponse extends SdkResponse {
    public status?: string;
    public result?: HostClusterInfoDetail;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowHostClusterDetailResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: HostClusterInfoDetail): ShowHostClusterDetailResponse {
        this['result'] = result;
        return this;
    }
}