import { ListBucketsReq } from './ListBucketsReq';


export class ShowBucketRegionReq {
    private 'cloud_type'?: string;
    public ak?: string;
    public sk?: string;
    private 'json_auth_file'?: string;
    private 'app_id'?: string;
    private 'bucket_name'?: string;
    public constructor(cloudType?: string, bucketName?: string) { 
        this['cloud_type'] = cloudType;
        this['bucket_name'] = bucketName;
    }
    public withCloudType(cloudType: string): ShowBucketRegionReq {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): string | undefined {
        return this['cloud_type'];
    }
    public withAk(ak: string): ShowBucketRegionReq {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): ShowBucketRegionReq {
        this['sk'] = sk;
        return this;
    }
    public withJsonAuthFile(jsonAuthFile: string): ShowBucketRegionReq {
        this['json_auth_file'] = jsonAuthFile;
        return this;
    }
    public set jsonAuthFile(jsonAuthFile: string  | undefined) {
        this['json_auth_file'] = jsonAuthFile;
    }
    public get jsonAuthFile(): string | undefined {
        return this['json_auth_file'];
    }
    public withAppId(appId: string): ShowBucketRegionReq {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBucketName(bucketName: string): ShowBucketRegionReq {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
}