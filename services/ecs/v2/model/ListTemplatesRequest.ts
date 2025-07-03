

export class ListTemplatesRequest {
    public limit?: number;
    public marker?: string;
    private 'launch_template_id'?: Array<string>;
    public name?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListTemplatesRequest {
        this['marker'] = marker;
        return this;
    }
    public withLaunchTemplateId(launchTemplateId: Array<string>): ListTemplatesRequest {
        this['launch_template_id'] = launchTemplateId;
        return this;
    }
    public set launchTemplateId(launchTemplateId: Array<string>  | undefined) {
        this['launch_template_id'] = launchTemplateId;
    }
    public get launchTemplateId(): Array<string> | undefined {
        return this['launch_template_id'];
    }
    public withName(name: Array<string>): ListTemplatesRequest {
        this['name'] = name;
        return this;
    }
}