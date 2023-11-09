

export class TicsLeagueListVo {
    private 'bcs_channel_name'?: string;
    private 'bcs_ip'?: string;
    private 'bcs_org_name'?: string;
    private 'block_chain_id'?: string;
    private 'block_chain_name'?: string;
    private 'create_date'?: Date;
    private 'create_time'?: number;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'expire_time'?: number;
    public id?: string;
    private 'league_status'?: TicsLeagueListVoLeagueStatusEnum | string;
    public name?: string;
    public partners?: number;
    public type?: TicsLeagueListVoTypeEnum | string;
    public version?: string;
    public constructor(creatorId?: string, creatorName?: string, id?: string, leagueStatus?: string, name?: string, partners?: number, type?: string) { 
        this['creator_id'] = creatorId;
        this['creator_name'] = creatorName;
        this['id'] = id;
        this['league_status'] = leagueStatus;
        this['name'] = name;
        this['partners'] = partners;
        this['type'] = type;
    }
    public withBcsChannelName(bcsChannelName: string): TicsLeagueListVo {
        this['bcs_channel_name'] = bcsChannelName;
        return this;
    }
    public set bcsChannelName(bcsChannelName: string  | undefined) {
        this['bcs_channel_name'] = bcsChannelName;
    }
    public get bcsChannelName(): string | undefined {
        return this['bcs_channel_name'];
    }
    public withBcsIp(bcsIp: string): TicsLeagueListVo {
        this['bcs_ip'] = bcsIp;
        return this;
    }
    public set bcsIp(bcsIp: string  | undefined) {
        this['bcs_ip'] = bcsIp;
    }
    public get bcsIp(): string | undefined {
        return this['bcs_ip'];
    }
    public withBcsOrgName(bcsOrgName: string): TicsLeagueListVo {
        this['bcs_org_name'] = bcsOrgName;
        return this;
    }
    public set bcsOrgName(bcsOrgName: string  | undefined) {
        this['bcs_org_name'] = bcsOrgName;
    }
    public get bcsOrgName(): string | undefined {
        return this['bcs_org_name'];
    }
    public withBlockChainId(blockChainId: string): TicsLeagueListVo {
        this['block_chain_id'] = blockChainId;
        return this;
    }
    public set blockChainId(blockChainId: string  | undefined) {
        this['block_chain_id'] = blockChainId;
    }
    public get blockChainId(): string | undefined {
        return this['block_chain_id'];
    }
    public withBlockChainName(blockChainName: string): TicsLeagueListVo {
        this['block_chain_name'] = blockChainName;
        return this;
    }
    public set blockChainName(blockChainName: string  | undefined) {
        this['block_chain_name'] = blockChainName;
    }
    public get blockChainName(): string | undefined {
        return this['block_chain_name'];
    }
    public withCreateDate(createDate: Date): TicsLeagueListVo {
        this['create_date'] = createDate;
        return this;
    }
    public set createDate(createDate: Date  | undefined) {
        this['create_date'] = createDate;
    }
    public get createDate(): Date | undefined {
        return this['create_date'];
    }
    public withCreateTime(createTime: number): TicsLeagueListVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): TicsLeagueListVo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): TicsLeagueListVo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withExpireTime(expireTime: number): TicsLeagueListVo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withId(id: string): TicsLeagueListVo {
        this['id'] = id;
        return this;
    }
    public withLeagueStatus(leagueStatus: TicsLeagueListVoLeagueStatusEnum | string): TicsLeagueListVo {
        this['league_status'] = leagueStatus;
        return this;
    }
    public set leagueStatus(leagueStatus: TicsLeagueListVoLeagueStatusEnum | string  | undefined) {
        this['league_status'] = leagueStatus;
    }
    public get leagueStatus(): TicsLeagueListVoLeagueStatusEnum | string | undefined {
        return this['league_status'];
    }
    public withName(name: string): TicsLeagueListVo {
        this['name'] = name;
        return this;
    }
    public withPartners(partners: number): TicsLeagueListVo {
        this['partners'] = partners;
        return this;
    }
    public withType(type: TicsLeagueListVoTypeEnum | string): TicsLeagueListVo {
        this['type'] = type;
        return this;
    }
    public withVersion(version: string): TicsLeagueListVo {
        this['version'] = version;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TicsLeagueListVoLeagueStatusEnum {
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
export enum TicsLeagueListVoTypeEnum {
    OWNER = 'OWNER',
    PARTNER = 'PARTNER'
}
