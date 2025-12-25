

export class BasicDOV5 {
    public status?: string;
    private 'domain_id'?: string;
    public region?: string;
    private 'created_time'?: string;
    private 'modified_time'?: string;
    private 'created_user_id'?: string;
    private 'created_user_name'?: string;
    private 'modified_user_id'?: string;
    private 'modified_user_name'?: string;
    public constructor() { 
    }
    public withStatus(status: string): BasicDOV5 {
        this['status'] = status;
        return this;
    }
    public withDomainId(domainId: string): BasicDOV5 {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegion(region: string): BasicDOV5 {
        this['region'] = region;
        return this;
    }
    public withCreatedTime(createdTime: string): BasicDOV5 {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withModifiedTime(modifiedTime: string): BasicDOV5 {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: string  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): string | undefined {
        return this['modified_time'];
    }
    public withCreatedUserId(createdUserId: string): BasicDOV5 {
        this['created_user_id'] = createdUserId;
        return this;
    }
    public set createdUserId(createdUserId: string  | undefined) {
        this['created_user_id'] = createdUserId;
    }
    public get createdUserId(): string | undefined {
        return this['created_user_id'];
    }
    public withCreatedUserName(createdUserName: string): BasicDOV5 {
        this['created_user_name'] = createdUserName;
        return this;
    }
    public set createdUserName(createdUserName: string  | undefined) {
        this['created_user_name'] = createdUserName;
    }
    public get createdUserName(): string | undefined {
        return this['created_user_name'];
    }
    public withModifiedUserId(modifiedUserId: string): BasicDOV5 {
        this['modified_user_id'] = modifiedUserId;
        return this;
    }
    public set modifiedUserId(modifiedUserId: string  | undefined) {
        this['modified_user_id'] = modifiedUserId;
    }
    public get modifiedUserId(): string | undefined {
        return this['modified_user_id'];
    }
    public withModifiedUserName(modifiedUserName: string): BasicDOV5 {
        this['modified_user_name'] = modifiedUserName;
        return this;
    }
    public set modifiedUserName(modifiedUserName: string  | undefined) {
        this['modified_user_name'] = modifiedUserName;
    }
    public get modifiedUserName(): string | undefined {
        return this['modified_user_name'];
    }
}