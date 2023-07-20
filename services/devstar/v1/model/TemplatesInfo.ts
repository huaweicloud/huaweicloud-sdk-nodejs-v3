

export class TemplatesInfo {
    private 'template_ids'?: Array<string>;
    private 'platform_source'?: number;
    public constructor(templateIds?: Array<string>, platformSource?: number) { 
        this['template_ids'] = templateIds;
        this['platform_source'] = platformSource;
    }
    public withTemplateIds(templateIds: Array<string>): TemplatesInfo {
        this['template_ids'] = templateIds;
        return this;
    }
    public set templateIds(templateIds: Array<string>  | undefined) {
        this['template_ids'] = templateIds;
    }
    public get templateIds(): Array<string> | undefined {
        return this['template_ids'];
    }
    public withPlatformSource(platformSource: number): TemplatesInfo {
        this['platform_source'] = platformSource;
        return this;
    }
    public set platformSource(platformSource: number  | undefined) {
        this['platform_source'] = platformSource;
    }
    public get platformSource(): number | undefined {
        return this['platform_source'];
    }
}