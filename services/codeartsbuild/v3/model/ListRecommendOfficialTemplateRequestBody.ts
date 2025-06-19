

export class ListRecommendOfficialTemplateRequestBody {
    private 'git_url'?: string;
    public branch?: string;
    public tags?: string;
    public constructor() { 
    }
    public withGitUrl(gitUrl: string): ListRecommendOfficialTemplateRequestBody {
        this['git_url'] = gitUrl;
        return this;
    }
    public set gitUrl(gitUrl: string  | undefined) {
        this['git_url'] = gitUrl;
    }
    public get gitUrl(): string | undefined {
        return this['git_url'];
    }
    public withBranch(branch: string): ListRecommendOfficialTemplateRequestBody {
        this['branch'] = branch;
        return this;
    }
    public withTags(tags: string): ListRecommendOfficialTemplateRequestBody {
        this['tags'] = tags;
        return this;
    }
}