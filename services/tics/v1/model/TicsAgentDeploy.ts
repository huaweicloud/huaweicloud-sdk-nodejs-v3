

export class TicsAgentDeploy {
    private 'agent_id'?: string;
    private 'agent_name'?: string;
    private 'aom_flag'?: string;
    private 'bcs_flag'?: string;
    private 'cce_version'?: string;
    private 'create_time'?: Date;
    private 'creator_domain_id'?: string;
    private 'creator_id'?: string;
    private 'creator_name'?: string;
    private 'creator_project_id'?: string;
    private 'deploy_status'?: TicsAgentDeployDeployStatusEnum | string;
    private 'deploy_type'?: TicsAgentDeployDeployTypeEnum | string;
    private 'deployment_event_information'?: string;
    private 'high_avail'?: string;
    private 'image_id'?: string;
    private 'image_version'?: string;
    private 'league_id'?: string;
    private 'league_name'?: string;
    private 'league_region_name'?: string;
    private 'league_version'?: string;
    private 'nat_id'?: string;
    private 'storage_mount_type'?: TicsAgentDeployStorageMountTypeEnum | string;
    public constructor() { 
    }
    public withAgentId(agentId: string): TicsAgentDeploy {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withAgentName(agentName: string): TicsAgentDeploy {
        this['agent_name'] = agentName;
        return this;
    }
    public set agentName(agentName: string  | undefined) {
        this['agent_name'] = agentName;
    }
    public get agentName(): string | undefined {
        return this['agent_name'];
    }
    public withAomFlag(aomFlag: string): TicsAgentDeploy {
        this['aom_flag'] = aomFlag;
        return this;
    }
    public set aomFlag(aomFlag: string  | undefined) {
        this['aom_flag'] = aomFlag;
    }
    public get aomFlag(): string | undefined {
        return this['aom_flag'];
    }
    public withBcsFlag(bcsFlag: string): TicsAgentDeploy {
        this['bcs_flag'] = bcsFlag;
        return this;
    }
    public set bcsFlag(bcsFlag: string  | undefined) {
        this['bcs_flag'] = bcsFlag;
    }
    public get bcsFlag(): string | undefined {
        return this['bcs_flag'];
    }
    public withCceVersion(cceVersion: string): TicsAgentDeploy {
        this['cce_version'] = cceVersion;
        return this;
    }
    public set cceVersion(cceVersion: string  | undefined) {
        this['cce_version'] = cceVersion;
    }
    public get cceVersion(): string | undefined {
        return this['cce_version'];
    }
    public withCreateTime(createTime: Date): TicsAgentDeploy {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withCreatorDomainId(creatorDomainId: string): TicsAgentDeploy {
        this['creator_domain_id'] = creatorDomainId;
        return this;
    }
    public set creatorDomainId(creatorDomainId: string  | undefined) {
        this['creator_domain_id'] = creatorDomainId;
    }
    public get creatorDomainId(): string | undefined {
        return this['creator_domain_id'];
    }
    public withCreatorId(creatorId: string): TicsAgentDeploy {
        this['creator_id'] = creatorId;
        return this;
    }
    public set creatorId(creatorId: string  | undefined) {
        this['creator_id'] = creatorId;
    }
    public get creatorId(): string | undefined {
        return this['creator_id'];
    }
    public withCreatorName(creatorName: string): TicsAgentDeploy {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreatorProjectId(creatorProjectId: string): TicsAgentDeploy {
        this['creator_project_id'] = creatorProjectId;
        return this;
    }
    public set creatorProjectId(creatorProjectId: string  | undefined) {
        this['creator_project_id'] = creatorProjectId;
    }
    public get creatorProjectId(): string | undefined {
        return this['creator_project_id'];
    }
    public withDeployStatus(deployStatus: TicsAgentDeployDeployStatusEnum | string): TicsAgentDeploy {
        this['deploy_status'] = deployStatus;
        return this;
    }
    public set deployStatus(deployStatus: TicsAgentDeployDeployStatusEnum | string  | undefined) {
        this['deploy_status'] = deployStatus;
    }
    public get deployStatus(): TicsAgentDeployDeployStatusEnum | string | undefined {
        return this['deploy_status'];
    }
    public withDeployType(deployType: TicsAgentDeployDeployTypeEnum | string): TicsAgentDeploy {
        this['deploy_type'] = deployType;
        return this;
    }
    public set deployType(deployType: TicsAgentDeployDeployTypeEnum | string  | undefined) {
        this['deploy_type'] = deployType;
    }
    public get deployType(): TicsAgentDeployDeployTypeEnum | string | undefined {
        return this['deploy_type'];
    }
    public withDeploymentEventInformation(deploymentEventInformation: string): TicsAgentDeploy {
        this['deployment_event_information'] = deploymentEventInformation;
        return this;
    }
    public set deploymentEventInformation(deploymentEventInformation: string  | undefined) {
        this['deployment_event_information'] = deploymentEventInformation;
    }
    public get deploymentEventInformation(): string | undefined {
        return this['deployment_event_information'];
    }
    public withHighAvail(highAvail: string): TicsAgentDeploy {
        this['high_avail'] = highAvail;
        return this;
    }
    public set highAvail(highAvail: string  | undefined) {
        this['high_avail'] = highAvail;
    }
    public get highAvail(): string | undefined {
        return this['high_avail'];
    }
    public withImageId(imageId: string): TicsAgentDeploy {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageVersion(imageVersion: string): TicsAgentDeploy {
        this['image_version'] = imageVersion;
        return this;
    }
    public set imageVersion(imageVersion: string  | undefined) {
        this['image_version'] = imageVersion;
    }
    public get imageVersion(): string | undefined {
        return this['image_version'];
    }
    public withLeagueId(leagueId: string): TicsAgentDeploy {
        this['league_id'] = leagueId;
        return this;
    }
    public set leagueId(leagueId: string  | undefined) {
        this['league_id'] = leagueId;
    }
    public get leagueId(): string | undefined {
        return this['league_id'];
    }
    public withLeagueName(leagueName: string): TicsAgentDeploy {
        this['league_name'] = leagueName;
        return this;
    }
    public set leagueName(leagueName: string  | undefined) {
        this['league_name'] = leagueName;
    }
    public get leagueName(): string | undefined {
        return this['league_name'];
    }
    public withLeagueRegionName(leagueRegionName: string): TicsAgentDeploy {
        this['league_region_name'] = leagueRegionName;
        return this;
    }
    public set leagueRegionName(leagueRegionName: string  | undefined) {
        this['league_region_name'] = leagueRegionName;
    }
    public get leagueRegionName(): string | undefined {
        return this['league_region_name'];
    }
    public withLeagueVersion(leagueVersion: string): TicsAgentDeploy {
        this['league_version'] = leagueVersion;
        return this;
    }
    public set leagueVersion(leagueVersion: string  | undefined) {
        this['league_version'] = leagueVersion;
    }
    public get leagueVersion(): string | undefined {
        return this['league_version'];
    }
    public withNatId(natId: string): TicsAgentDeploy {
        this['nat_id'] = natId;
        return this;
    }
    public set natId(natId: string  | undefined) {
        this['nat_id'] = natId;
    }
    public get natId(): string | undefined {
        return this['nat_id'];
    }
    public withStorageMountType(storageMountType: TicsAgentDeployStorageMountTypeEnum | string): TicsAgentDeploy {
        this['storage_mount_type'] = storageMountType;
        return this;
    }
    public set storageMountType(storageMountType: TicsAgentDeployStorageMountTypeEnum | string  | undefined) {
        this['storage_mount_type'] = storageMountType;
    }
    public get storageMountType(): TicsAgentDeployStorageMountTypeEnum | string | undefined {
        return this['storage_mount_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TicsAgentDeployDeployStatusEnum {
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
export enum TicsAgentDeployDeployTypeEnum {
    CCE = 'CCE',
    IEF = 'IEF'
}
/**
    * @export
    * @enum {string}
    */
export enum TicsAgentDeployStorageMountTypeEnum {
    HOST_PATH = 'HOST_PATH',
    OBS = 'OBS',
    SFS_TURBO = 'SFS_TURBO'
}
