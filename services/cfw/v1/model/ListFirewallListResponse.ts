import { HttpFirewallInstanceListResponseData } from './HttpFirewallInstanceListResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFirewallListResponse extends SdkResponse {
    private 'user_support_eps'?: boolean;
    public data?: HttpFirewallInstanceListResponseData;
    public constructor() { 
        super();
    }
    public withUserSupportEps(userSupportEps: boolean): ListFirewallListResponse {
        this['user_support_eps'] = userSupportEps;
        return this;
    }
    public set userSupportEps(userSupportEps: boolean  | undefined) {
        this['user_support_eps'] = userSupportEps;
    }
    public get userSupportEps(): boolean | undefined {
        return this['user_support_eps'];
    }
    public withData(data: HttpFirewallInstanceListResponseData): ListFirewallListResponse {
        this['data'] = data;
        return this;
    }
}