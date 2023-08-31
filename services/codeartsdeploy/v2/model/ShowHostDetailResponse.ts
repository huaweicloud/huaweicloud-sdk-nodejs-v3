import { HostInfoDetail } from './HostInfoDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHostDetailResponse extends SdkResponse {
    public status?: string;
    public result?: HostInfoDetail;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowHostDetailResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: HostInfoDetail): ShowHostDetailResponse {
        this['result'] = result;
        return this;
    }
}