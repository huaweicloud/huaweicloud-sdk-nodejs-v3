

export class ListAddonTemplatesRequest {
    private 'Content-Type'?: string;
    private 'addon_template_name'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListAddonTemplatesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withAddonTemplateName(addonTemplateName: string): ListAddonTemplatesRequest {
        this['addon_template_name'] = addonTemplateName;
        return this;
    }
    public set addonTemplateName(addonTemplateName: string  | undefined) {
        this['addon_template_name'] = addonTemplateName;
    }
    public get addonTemplateName(): string | undefined {
        return this['addon_template_name'];
    }
}