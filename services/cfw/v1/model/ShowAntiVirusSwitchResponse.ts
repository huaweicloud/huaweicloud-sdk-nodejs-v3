import { AntiVirusVO } from './AntiVirusVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAntiVirusSwitchResponse extends SdkResponse {
    public data?: AntiVirusVO;
    public constructor() { 
        super();
    }
    public withData(data: AntiVirusVO): ShowAntiVirusSwitchResponse {
        this['data'] = data;
        return this;
    }
}