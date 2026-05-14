

export class ShowLatestUpgradableReleaseResponseBodyResult {
    public hash?: string;
    public available?: boolean;
    private 'sub_product_name'?: string;
    public version?: string;
    public url?: string;
    public constructor(hash?: string, available?: boolean, subProductName?: string, version?: string, url?: string) { 
        this['hash'] = hash;
        this['available'] = available;
        this['sub_product_name'] = subProductName;
        this['version'] = version;
        this['url'] = url;
    }
    public withHash(hash: string): ShowLatestUpgradableReleaseResponseBodyResult {
        this['hash'] = hash;
        return this;
    }
    public withAvailable(available: boolean): ShowLatestUpgradableReleaseResponseBodyResult {
        this['available'] = available;
        return this;
    }
    public withSubProductName(subProductName: string): ShowLatestUpgradableReleaseResponseBodyResult {
        this['sub_product_name'] = subProductName;
        return this;
    }
    public set subProductName(subProductName: string  | undefined) {
        this['sub_product_name'] = subProductName;
    }
    public get subProductName(): string | undefined {
        return this['sub_product_name'];
    }
    public withVersion(version: string): ShowLatestUpgradableReleaseResponseBodyResult {
        this['version'] = version;
        return this;
    }
    public withUrl(url: string): ShowLatestUpgradableReleaseResponseBodyResult {
        this['url'] = url;
        return this;
    }
}