import { ApigRoleVo } from './ApigRoleVo';


export class ApigWorkspaceUserbody {
    public id?: string;
    private 'user_id'?: string;
    private 'user_name'?: string;
    private 'domain_id'?: string;
    private 'domain_name'?: string;
    private 'display_user_name'?: string;
    private 'domain_owner'?: boolean;
    public description?: string;
    private 'workspace_id'?: string;
    public roles?: Array<ApigRoleVo>;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'update_time'?: number;
    private 'update_user'?: string;
    public type?: number;
    public constructor() { 
    }
    public withId(id: string): ApigWorkspaceUserbody {
        this['id'] = id;
        return this;
    }
    public withUserId(userId: string): ApigWorkspaceUserbody {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withUserName(userName: string): ApigWorkspaceUserbody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withDomainId(domainId: string): ApigWorkspaceUserbody {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withDomainName(domainName: string): ApigWorkspaceUserbody {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withDisplayUserName(displayUserName: string): ApigWorkspaceUserbody {
        this['display_user_name'] = displayUserName;
        return this;
    }
    public set displayUserName(displayUserName: string  | undefined) {
        this['display_user_name'] = displayUserName;
    }
    public get displayUserName(): string | undefined {
        return this['display_user_name'];
    }
    public withDomainOwner(domainOwner: boolean): ApigWorkspaceUserbody {
        this['domain_owner'] = domainOwner;
        return this;
    }
    public set domainOwner(domainOwner: boolean  | undefined) {
        this['domain_owner'] = domainOwner;
    }
    public get domainOwner(): boolean | undefined {
        return this['domain_owner'];
    }
    public withDescription(description: string): ApigWorkspaceUserbody {
        this['description'] = description;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ApigWorkspaceUserbody {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withRoles(roles: Array<ApigRoleVo>): ApigWorkspaceUserbody {
        this['roles'] = roles;
        return this;
    }
    public withCreateTime(createTime: number): ApigWorkspaceUserbody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): ApigWorkspaceUserbody {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateTime(updateTime: number): ApigWorkspaceUserbody {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): ApigWorkspaceUserbody {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withType(type: number): ApigWorkspaceUserbody {
        this['type'] = type;
        return this;
    }
}