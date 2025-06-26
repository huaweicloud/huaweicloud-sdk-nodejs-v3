import { IpInfo } from './IpInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceEndpointPolicyResponse extends SdkResponse {
    public status?: ShowInstanceEndpointPolicyResponseStatusEnum | string;
    private 'ip_list'?: Array<IpInfo>;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowInstanceEndpointPolicyResponseStatusEnum | string): ShowInstanceEndpointPolicyResponse {
        this['status'] = status;
        return this;
    }
    public withIpList(ipList: Array<IpInfo>): ShowInstanceEndpointPolicyResponse {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<IpInfo>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<IpInfo> | undefined {
        return this['ip_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceEndpointPolicyResponseStatusEnum {
    ENABLING = 'Enabling',
    ENABLE = 'Enable',
    ENABLEFAILED = 'EnableFailed',
    DISABLE = 'Disable',
    DISABLING = 'Disabling',
    DISABLEFAILED = 'DisableFailed'
}
