

export class TicsLeagueNoticeVo {
    private 'bcs_channel_name'?: string;
    private 'bcs_ip'?: string;
    private 'bcs_org_name'?: string;
    private 'block_chain_id'?: string;
    private 'block_chain_name'?: string;
    private 'create_time'?: number;
    private 'creator_name'?: string;
    public description?: string;
    private 'expire_time'?: number;
    public id?: string;
    public name?: string;
    public partners?: number;
    public constructor(creatorName?: string, id?: string, name?: string, partners?: number) { 
        this['creator_name'] = creatorName;
        this['id'] = id;
        this['name'] = name;
        this['partners'] = partners;
    }
    public withBcsChannelName(bcsChannelName: string): TicsLeagueNoticeVo {
        this['bcs_channel_name'] = bcsChannelName;
        return this;
    }
    public set bcsChannelName(bcsChannelName: string  | undefined) {
        this['bcs_channel_name'] = bcsChannelName;
    }
    public get bcsChannelName(): string | undefined {
        return this['bcs_channel_name'];
    }
    public withBcsIp(bcsIp: string): TicsLeagueNoticeVo {
        this['bcs_ip'] = bcsIp;
        return this;
    }
    public set bcsIp(bcsIp: string  | undefined) {
        this['bcs_ip'] = bcsIp;
    }
    public get bcsIp(): string | undefined {
        return this['bcs_ip'];
    }
    public withBcsOrgName(bcsOrgName: string): TicsLeagueNoticeVo {
        this['bcs_org_name'] = bcsOrgName;
        return this;
    }
    public set bcsOrgName(bcsOrgName: string  | undefined) {
        this['bcs_org_name'] = bcsOrgName;
    }
    public get bcsOrgName(): string | undefined {
        return this['bcs_org_name'];
    }
    public withBlockChainId(blockChainId: string): TicsLeagueNoticeVo {
        this['block_chain_id'] = blockChainId;
        return this;
    }
    public set blockChainId(blockChainId: string  | undefined) {
        this['block_chain_id'] = blockChainId;
    }
    public get blockChainId(): string | undefined {
        return this['block_chain_id'];
    }
    public withBlockChainName(blockChainName: string): TicsLeagueNoticeVo {
        this['block_chain_name'] = blockChainName;
        return this;
    }
    public set blockChainName(blockChainName: string  | undefined) {
        this['block_chain_name'] = blockChainName;
    }
    public get blockChainName(): string | undefined {
        return this['block_chain_name'];
    }
    public withCreateTime(createTime: number): TicsLeagueNoticeVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreatorName(creatorName: string): TicsLeagueNoticeVo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withDescription(description: string): TicsLeagueNoticeVo {
        this['description'] = description;
        return this;
    }
    public withExpireTime(expireTime: number): TicsLeagueNoticeVo {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: number  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): number | undefined {
        return this['expire_time'];
    }
    public withId(id: string): TicsLeagueNoticeVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TicsLeagueNoticeVo {
        this['name'] = name;
        return this;
    }
    public withPartners(partners: number): TicsLeagueNoticeVo {
        this['partners'] = partners;
        return this;
    }
}