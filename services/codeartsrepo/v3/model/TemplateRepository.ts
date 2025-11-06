

export class TemplateRepository {
    public id?: number;
    public name?: string;
    private 'template_name'?: string;
    public tags?: Array<string>;
    public description?: string;
    private 'brief_introduction'?: string;
    private 'auto_pending_pipelines'?: number;
    public language?: string;
    private 'created_at'?: string;
    private 'used_times'?: number;
    private 'liked_times'?: number;
    private 'creator_name'?: string;
    private 'https_url'?: string;
    public constructor() { 
    }
    public withId(id: number): TemplateRepository {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TemplateRepository {
        this['name'] = name;
        return this;
    }
    public withTemplateName(templateName: string): TemplateRepository {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTags(tags: Array<string>): TemplateRepository {
        this['tags'] = tags;
        return this;
    }
    public withDescription(description: string): TemplateRepository {
        this['description'] = description;
        return this;
    }
    public withBriefIntroduction(briefIntroduction: string): TemplateRepository {
        this['brief_introduction'] = briefIntroduction;
        return this;
    }
    public set briefIntroduction(briefIntroduction: string  | undefined) {
        this['brief_introduction'] = briefIntroduction;
    }
    public get briefIntroduction(): string | undefined {
        return this['brief_introduction'];
    }
    public withAutoPendingPipelines(autoPendingPipelines: number): TemplateRepository {
        this['auto_pending_pipelines'] = autoPendingPipelines;
        return this;
    }
    public set autoPendingPipelines(autoPendingPipelines: number  | undefined) {
        this['auto_pending_pipelines'] = autoPendingPipelines;
    }
    public get autoPendingPipelines(): number | undefined {
        return this['auto_pending_pipelines'];
    }
    public withLanguage(language: string): TemplateRepository {
        this['language'] = language;
        return this;
    }
    public withCreatedAt(createdAt: string): TemplateRepository {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUsedTimes(usedTimes: number): TemplateRepository {
        this['used_times'] = usedTimes;
        return this;
    }
    public set usedTimes(usedTimes: number  | undefined) {
        this['used_times'] = usedTimes;
    }
    public get usedTimes(): number | undefined {
        return this['used_times'];
    }
    public withLikedTimes(likedTimes: number): TemplateRepository {
        this['liked_times'] = likedTimes;
        return this;
    }
    public set likedTimes(likedTimes: number  | undefined) {
        this['liked_times'] = likedTimes;
    }
    public get likedTimes(): number | undefined {
        return this['liked_times'];
    }
    public withCreatorName(creatorName: string): TemplateRepository {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withHttpsUrl(httpsUrl: string): TemplateRepository {
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