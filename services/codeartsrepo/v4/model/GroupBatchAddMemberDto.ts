

export class GroupBatchAddMemberDto {
    private 'iam_id'?: string;
    private 'user_id'?: string;
    public name?: string;
    private 'nick_name'?: string;
    private 'domain_name'?: string;
    private 'domain_id'?: string;
    private 'repo_role_id'?: string;
    private 'req_role_id'?: string;
    private 'repo_role_name'?: string;
    private 'req_role_name'?: string;
    public constructor() { 
    }
    public withIamId(iamId: string): GroupBatchAddMemberDto {
        this['iam_id'] = iamId;
        return this;
    }
    public set iamId(iamId: string  | undefined) {
        this['iam_id'] = iamId;
    }
    public get iamId(): string | undefined {
        return this['iam_id'];
    }
    public withUserId(userId: string): GroupBatchAddMemberDto {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withName(name: string): GroupBatchAddMemberDto {
        this['name'] = name;
        return this;
    }
    public withNickName(nickName: string): GroupBatchAddMemberDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withDomainName(domainName: string): GroupBatchAddMemberDto {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withDomainId(domainId: string): GroupBatchAddMemberDto {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRepoRoleId(repoRoleId: string): GroupBatchAddMemberDto {
        this['repo_role_id'] = repoRoleId;
        return this;
    }
    public set repoRoleId(repoRoleId: string  | undefined) {
        this['repo_role_id'] = repoRoleId;
    }
    public get repoRoleId(): string | undefined {
        return this['repo_role_id'];
    }
    public withReqRoleId(reqRoleId: string): GroupBatchAddMemberDto {
        this['req_role_id'] = reqRoleId;
        return this;
    }
    public set reqRoleId(reqRoleId: string  | undefined) {
        this['req_role_id'] = reqRoleId;
    }
    public get reqRoleId(): string | undefined {
        return this['req_role_id'];
    }
    public withRepoRoleName(repoRoleName: string): GroupBatchAddMemberDto {
        this['repo_role_name'] = repoRoleName;
        return this;
    }
    public set repoRoleName(repoRoleName: string  | undefined) {
        this['repo_role_name'] = repoRoleName;
    }
    public get repoRoleName(): string | undefined {
        return this['repo_role_name'];
    }
    public withReqRoleName(reqRoleName: string): GroupBatchAddMemberDto {
        this['req_role_name'] = reqRoleName;
        return this;
    }
    public set reqRoleName(reqRoleName: string  | undefined) {
        this['req_role_name'] = reqRoleName;
    }
    public get reqRoleName(): string | undefined {
        return this['req_role_name'];
    }
}