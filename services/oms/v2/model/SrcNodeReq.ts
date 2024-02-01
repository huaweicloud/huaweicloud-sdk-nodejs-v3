import { ListFile } from './ListFile';


export class SrcNodeReq {
    private 'cloud_type'?: string;
    public region?: string;
    public ak?: string;
    public sk?: string;
    private 'json_auth_file'?: string;
    private 'security_token'?: string;
    private 'app_id'?: string;
    public bucket?: string;
    private 'object_key'?: Array<string>;
    private 'list_file'?: ListFile;
    public constructor() { 
    }
    public withCloudType(cloudType: string): SrcNodeReq {
        this['cloud_type'] = cloudType;
        return this;
    }
    public set cloudType(cloudType: string  | undefined) {
        this['cloud_type'] = cloudType;
    }
    public get cloudType(): string | undefined {
        return this['cloud_type'];
    }
    public withRegion(region: string): SrcNodeReq {
        this['region'] = region;
        return this;
    }
    public withAk(ak: string): SrcNodeReq {
        this['ak'] = ak;
        return this;
    }
    public withSk(sk: string): SrcNodeReq {
        this['sk'] = sk;
        return this;
    }
    public withJsonAuthFile(jsonAuthFile: string): SrcNodeReq {
        this['json_auth_file'] = jsonAuthFile;
        return this;
    }
    public set jsonAuthFile(jsonAuthFile: string  | undefined) {
        this['json_auth_file'] = jsonAuthFile;
    }
    public get jsonAuthFile(): string | undefined {
        return this['json_auth_file'];
    }
    public withSecurityToken(securityToken: string): SrcNodeReq {
        this['security_token'] = securityToken;
        return this;
    }
    public set securityToken(securityToken: string  | undefined) {
        this['security_token'] = securityToken;
    }
    public get securityToken(): string | undefined {
        return this['security_token'];
    }
    public withAppId(appId: string): SrcNodeReq {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withBucket(bucket: string): SrcNodeReq {
        this['bucket'] = bucket;
        return this;
    }
    public withObjectKey(objectKey: Array<string>): SrcNodeReq {
        this['object_key'] = objectKey;
        return this;
    }
    public set objectKey(objectKey: Array<string>  | undefined) {
        this['object_key'] = objectKey;
    }
    public get objectKey(): Array<string> | undefined {
        return this['object_key'];
    }
    public withListFile(listFile: ListFile): SrcNodeReq {
        this['list_file'] = listFile;
        return this;
    }
    public set listFile(listFile: ListFile  | undefined) {
        this['list_file'] = listFile;
    }
    public get listFile(): ListFile | undefined {
        return this['list_file'];
    }
}