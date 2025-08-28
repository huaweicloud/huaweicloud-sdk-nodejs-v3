

export class DatabaseVersionRequest {
    private 'target_version'?: string;
    public constructor(targetVersion?: string) { 
        this['target_version'] = targetVersion;
    }
    public withTargetVersion(targetVersion: string): DatabaseVersionRequest {
        this['target_version'] = targetVersion;
        return this;
    }
    public set targetVersion(targetVersion: string  | undefined) {
        this['target_version'] = targetVersion;
    }
    public get targetVersion(): string | undefined {
        return this['target_version'];
    }
}