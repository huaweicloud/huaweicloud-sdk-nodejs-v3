

export class ProcessInstanceResponseResultModifiedBy {
    public watcher?: string;
    private 'user_id'?: string;
    private 'user_num_id'?: string;
    private 'user_name'?: string;
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'nick_name'?: string;
    private 'role_id'?: string;
    private 'role_name'?: string;
    private 'image_id'?: string;
    public region?: string;
    public opinion?: string;
    public description?: string;
    public owner?: string;
    public ccbId?: string;
    private 'has_removed'?: string;
    public constructor() { 
    }
    public withWatcher(watcher: string): ProcessInstanceResponseResultModifiedBy {
        this['watcher'] = watcher;
        return this;
    }
    public withUserId(userId: string): ProcessInstanceResponseResultModifiedBy {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserNumId(userNumId: string): ProcessInstanceResponseResultModifiedBy {
        this['user_num_id'] = userNumId;
        return this;
    }
    public set userNumId(userNumId: string  | undefined) {
        this['user_num_id'] = userNumId;
    }
    public get userNumId(): string | undefined {
        return this['user_num_id'];
    }
    public withUserName(userName: string): ProcessInstanceResponseResultModifiedBy {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDomainId(domainId: string): ProcessInstanceResponseResultModifiedBy {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): ProcessInstanceResponseResultModifiedBy {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withNickName(nickName: string): ProcessInstanceResponseResultModifiedBy {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withRoleId(roleId: string): ProcessInstanceResponseResultModifiedBy {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withRoleName(roleName: string): ProcessInstanceResponseResultModifiedBy {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withImageId(imageId: string): ProcessInstanceResponseResultModifiedBy {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withRegion(region: string): ProcessInstanceResponseResultModifiedBy {
        this['region'] = region;
        return this;
    }
    public withOpinion(opinion: string): ProcessInstanceResponseResultModifiedBy {
        this['opinion'] = opinion;
        return this;
    }
    public withDescription(description: string): ProcessInstanceResponseResultModifiedBy {
        this['description'] = description;
        return this;
    }
    public withOwner(owner: string): ProcessInstanceResponseResultModifiedBy {
        this['owner'] = owner;
        return this;
    }
    public withCcbId(ccbId: string): ProcessInstanceResponseResultModifiedBy {
        this['ccbId'] = ccbId;
        return this;
    }
    public withHasRemoved(hasRemoved: string): ProcessInstanceResponseResultModifiedBy {
        this['has_removed'] = hasRemoved;
        return this;
    }
    public set hasRemoved(hasRemoved: string  | undefined) {
        this['has_removed'] = hasRemoved;
    }
    public get hasRemoved(): string | undefined {
        return this['has_removed'];
    }
}