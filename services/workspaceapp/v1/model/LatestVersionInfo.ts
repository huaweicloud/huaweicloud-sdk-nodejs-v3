

export class LatestVersionInfo {
    private 'latest_version'?: string;
    private 'hda_type'?: string;
    public constructor() { 
    }
    public withLatestVersion(latestVersion: string): LatestVersionInfo {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: string  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): string | undefined {
        return this['latest_version'];
    }
    public withHdaType(hdaType: string): LatestVersionInfo {
        this['hda_type'] = hdaType;
        return this;
    }
    public set hdaType(hdaType: string  | undefined) {
        this['hda_type'] = hdaType;
    }
    public get hdaType(): string | undefined {
        return this['hda_type'];
    }
}