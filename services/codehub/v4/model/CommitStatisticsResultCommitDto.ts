

export class CommitStatisticsResultCommitDto {
    private 'author_name'?: string;
    public date?: string;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    private 'user_name'?: string;
    private 'is_merge'?: boolean;
    public constructor() { 
    }
    public withAuthorName(authorName: string): CommitStatisticsResultCommitDto {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withDate(date: string): CommitStatisticsResultCommitDto {
        this['date'] = date;
        return this;
    }
    public withNickName(nickName: string): CommitStatisticsResultCommitDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): CommitStatisticsResultCommitDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withUserName(userName: string): CommitStatisticsResultCommitDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withIsMerge(isMerge: boolean): CommitStatisticsResultCommitDto {
        this['is_merge'] = isMerge;
        return this;
    }
    public set isMerge(isMerge: boolean  | undefined) {
        this['is_merge'] = isMerge;
    }
    public get isMerge(): boolean | undefined {
        return this['is_merge'];
    }
}