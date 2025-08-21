import { UserSafeDto } from './UserSafeDto';


export class ApproverBasicDto {
    public id?: number;
    public name?: string;
    public username?: string;
    private 'name_cn'?: string;
    public email?: string;
    public state?: string;
    private 'updated_at'?: string;
    private 'avatar_url'?: string;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    private 'approver_comment'?: string;
    public constructor() { 
    }
    public withId(id: number): ApproverBasicDto {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ApproverBasicDto {
        this['name'] = name;
        return this;
    }
    public withUsername(username: string): ApproverBasicDto {
        this['username'] = username;
        return this;
    }
    public withNameCn(nameCn: string): ApproverBasicDto {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withEmail(email: string): ApproverBasicDto {
        this['email'] = email;
        return this;
    }
    public withState(state: string): ApproverBasicDto {
        this['state'] = state;
        return this;
    }
    public withUpdatedAt(updatedAt: string): ApproverBasicDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withAvatarUrl(avatarUrl: string): ApproverBasicDto {
        this['avatar_url'] = avatarUrl;
        return this;
    }
    public set avatarUrl(avatarUrl: string  | undefined) {
        this['avatar_url'] = avatarUrl;
    }
    public get avatarUrl(): string | undefined {
        return this['avatar_url'];
    }
    public withNickName(nickName: string): ApproverBasicDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): ApproverBasicDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withApproverComment(approverComment: string): ApproverBasicDto {
        this['approver_comment'] = approverComment;
        return this;
    }
    public set approverComment(approverComment: string  | undefined) {
        this['approver_comment'] = approverComment;
    }
    public get approverComment(): string | undefined {
        return this['approver_comment'];
    }
}