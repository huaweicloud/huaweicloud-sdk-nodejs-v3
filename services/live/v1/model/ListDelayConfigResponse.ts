import { DelayConfig } from './DelayConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDelayConfigResponse extends SdkResponse {
    private 'play_domain'?: string;
    private 'delay_config'?: Array<DelayConfig>;
    public constructor() { 
        super();
    }
    public withPlayDomain(playDomain: string): ListDelayConfigResponse {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string  | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain(): string | undefined {
        return this['play_domain'];
    }
    public withDelayConfig(delayConfig: Array<DelayConfig>): ListDelayConfigResponse {
        this['delay_config'] = delayConfig;
        return this;
    }
    public set delayConfig(delayConfig: Array<DelayConfig>  | undefined) {
        this['delay_config'] = delayConfig;
    }
    public get delayConfig(): Array<DelayConfig> | undefined {
        return this['delay_config'];
    }
}