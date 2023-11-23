import { SwitchIpGroupRequestBodyIpGroups } from './SwitchIpGroupRequestBodyIpGroups';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowElbIpGroupResponse extends SdkResponse {
    public type?: ShowElbIpGroupResponseTypeEnum | string;
    private 'ip_groups'?: Array<SwitchIpGroupRequestBodyIpGroups>;
    public enabled?: boolean;
    public constructor() { 
        super();
    }
    public withType(type: ShowElbIpGroupResponseTypeEnum | string): ShowElbIpGroupResponse {
        this['type'] = type;
        return this;
    }
    public withIpGroups(ipGroups: Array<SwitchIpGroupRequestBodyIpGroups>): ShowElbIpGroupResponse {
        this['ip_groups'] = ipGroups;
        return this;
    }
    public set ipGroups(ipGroups: Array<SwitchIpGroupRequestBodyIpGroups>  | undefined) {
        this['ip_groups'] = ipGroups;
    }
    public get ipGroups(): Array<SwitchIpGroupRequestBodyIpGroups> | undefined {
        return this['ip_groups'];
    }
    public withEnabled(enabled: boolean): ShowElbIpGroupResponse {
        this['enabled'] = enabled;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowElbIpGroupResponseTypeEnum {
    WHITELIST = 'whiteList',
    BLACKLIST = 'blackList'
}
