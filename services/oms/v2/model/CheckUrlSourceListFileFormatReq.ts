

export class CheckUrlSourceListFileFormatReq {
    private 'obs_bucket'?: string;
    private 'list_file_key'?: string;
    public ak?: string;
    public sk?: string;
    public region?: string;
    public constructor(obsBucket?: string, listFileKey?: string, ak?: string, sk?: string, region?: string) { 
        this['obs_bucket'] = obsBucket;
        this['list_file_key'] = listFileKey;
        this['ak'] = ak;
        this['sk'] = sk;
        this['region'] = region;
    }
    public withObsBucket(obsBucket: string): CheckUrlSourceListFileFormatReq {
        this['obs_bucket'] = obsBucket;
        return this;
    }
    public set obsBucket(obsBucket: string  | undefined) {
        this['obs_bucket'] = obsBucket;
    }
    public get obsBucket(): string | undefined {
        return this['obs_bucket'];
    }
    public withListFileKey(listFileKey: string): CheckUrlSourceListFileFormatReq {
        this['list_file_key'] = listFileKey;
        return this;
    }
    public set listFileKey(listFileKey: string  | undefined) {
        this['list_file_key'] = listFileKey;
    }
    public get listFileKey(): string | undefined {
        return this['list_file_key'];
    }
    public withAk(ak: string): CheckUrlSourceListFileFormatReq {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): CheckUrlSourceListFileFormatReq {
        this['sk'] = sk;
        return this;
    }
    public withRegion(region: string): CheckUrlSourceListFileFormatReq {
        this['region'] = region;
        return this;
    }
}