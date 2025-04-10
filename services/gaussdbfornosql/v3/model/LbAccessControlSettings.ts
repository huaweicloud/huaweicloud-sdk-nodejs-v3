import { IpGroupsDetail } from './IpGroupsDetail';


export class LbAccessControlSettings {
    public enabled?: boolean;
    public type?: LbAccessControlSettingsTypeEnum | string;
    private 'ip_groups'?: Array<IpGroupsDetail>;
    public constructor(enabled?: boolean, type?: string, ipGroups?: Array<IpGroupsDetail>) { 
        this['enabled'] = enabled;
        this['type'] = type;
        this['ip_groups'] = ipGroups;
    }
    public withEnabled(enabled: boolean): LbAccessControlSettings {
        this['enabled'] = enabled;
        return this;
    }
    public withType(type: LbAccessControlSettingsTypeEnum | string): LbAccessControlSettings {
        this['type'] = type;
        return this;
    }
    public withIpGroups(ipGroups: Array<IpGroupsDetail>): LbAccessControlSettings {
        this['ip_groups'] = ipGroups;
        return this;
    }
    public set ipGroups(ipGroups: Array<IpGroupsDetail>  | undefined) {
        this['ip_groups'] = ipGroups;
    }
    public get ipGroups(): Array<IpGroupsDetail> | undefined {
        return this['ip_groups'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum LbAccessControlSettingsTypeEnum {
    BLACKLIST = 'blackList',
    WHITELIST = 'whiteList'
}
