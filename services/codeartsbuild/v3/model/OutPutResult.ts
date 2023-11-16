

export class OutPutResult {
    private 'project_id'?: string;
    public name?: string;
    public version?: string;
    private 'package_type'?: string;
    public uri?: string;
    public type?: string;
    private 'daily_build_number'?: string;
    public constructor() { 
    }
    public withProjectId(projectId: string): OutPutResult {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): OutPutResult {
        this['name'] = name;
        return this;
    }
    public withVersion(version: string): OutPutResult {
        this['version'] = version;
        return this;
    }
    public withPackageType(packageType: string): OutPutResult {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withUri(uri: string): OutPutResult {
        this['uri'] = uri;
        return this;
    }
    public withType(type: string): OutPutResult {
        this['type'] = type;
        return this;
    }
    public withDailyBuildNumber(dailyBuildNumber: string): OutPutResult {
        this['daily_build_number'] = dailyBuildNumber;
        return this;
    }
    public set dailyBuildNumber(dailyBuildNumber: string  | undefined) {
        this['daily_build_number'] = dailyBuildNumber;
    }
    public get dailyBuildNumber(): string | undefined {
        return this['daily_build_number'];
    }
}