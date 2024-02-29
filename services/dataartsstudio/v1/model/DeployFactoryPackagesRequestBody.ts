

export class DeployFactoryPackagesRequestBody {
    private 'package_ids'?: Array<string>;
    private 'startup_mode'?: number;
    public constructor(packageIds?: Array<string>) { 
        this['package_ids'] = packageIds;
    }
    public withPackageIds(packageIds: Array<string>): DeployFactoryPackagesRequestBody {
        this['package_ids'] = packageIds;
        return this;
    }
    public set packageIds(packageIds: Array<string>  | undefined) {
        this['package_ids'] = packageIds;
    }
    public get packageIds(): Array<string> | undefined {
        return this['package_ids'];
    }
    public withStartupMode(startupMode: number): DeployFactoryPackagesRequestBody {
        this['startup_mode'] = startupMode;
        return this;
    }
    public set startupMode(startupMode: number  | undefined) {
        this['startup_mode'] = startupMode;
    }
    public get startupMode(): number | undefined {
        return this['startup_mode'];
    }
}