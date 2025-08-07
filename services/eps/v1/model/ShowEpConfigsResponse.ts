import { EnterpriseProjectConfig } from './EnterpriseProjectConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEpConfigsResponse extends SdkResponse {
    private 'support_item'?: EnterpriseProjectConfig;
    public constructor() { 
        super();
    }
    public withSupportItem(supportItem: EnterpriseProjectConfig): ShowEpConfigsResponse {
        this['support_item'] = supportItem;
        return this;
    }
    public set supportItem(supportItem: EnterpriseProjectConfig  | undefined) {
        this['support_item'] = supportItem;
    }
    public get supportItem(): EnterpriseProjectConfig | undefined {
        return this['support_item'];
    }
}