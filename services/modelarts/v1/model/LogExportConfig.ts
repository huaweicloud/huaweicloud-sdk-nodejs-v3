

export class LogExportConfig {
    public version?: string;
    private 'rotation_enabled'?: boolean;
    public constructor() { 
    }
    public withVersion(version: string): LogExportConfig {
        this['version'] = version;
        return this;
    }
    public withRotationEnabled(rotationEnabled: boolean): LogExportConfig {
        this['rotation_enabled'] = rotationEnabled;
        return this;
    }
    public set rotationEnabled(rotationEnabled: boolean  | undefined) {
        this['rotation_enabled'] = rotationEnabled;
    }
    public get rotationEnabled(): boolean | undefined {
        return this['rotation_enabled'];
    }
}