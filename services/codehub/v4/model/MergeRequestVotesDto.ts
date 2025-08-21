

export class MergeRequestVotesDto {
    public id?: number;
    public score?: number;
    private 'author_name'?: string;
    private 'author_username'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'last_committed_id'?: string;
    private 'author_id'?: number;
    private 'avatar_url'?: string;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    public constructor() { 
    }
    public withId(id: number): MergeRequestVotesDto {
        this['id'] = id;
        return this;
    }
    public withScore(score: number): MergeRequestVotesDto {
        this['score'] = score;
        return this;
    }
    public withAuthorName(authorName: string): MergeRequestVotesDto {
        this['author_name'] = authorName;
        return this;
    }
    public set authorName(authorName: string  | undefined) {
        this['author_name'] = authorName;
    }
    public get authorName(): string | undefined {
        return this['author_name'];
    }
    public withAuthorUsername(authorUsername: string): MergeRequestVotesDto {
        this['author_username'] = authorUsername;
        return this;
    }
    public set authorUsername(authorUsername: string  | undefined) {
        this['author_username'] = authorUsername;
    }
    public get authorUsername(): string | undefined {
        return this['author_username'];
    }
    public withCreatedAt(createdAt: string): MergeRequestVotesDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): MergeRequestVotesDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withLastCommittedId(lastCommittedId: string): MergeRequestVotesDto {
        this['last_committed_id'] = lastCommittedId;
        return this;
    }
    public set lastCommittedId(lastCommittedId: string  | undefined) {
        this['last_committed_id'] = lastCommittedId;
    }
    public get lastCommittedId(): string | undefined {
        return this['last_committed_id'];
    }
    public withAuthorId(authorId: number): MergeRequestVotesDto {
        this['author_id'] = authorId;
        return this;
    }
    public set authorId(authorId: number  | undefined) {
        this['author_id'] = authorId;
    }
    public get authorId(): number | undefined {
        return this['author_id'];
    }
    public withAvatarUrl(avatarUrl: string): MergeRequestVotesDto {
        this['avatar_url'] = avatarUrl;
        return this;
    }
    public set avatarUrl(avatarUrl: string  | undefined) {
        this['avatar_url'] = avatarUrl;
    }
    public get avatarUrl(): string | undefined {
        return this['avatar_url'];
    }
    public withNickName(nickName: string): MergeRequestVotesDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): MergeRequestVotesDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
}