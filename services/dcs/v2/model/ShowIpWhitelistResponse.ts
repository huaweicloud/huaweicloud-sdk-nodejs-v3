import { Whitelist } from './Whitelist';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpWhitelistResponse extends SdkResponse {
    private 'instance_id'?: string;
    private 'enable_whitelist'?: boolean;
    public whitelist?: Array<Whitelist>;
    public constructor() { 
        super();
    }
    public withInstanceId(instanceId: string): ShowIpWhitelistResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withEnableWhitelist(enableWhitelist: boolean): ShowIpWhitelistResponse {
        this['enable_whitelist'] = enableWhitelist;
        return this;
    }
    public set enableWhitelist(enableWhitelist: boolean  | undefined) {
        this['enable_whitelist'] = enableWhitelist;
    }
    public get enableWhitelist(): boolean | undefined {
        return this['enable_whitelist'];
    }
    public withWhitelist(whitelist: Array<Whitelist>): ShowIpWhitelistResponse {
        this['whitelist'] = whitelist;
        return this;
    }
}