

export class RepositoryTemplateDto {
    private 'repository_id'?: number;
    public name?: string;
    public system?: boolean;
    public tags?: Array<string>;
    public description?: string;
    public language?: string;
    private 'repository_name'?: string;
    private 'brief_introduction'?: string;
    private 'created_at'?: string;
    private 'used_times'?: number;
    private 'liked_times'?: number;
    private 'creator_name'?: string;
    private 'https_url'?: string;
    public constructor() { 
    }
    public withRepositoryId(repositoryId: number): RepositoryTemplateDto {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withName(name: string): RepositoryTemplateDto {
        this['name'] = name;
        return this;
    }
    public withSystem(system: boolean): RepositoryTemplateDto {
        this['system'] = system;
        return this;
    }
    public withTags(tags: Array<string>): RepositoryTemplateDto {
        this['tags'] = tags;
        return this;
    }
    public withDescription(description: string): RepositoryTemplateDto {
        this['description'] = description;
        return this;
    }
    public withLanguage(language: string): RepositoryTemplateDto {
        this['language'] = language;
        return this;
    }
    public withRepositoryName(repositoryName: string): RepositoryTemplateDto {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withBriefIntroduction(briefIntroduction: string): RepositoryTemplateDto {
        this['brief_introduction'] = briefIntroduction;
        return this;
    }
    public set briefIntroduction(briefIntroduction: string  | undefined) {
        this['brief_introduction'] = briefIntroduction;
    }
    public get briefIntroduction(): string | undefined {
        return this['brief_introduction'];
    }
    public withCreatedAt(createdAt: string): RepositoryTemplateDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUsedTimes(usedTimes: number): RepositoryTemplateDto {
        this['used_times'] = usedTimes;
        return this;
    }
    public set usedTimes(usedTimes: number  | undefined) {
        this['used_times'] = usedTimes;
    }
    public get usedTimes(): number | undefined {
        return this['used_times'];
    }
    public withLikedTimes(likedTimes: number): RepositoryTemplateDto {
        this['liked_times'] = likedTimes;
        return this;
    }
    public set likedTimes(likedTimes: number  | undefined) {
        this['liked_times'] = likedTimes;
    }
    public get likedTimes(): number | undefined {
        return this['liked_times'];
    }
    public withCreatorName(creatorName: string): RepositoryTemplateDto {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withHttpsUrl(httpsUrl: string): RepositoryTemplateDto {
        this['https_url'] = httpsUrl;
        return this;
    }
    public set httpsUrl(httpsUrl: string  | undefined) {
        this['https_url'] = httpsUrl;
    }
    public get httpsUrl(): string | undefined {
        return this['https_url'];
    }
}