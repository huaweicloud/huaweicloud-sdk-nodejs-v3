

export class UpgradePathsResult {
    private 'start_version'?: string;
    private 'end_version'?: string;
    public constructor() { 
    }
    public withStartVersion(startVersion: string): UpgradePathsResult {
        this['start_version'] = startVersion;
        return this;
    }
    public set startVersion(startVersion: string  | undefined) {
        this['start_version'] = startVersion;
    }
    public get startVersion(): string | undefined {
        return this['start_version'];
    }
    public withEndVersion(endVersion: string): UpgradePathsResult {
        this['end_version'] = endVersion;
        return this;
    }
    public set endVersion(endVersion: string  | undefined) {
        this['end_version'] = endVersion;
    }
    public get endVersion(): string | undefined {
        return this['end_version'];
    }
}