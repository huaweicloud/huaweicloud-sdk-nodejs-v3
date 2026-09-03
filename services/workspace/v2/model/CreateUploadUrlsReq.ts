

export class CreateUploadUrlsReq {
    public slug?: string;
    public version?: string;
    private 'package_name'?: string;
    public regions?: Array<string>;
    public constructor(slug?: string, version?: string, packageName?: string, regions?: Array<string>) { 
        this['slug'] = slug;
        this['version'] = version;
        this['package_name'] = packageName;
        this['regions'] = regions;
    }
    public withSlug(slug: string): CreateUploadUrlsReq {
        this['slug'] = slug;
        return this;
    }
    public withVersion(version: string): CreateUploadUrlsReq {
        this['version'] = version;
        return this;
    }
    public withPackageName(packageName: string): CreateUploadUrlsReq {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withRegions(regions: Array<string>): CreateUploadUrlsReq {
        this['regions'] = regions;
        return this;
    }
}