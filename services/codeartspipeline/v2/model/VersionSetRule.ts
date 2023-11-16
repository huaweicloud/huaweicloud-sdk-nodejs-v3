

export class VersionSetRule {
    public enable?: boolean;
    public ecosystem?: string;
    private 'package_name'?: string;
    private 'package_version'?: string;
    public description?: string;
    public predicate?: string;
    public constructor() { 
    }
    public withEnable(enable: boolean): VersionSetRule {
        this['enable'] = enable;
        return this;
    }
    public withEcosystem(ecosystem: string): VersionSetRule {
        this['ecosystem'] = ecosystem;
        return this;
    }
    public withPackageName(packageName: string): VersionSetRule {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withPackageVersion(packageVersion: string): VersionSetRule {
        this['package_version'] = packageVersion;
        return this;
    }
    public set packageVersion(packageVersion: string  | undefined) {
        this['package_version'] = packageVersion;
    }
    public get packageVersion(): string | undefined {
        return this['package_version'];
    }
    public withDescription(description: string): VersionSetRule {
        this['description'] = description;
        return this;
    }
    public withPredicate(predicate: string): VersionSetRule {
        this['predicate'] = predicate;
        return this;
    }
}