import { EIPSwitchStatusVO } from './EIPSwitchStatusVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeEipStatusResponse extends SdkResponse {
    public data?: EIPSwitchStatusVO;
    public constructor() { 
        super();
    }
    public withData(data: EIPSwitchStatusVO): ChangeEipStatusResponse {
        this['data'] = data;
        return this;
    }
}