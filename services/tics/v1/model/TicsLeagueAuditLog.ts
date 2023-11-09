

export class TicsLeagueAuditLog {
    private 'create_user_domain_id'?: string;
    private 'create_user_project_id'?: string;
    private 'creator_alias_name'?: string;
    private 'event_end_time'?: Date;
    private 'event_info'?: string;
    private 'event_start_time'?: Date;
    private 'event_status'?: TicsLeagueAuditLogEventStatusEnum | string;
    public id?: number;
    private 'league_id'?: string;
    private 'sponsor_agent_name'?: string;
    public constructor() { 
    }
    public withCreateUserDomainId(createUserDomainId: string): TicsLeagueAuditLog {
        this['create_user_domain_id'] = createUserDomainId;
        return this;
    }
    public set createUserDomainId(createUserDomainId: string  | undefined) {
        this['create_user_domain_id'] = createUserDomainId;
    }
    public get createUserDomainId(): string | undefined {
        return this['create_user_domain_id'];
    }
    public withCreateUserProjectId(createUserProjectId: string): TicsLeagueAuditLog {
        this['create_user_project_id'] = createUserProjectId;
        return this;
    }
    public set createUserProjectId(createUserProjectId: string  | undefined) {
        this['create_user_project_id'] = createUserProjectId;
    }
    public get createUserProjectId(): string | undefined {
        return this['create_user_project_id'];
    }
    public withCreatorAliasName(creatorAliasName: string): TicsLeagueAuditLog {
        this['creator_alias_name'] = creatorAliasName;
        return this;
    }
    public set creatorAliasName(creatorAliasName: string  | undefined) {
        this['creator_alias_name'] = creatorAliasName;
    }
    public get creatorAliasName(): string | undefined {
        return this['creator_alias_name'];
    }
    public withEventEndTime(eventEndTime: Date): TicsLeagueAuditLog {
        this['event_end_time'] = eventEndTime;
        return this;
    }
    public set eventEndTime(eventEndTime: Date  | undefined) {
        this['event_end_time'] = eventEndTime;
    }
    public get eventEndTime(): Date | undefined {
        return this['event_end_time'];
    }
    public withEventInfo(eventInfo: string): TicsLeagueAuditLog {
        this['event_info'] = eventInfo;
        return this;
    }
    public set eventInfo(eventInfo: string  | undefined) {
        this['event_info'] = eventInfo;
    }
    public get eventInfo(): string | undefined {
        return this['event_info'];
    }
    public withEventStartTime(eventStartTime: Date): TicsLeagueAuditLog {
        this['event_start_time'] = eventStartTime;
        return this;
    }
    public set eventStartTime(eventStartTime: Date  | undefined) {
        this['event_start_time'] = eventStartTime;
    }
    public get eventStartTime(): Date | undefined {
        return this['event_start_time'];
    }
    public withEventStatus(eventStatus: TicsLeagueAuditLogEventStatusEnum | string): TicsLeagueAuditLog {
        this['event_status'] = eventStatus;
        return this;
    }
    public set eventStatus(eventStatus: TicsLeagueAuditLogEventStatusEnum | string  | undefined) {
        this['event_status'] = eventStatus;
    }
    public get eventStatus(): TicsLeagueAuditLogEventStatusEnum | string | undefined {
        return this['event_status'];
    }
    public withId(id: number): TicsLeagueAuditLog {
        this['id'] = id;
        return this;
    }
    public withLeagueId(leagueId: string): TicsLeagueAuditLog {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
    public withSponsorAgentName(sponsorAgentName: string): TicsLeagueAuditLog {
        this['sponsor_agent_name'] = sponsorAgentName;
        return this;
    }
    public set sponsorAgentName(sponsorAgentName: string  | undefined) {
        this['sponsor_agent_name'] = sponsorAgentName;
    }
    public get sponsorAgentName(): string | undefined {
        return this['sponsor_agent_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TicsLeagueAuditLogEventStatusEnum {
    ACCEPTED = 'ACCEPTED',
    DEPLOYING = 'DEPLOYING',
    FAILED = 'FAILED',
    NEW = 'NEW',
    PENDING = 'PENDING',
    RUNNING = 'RUNNING',
    SUBMITING = 'SUBMITING',
    SUCCEEDED = 'SUCCEEDED',
    TERMINATED = 'TERMINATED',
    TERMINATING = 'TERMINATING'
}
