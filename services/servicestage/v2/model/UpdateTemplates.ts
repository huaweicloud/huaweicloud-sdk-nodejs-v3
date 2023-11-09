

export class UpdateTemplates {
    public name?: string;
    public description?: string;
    public tags?: Array<string>;
    public status?: number;
    private 'obs_url'?: string;
    private 'is_servicestage'?: number;
    public constructor() { 
    }
    public withName(name: string): UpdateTemplates {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateTemplates {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<string>): UpdateTemplates {
        this['tags'] = tags;
        return this;
    }
    public withStatus(status: number): UpdateTemplates {
        this['status'] = status;
        return this;
    }
    public withObsUrl(obsUrl: string): UpdateTemplates {
        this['obs_url'] = obsUrl;
        return this;
    }
    public set obsUrl(obsUrl: string  | undefined) {
        this['obs_url'] = obsUrl;
    }
    public get obsUrl(): string | undefined {
        return this['obs_url'];
    }
    public withIsServicestage(isServicestage: number): UpdateTemplates {
        this['is_servicestage'] = isServicestage;
        return this;
    }
    public set isServicestage(isServicestage: number  | undefined) {
        this['is_servicestage'] = isServicestage;
    }
    public get isServicestage(): number | undefined {
        return this['is_servicestage'];
    }
}