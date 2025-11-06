import { UserBasicDto } from './UserBasicDto';


export class LiteMergeRequestDto {
    public id?: number;
    private 'repository_id'?: number;
    public title?: string;
    public description?: string;
    public state?: string;
    private 'source_branch'?: string;
    private 'target_branch'?: string;
    public author?: UserBasicDto;
    private 'web_url'?: string;
    private 'create_at'?: string;
    private 'update_at'?: string;
    public constructor() { 
    }
    public withId(id: number): LiteMergeRequestDto {
        this['id'] = id;
        return this;
    }
    public withRepositoryId(repositoryId: number): LiteMergeRequestDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withTitle(title: string): LiteMergeRequestDto {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): LiteMergeRequestDto {
        this['description'] = description;
        return this;
    }
    public withState(state: string): LiteMergeRequestDto {
        this['state'] = state;
        return this;
    }
    public withSourceBranch(sourceBranch: string): LiteMergeRequestDto {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTargetBranch(targetBranch: string): LiteMergeRequestDto {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withAuthor(author: UserBasicDto): LiteMergeRequestDto {
        this['author'] = author;
        return this;
    }
    public withWebUrl(webUrl: string): LiteMergeRequestDto {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
    public withCreateAt(createAt: string): LiteMergeRequestDto {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): LiteMergeRequestDto {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
}