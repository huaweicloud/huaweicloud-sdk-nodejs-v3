

export class ShowBucketReq {
    private 'cloud_type'?: string;
    private 'file_path'?: string;
    public ak?: string;
    public sk?: string;
    private 'data_center'?: string;
    private 'page_size'?: number;
    private 'behind_filename'?: string;
    private 'app_id'?: string;
    private 'bucket_name'?: string;
    public constructor(cloudType?: string, filePath?: string, dataCenter?: string, pageSize?: number, behindFilename?: string, bucketName?: string) { 
        this['cloud_type'] = cloudType;
        this['file_path'] = filePath;
        this['data_center'] = dataCenter;
        this['page_size'] = pageSize;
        this['behind_filename'] = behindFilename;
        this['bucket_name'] = bucketName;
    }
    public withCloudType(cloudType: string): ShowBucketReq {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): string | undefined {
        return this['cloud_type'];
    }
    public withFilePath(filePath: string): ShowBucketReq {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withAk(ak: string): ShowBucketReq {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): ShowBucketReq {
        this['sk'] = sk;
        return this;
    }
    public withDataCenter(dataCenter: string): ShowBucketReq {
        this['data_center'] = dataCenter;
        return this;
    }
    public set dataCenter(dataCenter: string  | undefined) {
        this['data_center'] = dataCenter;
    }
    public get dataCenter(): string | undefined {
        return this['data_center'];
    }
    public withPageSize(pageSize: number): ShowBucketReq {
        this['page_size'] = pageSize;
        return this;
    }
    public set pageSize(pageSize: number  | undefined) {
        this['page_size'] = pageSize;
    }
    public get pageSize(): number | undefined {
        return this['page_size'];
    }
    public withBehindFilename(behindFilename: string): ShowBucketReq {
        this['behind_filename'] = behindFilename;
        return this;
    }
    public set behindFilename(behindFilename: string  | undefined) {
        this['behind_filename'] = behindFilename;
    }
    public get behindFilename(): string | undefined {
        return this['behind_filename'];
    }
    public withAppId(appId: string): ShowBucketReq {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBucketName(bucketName: string): ShowBucketReq {
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