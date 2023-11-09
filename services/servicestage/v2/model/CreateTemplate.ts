

export class CreateTemplate {
    public name?: string;
    private 'is_servicestage'?: number;
    public desc?: string;
    private 'obs_url'?: string;
    public tags?: Array<string>;
    public constructor(name?: string, obsUrl?: string) { 
        this['name'] = name;
        this['obs_url'] = obsUrl;
    }
    public withName(name: string): CreateTemplate {
        this['name'] = name;
        return this;
    }
    public withIsServicestage(isServicestage: number): CreateTemplate {
        this['is_servicestage'] = isServicestage;
        return this;
    }
    public set isServicestage(isServicestage: number  | undefined) {
        this['is_servicestage'] = isServicestage;
    }
    public get isServicestage(): number | undefined {
        return this['is_servicestage'];
    }
    public withDesc(desc: string): CreateTemplate {
        this['desc'] = desc;
        return this;
    }
    public withObsUrl(obsUrl: string): CreateTemplate {
        this['obs_url'] = obsUrl;
        return this;
    }
    public set obsUrl(obsUrl: string  | undefined) {
        this['obs_url'] = obsUrl;
    }
    public get obsUrl(): string | undefined {
        return this['obs_url'];
    }
    public withTags(tags: Array<string>): CreateTemplate {
        this['tags'] = tags;
        return this;
    }
}