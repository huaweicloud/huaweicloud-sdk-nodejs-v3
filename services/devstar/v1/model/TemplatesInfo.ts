

export class TemplatesInfo {
    private 'template_ids': Array<string> | undefined;
    private 'platform_source': number | undefined;
    public constructor(templateIds: any, platformSource: any) { 
        this['template_ids'] = templateIds;
        this['platform_source'] = platformSource;
    }
    public withTemplateIds(templateIds: Array<string>): TemplatesInfo {
        this['template_ids'] = templateIds;
        return this;
    }
    public set templateIds(templateIds: Array<string> | undefined) {
        this['template_ids'] = templateIds;
    }
    public get templateIds() {
        return this['template_ids'];
    }
    public withPlatformSource(platformSource: number): TemplatesInfo {
        this['platform_source'] = platformSource;
        return this;
    }
    public set platformSource(platformSource: number | undefined) {
        this['platform_source'] = platformSource;
    }
    public get platformSource() {
        return this['platform_source'];
    }
}