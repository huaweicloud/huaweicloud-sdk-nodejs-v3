import { Whitelist } from './Whitelist';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpWhitelistResponse extends SdkResponse {
    private 'instance_id'?: string | undefined;
    private 'enable_whitelist'?: boolean | undefined;
    public whitelist?: Array<Whitelist>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowIpWhitelistResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withEnableWhitelist(enableWhitelist: boolean): ShowIpWhitelistResponse {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist() {
        return this['enable_whitelist'];
    }
    public withWhitelist(whitelist: Array<Whitelist>): ShowIpWhitelistResponse {
        this['whitelist'] = whitelist;
        return this;
    }
}