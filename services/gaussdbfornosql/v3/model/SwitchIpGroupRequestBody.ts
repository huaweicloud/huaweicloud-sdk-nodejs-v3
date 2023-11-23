import { SwitchIpGroupRequestBodyIpGroups } from './SwitchIpGroupRequestBodyIpGroups';


export class SwitchIpGroupRequestBody {
    public type?: SwitchIpGroupRequestBodyTypeEnum | string;
    public enabled?: boolean;
    private 'ip_groups'?: Array<SwitchIpGroupRequestBodyIpGroups>;
    public constructor(type?: string, enabled?: boolean, ipGroups?: Array<SwitchIpGroupRequestBodyIpGroups>) { 
        this['type'] = type;
        this['enabled'] = enabled;
        this['ip_groups'] = ipGroups;
    }
    public withType(type: SwitchIpGroupRequestBodyTypeEnum | string): SwitchIpGroupRequestBody {
        this['type'] = type;
        return this;
    }
    public withEnabled(enabled: boolean): SwitchIpGroupRequestBody {
        this['enabled'] = enabled;
        return this;
    }
    public withIpGroups(ipGroups: Array<SwitchIpGroupRequestBodyIpGroups>): SwitchIpGroupRequestBody {
        this['ip_groups'] = ipGroups;
        return this;
    }
    public set ipGroups(ipGroups: Array<SwitchIpGroupRequestBodyIpGroups>  | undefined) {
        this['ip_groups'] = ipGroups;
    }
    public get ipGroups(): Array<SwitchIpGroupRequestBodyIpGroups> | undefined {
        return this['ip_groups'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SwitchIpGroupRequestBodyTypeEnum {
    WHITELIST = 'whiteList',
    BLACKLIST = 'blackList'
}
