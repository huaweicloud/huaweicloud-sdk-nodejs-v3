import { BasicDOV5 } from './BasicDOV5';


export class DevcloudUserDOV5 {
    public status?: string;
    private 'domain_id'?: string;
    public region?: string;
    private 'created_time'?: string;
    private 'modified_time'?: string;
    private 'created_user_id'?: string;
    private 'created_user_name'?: string;
    private 'modified_user_id'?: string;
    private 'modified_user_name'?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'user_type'?: string;
    public enabled?: string;
    private 'repo_user_name'?: string;
    private 'repo_number'?: number;
    private 'inner_repo_user_name'?: string;
    public constructor() { 
    }
    public withStatus(status: string): DevcloudUserDOV5 {
        this['status'] = status;
        return this;
    }
    public withDomainId(domainId: string): DevcloudUserDOV5 {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegion(region: string): DevcloudUserDOV5 {
        this['region'] = region;
        return this;
    }
    public withCreatedTime(createdTime: string): DevcloudUserDOV5 {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withModifiedTime(modifiedTime: string): DevcloudUserDOV5 {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: string  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): string | undefined {
        return this['modified_time'];
    }
    public withCreatedUserId(createdUserId: string): DevcloudUserDOV5 {
        this['created_user_id'] = createdUserId;
        return this;
    }
    public set createdUserId(createdUserId: string  | undefined) {
        this['created_user_id'] = createdUserId;
    }
    public get createdUserId(): string | undefined {
        return this['created_user_id'];
    }
    public withCreatedUserName(createdUserName: string): DevcloudUserDOV5 {
        this['created_user_name'] = createdUserName;
        return this;
    }
    public set createdUserName(createdUserName: string  | undefined) {
        this['created_user_name'] = createdUserName;
    }
    public get createdUserName(): string | undefined {
        return this['created_user_name'];
    }
    public withModifiedUserId(modifiedUserId: string): DevcloudUserDOV5 {
        this['modified_user_id'] = modifiedUserId;
        return this;
    }
    public set modifiedUserId(modifiedUserId: string  | undefined) {
        this['modified_user_id'] = modifiedUserId;
    }
    public get modifiedUserId(): string | undefined {
        return this['modified_user_id'];
    }
    public withModifiedUserName(modifiedUserName: string): DevcloudUserDOV5 {
        this['modified_user_name'] = modifiedUserName;
        return this;
    }
    public set modifiedUserName(modifiedUserName: string  | undefined) {
        this['modified_user_name'] = modifiedUserName;
    }
    public get modifiedUserName(): string | undefined {
        return this['modified_user_name'];
    }
    public withUserId(userId: string): DevcloudUserDOV5 {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): DevcloudUserDOV5 {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserType(userType: string): DevcloudUserDOV5 {
        this['user_type'] = userType;
        return this;
    }
    public set userType(userType: string  | undefined) {
        this['user_type'] = userType;
    }
    public get userType(): string | undefined {
        return this['user_type'];
    }
    public withEnabled(enabled: string): DevcloudUserDOV5 {
        this['enabled'] = enabled;
        return this;
    }
    public withRepoUserName(repoUserName: string): DevcloudUserDOV5 {
        this['repo_user_name'] = repoUserName;
        return this;
    }
    public set repoUserName(repoUserName: string  | undefined) {
        this['repo_user_name'] = repoUserName;
    }
    public get repoUserName(): string | undefined {
        return this['repo_user_name'];
    }
    public withRepoNumber(repoNumber: number): DevcloudUserDOV5 {
        this['repo_number'] = repoNumber;
        return this;
    }
    public set repoNumber(repoNumber: number  | undefined) {
        this['repo_number'] = repoNumber;
    }
    public get repoNumber(): number | undefined {
        return this['repo_number'];
    }
    public withInnerRepoUserName(innerRepoUserName: string): DevcloudUserDOV5 {
        this['inner_repo_user_name'] = innerRepoUserName;
        return this;
    }
    public set innerRepoUserName(innerRepoUserName: string  | undefined) {
        this['inner_repo_user_name'] = innerRepoUserName;
    }
    public get innerRepoUserName(): string | undefined {
        return this['inner_repo_user_name'];
    }
}