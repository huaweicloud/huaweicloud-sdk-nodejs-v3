import { IpInfo } from './IpInfo';


export class AccessPolicyInfo {
    private 'policy_name'?: string;
    private 'blacklist_type'?: AccessPolicyInfoBlacklistTypeEnum | string;
    private 'access_control_type'?: AccessPolicyInfoAccessControlTypeEnum | string;
    private 'ip_list'?: Array<IpInfo>;
    private 'is_enable'?: boolean;
    private 'is_block_all'?: boolean;
    private 'ip_total_count'?: number;
    public constructor() { 
    }
    public withPolicyName(policyName: string): AccessPolicyInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withBlacklistType(blacklistType: AccessPolicyInfoBlacklistTypeEnum | string): AccessPolicyInfo {
        this['blacklist_type'] = blacklistType;
        return this;
    }
    public set blacklistType(blacklistType: AccessPolicyInfoBlacklistTypeEnum | string  | undefined) {
        this['blacklist_type'] = blacklistType;
    }
    public get blacklistType(): AccessPolicyInfoBlacklistTypeEnum | string | undefined {
        return this['blacklist_type'];
    }
    public withAccessControlType(accessControlType: AccessPolicyInfoAccessControlTypeEnum | string): AccessPolicyInfo {
        this['access_control_type'] = accessControlType;
        return this;
    }
    public set accessControlType(accessControlType: AccessPolicyInfoAccessControlTypeEnum | string  | undefined) {
        this['access_control_type'] = accessControlType;
    }
    public get accessControlType(): AccessPolicyInfoAccessControlTypeEnum | string | undefined {
        return this['access_control_type'];
    }
    public withIpList(ipList: Array<IpInfo>): AccessPolicyInfo {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<IpInfo>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<IpInfo> | undefined {
        return this['ip_list'];
    }
    public withIsEnable(isEnable: boolean): AccessPolicyInfo {
        this['is_enable'] = isEnable;
        return this;
    }
    public set isEnable(isEnable: boolean  | undefined) {
        this['is_enable'] = isEnable;
    }
    public get isEnable(): boolean | undefined {
        return this['is_enable'];
    }
    public withIsBlockAll(isBlockAll: boolean): AccessPolicyInfo {
        this['is_block_all'] = isBlockAll;
        return this;
    }
    public set isBlockAll(isBlockAll: boolean  | undefined) {
        this['is_block_all'] = isBlockAll;
    }
    public get isBlockAll(): boolean | undefined {
        return this['is_block_all'];
    }
    public withIpTotalCount(ipTotalCount: number): AccessPolicyInfo {
        this['ip_total_count'] = ipTotalCount;
        return this;
    }
    public set ipTotalCount(ipTotalCount: number  | undefined) {
        this['ip_total_count'] = ipTotalCount;
    }
    public get ipTotalCount(): number | undefined {
        return this['ip_total_count'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessPolicyInfoBlacklistTypeEnum {
    INTERNET = 'INTERNET'
}
/**
    * @export
    * @enum {string}
    */
export enum AccessPolicyInfoAccessControlTypeEnum {
    ACCESS_TYPE = 'ACCESS_TYPE',
    IP_WHITE_LIST = 'IP_WHITE_LIST'
}
