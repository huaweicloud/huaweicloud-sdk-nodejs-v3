import { ShowBucketRegionReq } from './ShowBucketRegionReq';


export class CheckPrefixReq {
    private 'cloud_type'?: string;
    public ak?: string;
    public sk?: string;
    private 'json_auth_file'?: string;
    private 'connection_string'?: string;
    private 'app_id'?: string;
    private 'bucket_name'?: string;
    private 'file_name'?: string;
    private 'data_center'?: string;
    private 'security_token'?: string;
    public constructor(cloudType?: string, bucketName?: string, fileName?: string, dataCenter?: string) { 
        this['cloud_type'] = cloudType;
        this['bucket_name'] = bucketName;
        this['file_name'] = fileName;
        this['data_center'] = dataCenter;
    }
    public withCloudType(cloudType: string): CheckPrefixReq {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): string | undefined {
        return this['cloud_type'];
    }
    public withAk(ak: string): CheckPrefixReq {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): CheckPrefixReq {
        this['sk'] = sk;
        return this;
    }
    public withJsonAuthFile(jsonAuthFile: string): CheckPrefixReq {
        this['json_auth_file'] = jsonAuthFile;
        return this;
    }
    public set jsonAuthFile(jsonAuthFile: string  | undefined) {
        this['json_auth_file'] = jsonAuthFile;
    }
    public get jsonAuthFile(): string | undefined {
        return this['json_auth_file'];
    }
    public withConnectionString(connectionString: string): CheckPrefixReq {
        this['connection_string'] = connectionString;
        return this;
    }
    public set connectionString(connectionString: string  | undefined) {
        this['connection_string'] = connectionString;
    }
    public get connectionString(): string | undefined {
        return this['connection_string'];
    }
    public withAppId(appId: string): CheckPrefixReq {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBucketName(bucketName: string): CheckPrefixReq {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withFileName(fileName: string): CheckPrefixReq {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withDataCenter(dataCenter: string): CheckPrefixReq {
        this['data_center'] = dataCenter;
        return this;
    }
    public set dataCenter(dataCenter: string  | undefined) {
        this['data_center'] = dataCenter;
    }
    public get dataCenter(): string | undefined {
        return this['data_center'];
    }
    public withSecurityToken(securityToken: string): CheckPrefixReq {
        this['security_token'] = securityToken;
        return this;
    }
    public set securityToken(securityToken: string  | undefined) {
        this['security_token'] = securityToken;
    }
    public get securityToken(): string | undefined {
        return this['security_token'];
    }
}