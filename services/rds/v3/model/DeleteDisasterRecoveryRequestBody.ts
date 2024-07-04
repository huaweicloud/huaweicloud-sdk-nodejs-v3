

export class DeleteDisasterRecoveryRequestBody {
    private 'target_instance_id'?: string;
    private 'target_project_id'?: string;
    private 'target_region'?: string;
    private 'target_ip'?: string;
    private 'is_master'?: boolean;
    public constructor(targetInstanceId?: string, targetProjectId?: string, targetRegion?: string, targetIp?: string, isMaster?: boolean) { 
        this['target_instance_id'] = targetInstanceId;
        this['target_project_id'] = targetProjectId;
        this['target_region'] = targetRegion;
        this['target_ip'] = targetIp;
        this['is_master'] = isMaster;
    }
    public withTargetInstanceId(targetInstanceId: string): DeleteDisasterRecoveryRequestBody {
        this['target_instance_id'] = targetInstanceId;
        return this;
    }
    public set targetInstanceId(targetInstanceId: string  | undefined) {
        this['target_instance_id'] = targetInstanceId;
    }
    public get targetInstanceId(): string | undefined {
        return this['target_instance_id'];
    }
    public withTargetProjectId(targetProjectId: string): DeleteDisasterRecoveryRequestBody {
        this['target_project_id'] = targetProjectId;
        return this;
    }
    public set targetProjectId(targetProjectId: string  | undefined) {
        this['target_project_id'] = targetProjectId;
    }
    public get targetProjectId(): string | undefined {
        return this['target_project_id'];
    }
    public withTargetRegion(targetRegion: string): DeleteDisasterRecoveryRequestBody {
        this['target_region'] = targetRegion;
        return this;
    }
    public set targetRegion(targetRegion: string  | undefined) {
        this['target_region'] = targetRegion;
    }
    public get targetRegion(): string | undefined {
        return this['target_region'];
    }
    public withTargetIp(targetIp: string): DeleteDisasterRecoveryRequestBody {
        this['target_ip'] = targetIp;
        return this;
    }
    public set targetIp(targetIp: string  | undefined) {
        this['target_ip'] = targetIp;
    }
    public get targetIp(): string | undefined {
        return this['target_ip'];
    }
    public withIsMaster(isMaster: boolean): DeleteDisasterRecoveryRequestBody {
        this['is_master'] = isMaster;
        return this;
    }
    public set isMaster(isMaster: boolean  | undefined) {
        this['is_master'] = isMaster;
    }
    public get isMaster(): boolean | undefined {
        return this['is_master'];
    }
}