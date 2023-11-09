

export class AgentListVo {
    private 'agent_id'?: string;
    private 'agent_name'?: string;
    private 'create_time'?: Date;
    private 'creator_domain_id'?: string;
    private 'creator_user_name'?: string;
    private 'deploy_status'?: AgentListVoDeployStatusEnum | string;
    private 'deploy_type'?: AgentListVoDeployTypeEnum | string;
    private 'deployment_event_information'?: string;
    private 'enable_delete'?: boolean;
    private 'enable_upgrade'?: boolean;
    private 'image_version'?: string;
    private 'is_high_avail'?: boolean;
    private 'league_id'?: string;
    private 'league_name'?: string;
    private 'league_version'?: string;
    public constructor() { 
    }
    public withAgentId(agentId: string): AgentListVo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentName(agentName: string): AgentListVo {
        this['agent_name'] = agentName;
        return this;
    }
    public set agentName(agentName: string  | undefined) {
        this['agent_name'] = agentName;
    }
    public get agentName(): string | undefined {
        return this['agent_name'];
    }
    public withCreateTime(createTime: Date): AgentListVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreatorDomainId(creatorDomainId: string): AgentListVo {
        this['creator_domain_id'] = creatorDomainId;
        return this;
    }
    public set creatorDomainId(creatorDomainId: string  | undefined) {
        this['creator_domain_id'] = creatorDomainId;
    }
    public get creatorDomainId(): string | undefined {
        return this['creator_domain_id'];
    }
    public withCreatorUserName(creatorUserName: string): AgentListVo {
        this['creator_user_name'] = creatorUserName;
        return this;
    }
    public set creatorUserName(creatorUserName: string  | undefined) {
        this['creator_user_name'] = creatorUserName;
    }
    public get creatorUserName(): string | undefined {
        return this['creator_user_name'];
    }
    public withDeployStatus(deployStatus: AgentListVoDeployStatusEnum | string): AgentListVo {
        this['deploy_status'] = deployStatus;
        return this;
    }
    public set deployStatus(deployStatus: AgentListVoDeployStatusEnum | string  | undefined) {
        this['deploy_status'] = deployStatus;
    }
    public get deployStatus(): AgentListVoDeployStatusEnum | string | undefined {
        return this['deploy_status'];
    }
    public withDeployType(deployType: AgentListVoDeployTypeEnum | string): AgentListVo {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: AgentListVoDeployTypeEnum | string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): AgentListVoDeployTypeEnum | string | undefined {
        return this['deploy_type'];
    }
    public withDeploymentEventInformation(deploymentEventInformation: string): AgentListVo {
        this['deployment_event_information'] = deploymentEventInformation;
        return this;
    }
    public set deploymentEventInformation(deploymentEventInformation: string  | undefined) {
        this['deployment_event_information'] = deploymentEventInformation;
    }
    public get deploymentEventInformation(): string | undefined {
        return this['deployment_event_information'];
    }
    public withEnableDelete(enableDelete: boolean): AgentListVo {
        this['enable_delete'] = enableDelete;
        return this;
    }
    public set enableDelete(enableDelete: boolean  | undefined) {
        this['enable_delete'] = enableDelete;
    }
    public get enableDelete(): boolean | undefined {
        return this['enable_delete'];
    }
    public withEnableUpgrade(enableUpgrade: boolean): AgentListVo {
        this['enable_upgrade'] = enableUpgrade;
        return this;
    }
    public set enableUpgrade(enableUpgrade: boolean  | undefined) {
        this['enable_upgrade'] = enableUpgrade;
    }
    public get enableUpgrade(): boolean | undefined {
        return this['enable_upgrade'];
    }
    public withImageVersion(imageVersion: string): AgentListVo {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withIsHighAvail(isHighAvail: boolean): AgentListVo {
        this['is_high_avail'] = isHighAvail;
        return this;
    }
    public set isHighAvail(isHighAvail: boolean  | undefined) {
        this['is_high_avail'] = isHighAvail;
    }
    public get isHighAvail(): boolean | undefined {
        return this['is_high_avail'];
    }
    public withLeagueId(leagueId: string): AgentListVo {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
    public withLeagueName(leagueName: string): AgentListVo {
        this['league_name'] = leagueName;
        return this;
    }
    public set leagueName(leagueName: string  | undefined) {
        this['league_name'] = leagueName;
    }
    public get leagueName(): string | undefined {
        return this['league_name'];
    }
    public withLeagueVersion(leagueVersion: string): AgentListVo {
        this['league_version'] = leagueVersion;
        return this;
    }
    public set leagueVersion(leagueVersion: string  | undefined) {
        this['league_version'] = leagueVersion;
    }
    public get leagueVersion(): string | undefined {
        return this['league_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AgentListVoDeployStatusEnum {
    ABNORMAL = 'ABNORMAL',
    DELETE_FAILED = 'DELETE_FAILED',
    DELETE_SUCCESS = 'DELETE_SUCCESS',
    DELETING = 'DELETING',
    DEPLOYING = 'DEPLOYING',
    DEPLOY_FAILED = 'DEPLOY_FAILED',
    DEPLOY_SUCCESS = 'DEPLOY_SUCCESS',
    FAILED = 'FAILED',
    IN_PROGRESS = 'IN_PROGRESS',
    RESTARTING = 'RESTARTING',
    RESTART_FAILED = 'RESTART_FAILED',
    ROLLBACK = 'ROLLBACK',
    ROLLBACKING = 'ROLLBACKING',
    ROLLBACK_FAILED = 'ROLLBACK_FAILED',
    RUNNING = 'RUNNING',
    STARTING = 'STARTING',
    SUCCESS = 'SUCCESS',
    TO_START = 'TO_START',
    UPGRADE_FAILED = 'UPGRADE_FAILED',
    UPGRADING = 'UPGRADING'
}
/**
    * @export
    * @enum {string}
    */
export enum AgentListVoDeployTypeEnum {
    CCE = 'CCE',
    EXTERNAL = 'EXTERNAL',
    IEF = 'IEF'
}
