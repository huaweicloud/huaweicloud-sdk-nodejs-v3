import { TicsLeagueNoticeVo } from './TicsLeagueNoticeVo';
import { TicsLeaguePartnerVo } from './TicsLeaguePartnerVo';


export class TicsApproveLogVo {
    private 'create_time'?: Date;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'domain_alias'?: string;
    private 'domain_name'?: string;
    public league?: TicsLeagueNoticeVo;
    private 'league_id'?: string;
    private 'league_name'?: string;
    private 'partner_id'?: string;
    private 'partner_status'?: TicsApproveLogVoPartnerStatusEnum | string;
    public partners?: Array<TicsLeaguePartnerVo>;
    private 'update_id'?: string;
    private 'update_name'?: string;
    private 'update_time'?: Date;
    public constructor() { 
    }
    public withCreateTime(createTime: Date): TicsApproveLogVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): TicsApproveLogVo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): TicsApproveLogVo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withDomainAlias(domainAlias: string): TicsApproveLogVo {
        this['domain_alias'] = domainAlias;
        return this;
    }
    public set domainAlias(domainAlias: string  | undefined) {
        this['domain_alias'] = domainAlias;
    }
    public get domainAlias(): string | undefined {
        return this['domain_alias'];
    }
    public withDomainName(domainName: string): TicsApproveLogVo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withLeague(league: TicsLeagueNoticeVo): TicsApproveLogVo {
        this['league'] = league;
        return this;
    }
    public withLeagueId(leagueId: string): TicsApproveLogVo {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
    public withLeagueName(leagueName: string): TicsApproveLogVo {
        this['league_name'] = leagueName;
        return this;
    }
    public set leagueName(leagueName: string  | undefined) {
        this['league_name'] = leagueName;
    }
    public get leagueName(): string | undefined {
        return this['league_name'];
    }
    public withPartnerId(partnerId: string): TicsApproveLogVo {
        this['partner_id'] = partnerId;
        return this;
    }
    public set partnerId(partnerId: string  | undefined) {
        this['partner_id'] = partnerId;
    }
    public get partnerId(): string | undefined {
        return this['partner_id'];
    }
    public withPartnerStatus(partnerStatus: TicsApproveLogVoPartnerStatusEnum | string): TicsApproveLogVo {
        this['partner_status'] = partnerStatus;
        return this;
    }
    public set partnerStatus(partnerStatus: TicsApproveLogVoPartnerStatusEnum | string  | undefined) {
        this['partner_status'] = partnerStatus;
    }
    public get partnerStatus(): TicsApproveLogVoPartnerStatusEnum | string | undefined {
        return this['partner_status'];
    }
    public withPartners(partners: Array<TicsLeaguePartnerVo>): TicsApproveLogVo {
        this['partners'] = partners;
        return this;
    }
    public withUpdateId(updateId: string): TicsApproveLogVo {
        this['update_id'] = updateId;
        return this;
    }
    public set updateId(updateId: string  | undefined) {
        this['update_id'] = updateId;
    }
    public get updateId(): string | undefined {
        return this['update_id'];
    }
    public withUpdateName(updateName: string): TicsApproveLogVo {
        this['update_name'] = updateName;
        return this;
    }
    public set updateName(updateName: string  | undefined) {
        this['update_name'] = updateName;
    }
    public get updateName(): string | undefined {
        return this['update_name'];
    }
    public withUpdateTime(updateTime: Date): TicsApproveLogVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TicsApproveLogVoPartnerStatusEnum {
    JOINED = 'JOINED',
    JOIN_PENDING_APPROVAL = 'JOIN_PENDING_APPROVAL',
    JOIN_REJECTED = 'JOIN_REJECTED',
    QUIT = 'QUIT'
}
