

export class AppTemplateResourceDetail {
    private 'resource_name'?: string;
    public icon?: string;
    public href?: string;
    public constructor() { 
    }
    public withResourceName(resourceName: string): AppTemplateResourceDetail {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withIcon(icon: string): AppTemplateResourceDetail {
        this['icon'] = icon;
        return this;
    }
    public withHref(href: string): AppTemplateResourceDetail {
        this['href'] = href;
        return this;
    }
}