

export class ApprovalUserDto {
    public id?: number;
    public username?: string;
    public name?: string;
    private 'nick_name'?: string;
    private 'name_cn'?: string;
    public email?: string;
    public state?: string;
    private 'updated_at'?: string;
    private 'avatar_url'?: string;
    private 'tenant_name'?: string;
    private 'approver_comment'?: string;
    public constructor() { 
    }
    public withId(id: number): ApprovalUserDto {
        this['id'] = id;
        return this;
    }
    public withUsername(username: string): ApprovalUserDto {
        this['username'] = username;
        return this;
    }
    public withName(name: string): ApprovalUserDto {
        this['name'] = name;
        return this;
    }
    public withNickName(nickName: string): ApprovalUserDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withNameCn(nameCn: string): ApprovalUserDto {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withEmail(email: string): ApprovalUserDto {
        this['email'] = email;
        return this;
    }
    public withState(state: string): ApprovalUserDto {
        this['state'] = state;
        return this;
    }
    public withUpdatedAt(updatedAt: string): ApprovalUserDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withAvatarUrl(avatarUrl: string): ApprovalUserDto {
        this['avatar_url'] = avatarUrl;
        return this;
    }
    public set avatarUrl(avatarUrl: string  | undefined) {
        this['avatar_url'] = avatarUrl;
    }
    public get avatarUrl(): string | undefined {
        return this['avatar_url'];
    }
    public withTenantName(tenantName: string): ApprovalUserDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withApproverComment(approverComment: string): ApprovalUserDto {
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