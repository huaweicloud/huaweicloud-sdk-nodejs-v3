import { BasicDOV5 } from './BasicDOV5';


export class NetProxyModelV5 {
    public status?: string;
    private 'domain_id'?: string;
    public region?: string;
    private 'created_time'?: string;
    private 'modified_time'?: string;
    private 'created_user_id'?: string;
    private 'created_user_name'?: string;
    private 'modified_user_id'?: string;
    private 'modified_user_name'?: string;
    public id?: number;
    private 'host_name'?: string;
    public host?: string;
    public port?: number;
    private 'user_name'?: string;
    public password?: string;
    private 'is_default'?: number;
    public remark?: string;
    public constructor() { 
    }
    public withStatus(status: string): NetProxyModelV5 {
        this['status'] = status;
        return this;
    }
    public withDomainId(domainId: string): NetProxyModelV5 {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegion(region: string): NetProxyModelV5 {
        this['region'] = region;
        return this;
    }
    public withCreatedTime(createdTime: string): NetProxyModelV5 {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withModifiedTime(modifiedTime: string): NetProxyModelV5 {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: string  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): string | undefined {
        return this['modified_time'];
    }
    public withCreatedUserId(createdUserId: string): NetProxyModelV5 {
        this['created_user_id'] = createdUserId;
        return this;
    }
    public set createdUserId(createdUserId: string  | undefined) {
        this['created_user_id'] = createdUserId;
    }
    public get createdUserId(): string | undefined {
        return this['created_user_id'];
    }
    public withCreatedUserName(createdUserName: string): NetProxyModelV5 {
        this['created_user_name'] = createdUserName;
        return this;
    }
    public set createdUserName(createdUserName: string  | undefined) {
        this['created_user_name'] = createdUserName;
    }
    public get createdUserName(): string | undefined {
        return this['created_user_name'];
    }
    public withModifiedUserId(modifiedUserId: string): NetProxyModelV5 {
        this['modified_user_id'] = modifiedUserId;
        return this;
    }
    public set modifiedUserId(modifiedUserId: string  | undefined) {
        this['modified_user_id'] = modifiedUserId;
    }
    public get modifiedUserId(): string | undefined {
        return this['modified_user_id'];
    }
    public withModifiedUserName(modifiedUserName: string): NetProxyModelV5 {
        this['modified_user_name'] = modifiedUserName;
        return this;
    }
    public set modifiedUserName(modifiedUserName: string  | undefined) {
        this['modified_user_name'] = modifiedUserName;
    }
    public get modifiedUserName(): string | undefined {
        return this['modified_user_name'];
    }
    public withId(id: number): NetProxyModelV5 {
        this['id'] = id;
        return this;
    }
    public withHostName(hostName: string): NetProxyModelV5 {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHost(host: string): NetProxyModelV5 {
        this['host'] = host;
        return this;
    }
    public withPort(port: number): NetProxyModelV5 {
        this['port'] = port;
        return this;
    }
    public withUserName(userName: string): NetProxyModelV5 {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPassword(password: string): NetProxyModelV5 {
        this['password'] = password;
        return this;
    }
    public withIsDefault(isDefault: number): NetProxyModelV5 {
        this['is_default'] = isDefault;
        return this;
    }
    public set isDefault(isDefault: number  | undefined) {
        this['is_default'] = isDefault;
    }
    public get isDefault(): number | undefined {
        return this['is_default'];
    }
    public withRemark(remark: string): NetProxyModelV5 {
        this['remark'] = remark;
        return this;
    }
}