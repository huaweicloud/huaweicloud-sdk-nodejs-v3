

export class TicsSqlJobVo {
    private 'approval_status'?: TicsSqlJobVoApprovalStatusEnum | string;
    private 'create_time'?: Date;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    public deleted?: boolean;
    public description?: string;
    private 'domain_id'?: string;
    public id?: string;
    private 'job_type'?: TicsSqlJobVoJobTypeEnum | string;
    private 'league_id'?: string;
    public name?: string;
    private 'update_time'?: Date;
    private 'update_user_id'?: string;
    private 'update_user_name'?: string;
    public constructor(createTime?: Date, creatorId?: string, creatorName?: string, deleted?: boolean, domainId?: string, id?: string, jobType?: string, leagueId?: string, name?: string) { 
        this['create_time'] = createTime;
        this['creator_id'] = creatorId;
        this['creator_name'] = creatorName;
        this['deleted'] = deleted;
        this['domain_id'] = domainId;
        this['id'] = id;
        this['job_type'] = jobType;
        this['league_id'] = leagueId;
        this['name'] = name;
    }
    public withApprovalStatus(approvalStatus: TicsSqlJobVoApprovalStatusEnum | string): TicsSqlJobVo {
        this['approval_status'] = approvalStatus;
        return this;
    }
    public set approvalStatus(approvalStatus: TicsSqlJobVoApprovalStatusEnum | string  | undefined) {
        this['approval_status'] = approvalStatus;
    }
    public get approvalStatus(): TicsSqlJobVoApprovalStatusEnum | string | undefined {
        return this['approval_status'];
    }
    public withCreateTime(createTime: Date): TicsSqlJobVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreatorId(creatorId: string): TicsSqlJobVo {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): TicsSqlJobVo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withDeleted(deleted: boolean): TicsSqlJobVo {
        this['deleted'] = deleted;
        return this;
    }
    public withDescription(description: string): TicsSqlJobVo {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): TicsSqlJobVo {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withId(id: string): TicsSqlJobVo {
        this['id'] = id;
        return this;
    }
    public withJobType(jobType: TicsSqlJobVoJobTypeEnum | string): TicsSqlJobVo {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: TicsSqlJobVoJobTypeEnum | string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): TicsSqlJobVoJobTypeEnum | string | undefined {
        return this['job_type'];
    }
    public withLeagueId(leagueId: string): TicsSqlJobVo {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
    public withName(name: string): TicsSqlJobVo {
        this['name'] = name;
        return this;
    }
    public withUpdateTime(updateTime: Date): TicsSqlJobVo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withUpdateUserId(updateUserId: string): TicsSqlJobVo {
        this['update_user_id'] = updateUserId;
        return this;
    }
    public set updateUserId(updateUserId: string  | undefined) {
        this['update_user_id'] = updateUserId;
    }
    public get updateUserId(): string | undefined {
        return this['update_user_id'];
    }
    public withUpdateUserName(updateUserName: string): TicsSqlJobVo {
        this['update_user_name'] = updateUserName;
        return this;
    }
    public set updateUserName(updateUserName: string  | undefined) {
        this['update_user_name'] = updateUserName;
    }
    public get updateUserName(): string | undefined {
        return this['update_user_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TicsSqlJobVoApprovalStatusEnum {
    APPROVED = 'APPROVED',
    APPROVING = 'APPROVING',
    NEW = 'NEW',
    REJECTED = 'REJECTED',
    REVOKED = 'REVOKED'
}
/**
    * @export
    * @enum {string}
    */
export enum TicsSqlJobVoJobTypeEnum {
    HFL = 'HFL',
    PREDICT = 'PREDICT',
    SQL = 'SQL',
    VFL = 'VFL',
    DATA_EXCHANGE = 'DATA_EXCHANGE'
}
