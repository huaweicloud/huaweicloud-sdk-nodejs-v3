

export class BackupFileInfo {
    public name?: string;
    private 'obs_path'?: string;
    private 'rds_version'?: string;
    private 'rds_source_instance_id'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): BackupFileInfo {
        this['name'] = name;
        return this;
    }
    public withObsPath(obsPath: string): BackupFileInfo {
        this['obs_path'] = obsPath;
        return this;
    }
    public set obsPath(obsPath: string  | undefined) {
        this['obs_path'] = obsPath;
    }
    public get obsPath(): string | undefined {
        return this['obs_path'];
    }
    public withRdsVersion(rdsVersion: string): BackupFileInfo {
        this['rds_version'] = rdsVersion;
        return this;
    }
    public set rdsVersion(rdsVersion: string  | undefined) {
        this['rds_version'] = rdsVersion;
    }
    public get rdsVersion(): string | undefined {
        return this['rds_version'];
    }
    public withRdsSourceInstanceId(rdsSourceInstanceId: string): BackupFileInfo {
        this['rds_source_instance_id'] = rdsSourceInstanceId;
        return this;
    }
    public set rdsSourceInstanceId(rdsSourceInstanceId: string  | undefined) {
        this['rds_source_instance_id'] = rdsSourceInstanceId;
    }
    public get rdsSourceInstanceId(): string | undefined {
        return this['rds_source_instance_id'];
    }
}