import { LineContentDto } from './LineContentDto';
import { RepositoryCommitDto } from './RepositoryCommitDto';


export class BlameDto {
    public commit?: RepositoryCommitDto;
    private 'avatar_url'?: string;
    public lines?: Array<LineContentDto>;
    private 'nick_name'?: string;
    private 'tenant_name'?: string;
    private 'user_name'?: string;
    public constructor() { 
    }
    public withCommit(commit: RepositoryCommitDto): BlameDto {
        this['commit'] = commit;
        return this;
    }
    public withAvatarUrl(avatarUrl: string): BlameDto {
        this['avatar_url'] = avatarUrl;
        return this;
    }
    public set avatarUrl(avatarUrl: string  | undefined) {
        this['avatar_url'] = avatarUrl;
    }
    public get avatarUrl(): string | undefined {
        return this['avatar_url'];
    }
    public withLines(lines: Array<LineContentDto>): BlameDto {
        this['lines'] = lines;
        return this;
    }
    public withNickName(nickName: string): BlameDto {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withTenantName(tenantName: string): BlameDto {
        this['tenant_name'] = tenantName;
        return this;
    }
    public set tenantName(tenantName: string  | undefined) {
        this['tenant_name'] = tenantName;
    }
    public get tenantName(): string | undefined {
        return this['tenant_name'];
    }
    public withUserName(userName: string): BlameDto {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
}