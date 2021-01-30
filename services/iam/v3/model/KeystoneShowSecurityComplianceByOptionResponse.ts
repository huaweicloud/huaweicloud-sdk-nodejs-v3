import { ConfigByOption } from './ConfigByOption';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowSecurityComplianceByOptionResponse extends SdkResponse {
    public config?: ConfigByOption;
    public constructor() { 
        super();
    }
    public withConfig(config: ConfigByOption): KeystoneShowSecurityComplianceByOptionResponse {
        this['config'] = config;
        return this;
    }
}