import { Page } from './Page';
import { ProtocolConfigBase } from './ProtocolConfigBase';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProtocolConfigsResponse extends SdkResponse {
    private 'protocol_configs'?: Array<ProtocolConfigBase>;
    public page?: Page;
    public constructor() { 
        super();
    }
    public withProtocolConfigs(protocolConfigs: Array<ProtocolConfigBase>): ListProtocolConfigsResponse {
        this['protocol_configs'] = protocolConfigs;
        return this;
    }
    public set protocolConfigs(protocolConfigs: Array<ProtocolConfigBase>  | undefined) {
        this['protocol_configs'] = protocolConfigs;
    }
    public get protocolConfigs(): Array<ProtocolConfigBase> | undefined {
        return this['protocol_configs'];
    }
    public withPage(page: Page): ListProtocolConfigsResponse {
        this['page'] = page;
        return this;
    }
}