

export class ListBucketsReq {
    private 'cloud_type'?: string;
    public ak?: string;
    public sk?: string;
    private 'json_auth_file'?: string;
    private 'app_id'?: string;
    public constructor(cloudType?: string) { 
        this['cloud_type'] = cloudType;
    }
    public withCloudType(cloudType: string): ListBucketsReq {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): string | undefined {
        return this['cloud_type'];
    }
    public withAk(ak: string): ListBucketsReq {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): ListBucketsReq {
        this['sk'] = sk;
        return this;
    }
    public withJsonAuthFile(jsonAuthFile: string): ListBucketsReq {
        this['json_auth_file'] = jsonAuthFile;
        return this;
    }
    public set jsonAuthFile(jsonAuthFile: string  | undefined) {
        this['json_auth_file'] = jsonAuthFile;
    }
    public get jsonAuthFile(): string | undefined {
        return this['json_auth_file'];
    }
    public withAppId(appId: string): ListBucketsReq {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
}