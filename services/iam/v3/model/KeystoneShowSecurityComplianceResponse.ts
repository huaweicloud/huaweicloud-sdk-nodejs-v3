import { Config } from './Config';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowSecurityComplianceResponse extends SdkResponse {
    public config?: Config;
    public constructor() { 
        super();
    }
    public withConfig(config: Config): KeystoneShowSecurityComplianceResponse {
        this['config'] = config;
        return this;
    }
}