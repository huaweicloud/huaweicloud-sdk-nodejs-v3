import { MsdtcHostResult } from './MsdtcHostResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMsdtcLocalHostResponse extends SdkResponse {
    public status?: string;
    public hosts?: Array<MsdtcHostResult>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowMsdtcLocalHostResponse {
        this['status'] = status;
        return this;
    }
    public withHosts(hosts: Array<MsdtcHostResult>): ShowMsdtcLocalHostResponse {
        this['hosts'] = hosts;
        return this;
    }
}