

export class VersionListViewV5 {
    public category?: string;
    private 'build_version'?: string;
    private 'files_count'?: number;
    public constructor() { 
    }
    public withCategory(category: string): VersionListViewV5 {
        this['category'] = category;
        return this;
    }
    public withBuildVersion(buildVersion: string): VersionListViewV5 {
        this['build_version'] = buildVersion;
        return this;
    }
    public set buildVersion(buildVersion: string  | undefined) {
        this['build_version'] = buildVersion;
    }
    public get buildVersion(): string | undefined {
        return this['build_version'];
    }
    public withFilesCount(filesCount: number): VersionListViewV5 {
        this['files_count'] = filesCount;
        return this;
    }
    public set filesCount(filesCount: number  | undefined) {
        this['files_count'] = filesCount;
    }
    public get filesCount(): number | undefined {
        return this['files_count'];
    }
}