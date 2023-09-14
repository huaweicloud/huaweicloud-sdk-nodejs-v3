

export class PackageInfo {
    public name?: string;
    public packageType?: string;
    public version?: string;
    public downloadUrl?: string;
    public constructor() { 
    }
    public withName(name: string): PackageInfo {
        this['name'] = name;
        return this;
    }
    public withPackageType(packageType: string): PackageInfo {
        this['packageType'] = packageType;
        return this;
    }
    public withVersion(version: string): PackageInfo {
        this['version'] = version;
        return this;
    }
    public withDownloadUrl(downloadUrl: string): PackageInfo {
        this['downloadUrl'] = downloadUrl;
        return this;
    }
}