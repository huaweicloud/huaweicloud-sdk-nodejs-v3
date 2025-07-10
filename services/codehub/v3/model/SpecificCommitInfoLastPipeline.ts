

export class SpecificCommitInfoLastPipeline {
    public id?: number;
    public sha?: string;
    public ref?: string;
    public status?: string;
    private 'web_url'?: string;
    public constructor() { 
    }
    public withId(id: number): SpecificCommitInfoLastPipeline {
        this['id'] = id;
        return this;
    }
    public withSha(sha: string): SpecificCommitInfoLastPipeline {
        this['sha'] = sha;
        return this;
    }
    public withRef(ref: string): SpecificCommitInfoLastPipeline {
        this['ref'] = ref;
        return this;
    }
    public withStatus(status: string): SpecificCommitInfoLastPipeline {
        this['status'] = status;
        return this;
    }
    public withWebUrl(webUrl: string): SpecificCommitInfoLastPipeline {
        this['web_url'] = webUrl;
        return this;
    }
    public set webUrl(webUrl: string  | undefined) {
        this['web_url'] = webUrl;
    }
    public get webUrl(): string | undefined {
        return this['web_url'];
    }
}