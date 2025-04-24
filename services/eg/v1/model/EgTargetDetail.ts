

export class EgTargetDetail {
    private 'target_project_id'?: string;
    private 'target_channel_id'?: string;
    private 'target_region'?: string;
    private 'cross_region'?: boolean;
    private 'cross_account'?: boolean;
    private 'agency_name'?: string;
    public constructor(targetProjectId?: string, targetChannelId?: string, targetRegion?: string, agencyName?: string) { 
        this['target_project_id'] = targetProjectId;
        this['target_channel_id'] = targetChannelId;
        this['target_region'] = targetRegion;
        this['agency_name'] = agencyName;
    }
    public withTargetProjectId(targetProjectId: string): EgTargetDetail {
        this['target_project_id'] = targetProjectId;
        return this;
    }
    public set targetProjectId(targetProjectId: string  | undefined) {
        this['target_project_id'] = targetProjectId;
    }
    public get targetProjectId(): string | undefined {
        return this['target_project_id'];
    }
    public withTargetChannelId(targetChannelId: string): EgTargetDetail {
        this['target_channel_id'] = targetChannelId;
        return this;
    }
    public set targetChannelId(targetChannelId: string  | undefined) {
        this['target_channel_id'] = targetChannelId;
    }
    public get targetChannelId(): string | undefined {
        return this['target_channel_id'];
    }
    public withTargetRegion(targetRegion: string): EgTargetDetail {
        this['target_region'] = targetRegion;
        return this;
    }
    public set targetRegion(targetRegion: string  | undefined) {
        this['target_region'] = targetRegion;
    }
    public get targetRegion(): string | undefined {
        return this['target_region'];
    }
    public withCrossRegion(crossRegion: boolean): EgTargetDetail {
        this['cross_region'] = crossRegion;
        return this;
    }
    public set crossRegion(crossRegion: boolean  | undefined) {
        this['cross_region'] = crossRegion;
    }
    public get crossRegion(): boolean | undefined {
        return this['cross_region'];
    }
    public withCrossAccount(crossAccount: boolean): EgTargetDetail {
        this['cross_account'] = crossAccount;
        return this;
    }
    public set crossAccount(crossAccount: boolean  | undefined) {
        this['cross_account'] = crossAccount;
    }
    public get crossAccount(): boolean | undefined {
        return this['cross_account'];
    }
    public withAgencyName(agencyName: string): EgTargetDetail {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): string | undefined {
        return this['agency_name'];
    }
}