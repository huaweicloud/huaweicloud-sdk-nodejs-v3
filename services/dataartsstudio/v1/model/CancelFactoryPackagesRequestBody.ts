

export class CancelFactoryPackagesRequestBody {
    private 'package_ids'?: Array<string>;
    public constructor() { 
    }
    public withPackageIds(packageIds: Array<string>): CancelFactoryPackagesRequestBody {
        this['package_ids'] = packageIds;
        return this;
    }
    public set packageIds(packageIds: Array<string>  | undefined) {
        this['package_ids'] = packageIds;
    }
    public get packageIds(): Array<string> | undefined {
        return this['package_ids'];
    }
}