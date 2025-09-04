

export class UpgradeDatabasesSingleInstance {
    private 'current_version'?: string;
    private 'instance_id'?: string;
    public constructor(currentVersion?: string, instanceId?: string) { 
        this['current_version'] = currentVersion;
        this['instance_id'] = instanceId;
    }
    public withCurrentVersion(currentVersion: string): UpgradeDatabasesSingleInstance {
        this['current_version'] = currentVersion;
        return this;
    }
    public set currentVersion(currentVersion: string  | undefined) {
        this['current_version'] = currentVersion;
    }
    public get currentVersion(): string | undefined {
        return this['current_version'];
    }
    public withInstanceId(instanceId: string): UpgradeDatabasesSingleInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
}