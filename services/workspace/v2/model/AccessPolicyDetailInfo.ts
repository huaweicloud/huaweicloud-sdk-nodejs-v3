import { AccessPolicyInfo } from './AccessPolicyInfo';
import { IpInfo } from './IpInfo';


export class AccessPolicyDetailInfo {
    private 'policy_name'?: string;
    private 'blacklist_type'?: AccessPolicyDetailInfoBlacklistTypeEnum | string;
    private 'access_control_type'?: AccessPolicyDetailInfoAccessControlTypeEnum | string;
    private 'ip_list'?: Array<IpInfo>;
    private 'ip_total_count'?: number;
    private 'policy_id'?: string;
    private 'create_time'?: string;
    public constructor() { 
    }
    public withPolicyName(policyName: string): AccessPolicyDetailInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withBlacklistType(blacklistType: AccessPolicyDetailInfoBlacklistTypeEnum | string): AccessPolicyDetailInfo {
        this['blacklist_type'] = blacklistType;
        return this;
    }
    public set blacklistType(blacklistType: AccessPolicyDetailInfoBlacklistTypeEnum | string  | undefined) {
        this['blacklist_type'] = blacklistType;
    }
    public get blacklistType(): AccessPolicyDetailInfoBlacklistTypeEnum | string | undefined {
        return this['blacklist_type'];
    }
    public withAccessControlType(accessControlType: AccessPolicyDetailInfoAccessControlTypeEnum | string): AccessPolicyDetailInfo {
        this['access_control_type'] = accessControlType;
        return this;
    }
    public set accessControlType(accessControlType: AccessPolicyDetailInfoAccessControlTypeEnum | string  | undefined) {
        this['access_control_type'] = accessControlType;
    }
    public get accessControlType(): AccessPolicyDetailInfoAccessControlTypeEnum | string | undefined {
        return this['access_control_type'];
    }
    public withIpList(ipList: Array<IpInfo>): AccessPolicyDetailInfo {
        this['ip_list'] = ipList;
        return this;
    }
    public set ipList(ipList: Array<IpInfo>  | undefined) {
        this['ip_list'] = ipList;
    }
    public get ipList(): Array<IpInfo> | undefined {
        return this['ip_list'];
    }
    public withIpTotalCount(ipTotalCount: number): AccessPolicyDetailInfo {
        this['ip_total_count'] = ipTotalCount;
        return this;
    }
    public set ipTotalCount(ipTotalCount: number  | undefined) {
        this['ip_total_count'] = ipTotalCount;
    }
    public get ipTotalCount(): number | undefined {
        return this['ip_total_count'];
    }
    public withPolicyId(policyId: string): AccessPolicyDetailInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withCreateTime(createTime: string): AccessPolicyDetailInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessPolicyDetailInfoBlacklistTypeEnum {
    INTERNET = 'INTERNET'
}
/**
    * @export
    * @enum {string}
    */
export enum AccessPolicyDetailInfoAccessControlTypeEnum {
    ACCESS_TYPE = 'ACCESS_TYPE',
    IP_WHITE_LIST = 'IP_WHITE_LIST'
}
