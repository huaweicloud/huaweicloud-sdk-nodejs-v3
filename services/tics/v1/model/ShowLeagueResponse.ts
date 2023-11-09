
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLeagueResponse extends SdkResponse {
    private 'bcs_channel_name'?: string;
    private 'bcs_ip'?: string;
    private 'bcs_org_name'?: string;
    private 'block_chain_id'?: string;
    private 'block_chain_name'?: string;
    private 'create_date'?: Date;
    private 'create_time'?: number;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    public description?: string;
    private 'dp_enabled'?: boolean;
    private 'expire_time'?: number;
    public id?: string;
    private 'is_access_control'?: boolean;
    private 'is_need_approval'?: boolean;
    private 'league_status'?: ShowLeagueResponseLeagueStatusEnum | string;
    public name?: string;
    public partners?: number;
    private 'privacy_protection_type'?: ShowLeagueResponsePrivacyProtectionTypeEnum | string;
    private 'resource_spec_code'?: string;
    public type?: ShowLeagueResponseTypeEnum | string;
    public version?: string;
    public constructor() { 
        super();
    }
    public withBcsChannelName(bcsChannelName: string): ShowLeagueResponse {
        this['bcs_channel_name'] = bcsChannelName;
        return this;
    }
    public set bcsChannelName(bcsChannelName: string  | undefined) {
        this['bcs_channel_name'] = bcsChannelName;
    }
    public get bcsChannelName(): string | undefined {
        return this['bcs_channel_name'];
    }
    public withBcsIp(bcsIp: string): ShowLeagueResponse {
        this['bcs_ip'] = bcsIp;
        return this;
    }
    public set bcsIp(bcsIp: string  | undefined) {
        this['bcs_ip'] = bcsIp;
    }
    public get bcsIp(): string | undefined {
        return this['bcs_ip'];
    }
    public withBcsOrgName(bcsOrgName: string): ShowLeagueResponse {
        this['bcs_org_name'] = bcsOrgName;
        return this;
    }
    public set bcsOrgName(bcsOrgName: string  | undefined) {
        this['bcs_org_name'] = bcsOrgName;
    }
    public get bcsOrgName(): string | undefined {
        return this['bcs_org_name'];
    }
    public withBlockChainId(blockChainId: string): ShowLeagueResponse {
        this['block_chain_id'] = blockChainId;
        return this;
    }
    public set blockChainId(blockChainId: string  | undefined) {
        this['block_chain_id'] = blockChainId;
    }
    public get blockChainId(): string | undefined {
        return this['block_chain_id'];
    }
    public withBlockChainName(blockChainName: string): ShowLeagueResponse {
        this['block_chain_name'] = blockChainName;
        return this;
    }
    public set blockChainName(blockChainName: string  | undefined) {
        this['block_chain_name'] = blockChainName;
    }
    public get blockChainName(): string | undefined {
        return this['block_chain_name'];
    }
    public withCreateDate(createDate: Date): ShowLeagueResponse {
        this['create_date'] = createDate;
        return this;
    }
    public set createDate(createDate: Date  | undefined) {
        this['create_date'] = createDate;
    }
    public get createDate(): Date | undefined {
        return this['create_date'];
    }
    public withCreateTime(createTime: number): ShowLeagueResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): ShowLeagueResponse {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): ShowLeagueResponse {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withDescription(description: string): ShowLeagueResponse {
        this['description'] = description;
        return this;
    }
    public withDpEnabled(dpEnabled: boolean): ShowLeagueResponse {
        this['dp_enabled'] = dpEnabled;
        return this;
    }
    public set dpEnabled(dpEnabled: boolean  | undefined) {
        this['dp_enabled'] = dpEnabled;
    }
    public get dpEnabled(): boolean | undefined {
        return this['dp_enabled'];
    }
    public withExpireTime(expireTime: number): ShowLeagueResponse {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withId(id: string): ShowLeagueResponse {
        this['id'] = id;
        return this;
    }
    public withIsAccessControl(isAccessControl: boolean): ShowLeagueResponse {
        this['is_access_control'] = isAccessControl;
        return this;
    }
    public set isAccessControl(isAccessControl: boolean  | undefined) {
        this['is_access_control'] = isAccessControl;
    }
    public get isAccessControl(): boolean | undefined {
        return this['is_access_control'];
    }
    public withIsNeedApproval(isNeedApproval: boolean): ShowLeagueResponse {
        this['is_need_approval'] = isNeedApproval;
        return this;
    }
    public set isNeedApproval(isNeedApproval: boolean  | undefined) {
        this['is_need_approval'] = isNeedApproval;
    }
    public get isNeedApproval(): boolean | undefined {
        return this['is_need_approval'];
    }
    public withLeagueStatus(leagueStatus: ShowLeagueResponseLeagueStatusEnum | string): ShowLeagueResponse {
        this['league_status'] = leagueStatus;
        return this;
    }
    public set leagueStatus(leagueStatus: ShowLeagueResponseLeagueStatusEnum | string  | undefined) {
        this['league_status'] = leagueStatus;
    }
    public get leagueStatus(): ShowLeagueResponseLeagueStatusEnum | string | undefined {
        return this['league_status'];
    }
    public withName(name: string): ShowLeagueResponse {
        this['name'] = name;
        return this;
    }
    public withPartners(partners: number): ShowLeagueResponse {
        this['partners'] = partners;
        return this;
    }
    public withPrivacyProtectionType(privacyProtectionType: ShowLeagueResponsePrivacyProtectionTypeEnum | string): ShowLeagueResponse {
        this['privacy_protection_type'] = privacyProtectionType;
        return this;
    }
    public set privacyProtectionType(privacyProtectionType: ShowLeagueResponsePrivacyProtectionTypeEnum | string  | undefined) {
        this['privacy_protection_type'] = privacyProtectionType;
    }
    public get privacyProtectionType(): ShowLeagueResponsePrivacyProtectionTypeEnum | string | undefined {
        return this['privacy_protection_type'];
    }
    public withResourceSpecCode(resourceSpecCode: string): ShowLeagueResponse {
        this['resource_spec_code'] = resourceSpecCode;
        return this;
    }
    public set resourceSpecCode(resourceSpecCode: string  | undefined) {
        this['resource_spec_code'] = resourceSpecCode;
    }
    public get resourceSpecCode(): string | undefined {
        return this['resource_spec_code'];
    }
    public withType(type: ShowLeagueResponseTypeEnum | string): ShowLeagueResponse {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): ShowLeagueResponse {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowLeagueResponseLeagueStatusEnum {
    CREATE_FAILED = 'CREATE_FAILED',
    CREATING = 'CREATING',
    DELETED = 'DELETED',
    DELETE_FAILED = 'DELETE_FAILED',
    DELETING = 'DELETING',
    NORMAL = 'NORMAL',
    ROLLING = 'ROLLING',
    ROLL_FAILED = 'ROLL_FAILED',
    UPDATE_FAILED = 'UPDATE_FAILED',
    UPDATING = 'UPDATING'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowLeagueResponsePrivacyProtectionTypeEnum {
    HIGH = 'HIGH',
    STANDARD = 'STANDARD'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowLeagueResponseTypeEnum {
    OWNER = 'OWNER',
    PARTNER = 'PARTNER'
}
