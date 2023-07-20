

export class TemplateProductExt {
    public id?: string;
    public productshort?: string;
    private 'product_name'?: string;
    private 'home_link'?: string;
    private 'api_link'?: string;
    private 'sdk_link'?: string;
    private 'doc_link'?: string;
    private 'logo_link'?: string;
    public constructor() { 
    }
    public withId(id: string): TemplateProductExt {
        this['id'] = id;
        return this;
    }
    public withProductshort(productshort: string): TemplateProductExt {
        this['productshort'] = productshort;
        return this;
    }
    public withProductName(productName: string): TemplateProductExt {
        this['product_name'] = productName;
        return this;
    }
    public set productName(productName: string  | undefined) {
        this['product_name'] = productName;
    }
    public get productName(): string | undefined {
        return this['product_name'];
    }
    public withHomeLink(homeLink: string): TemplateProductExt {
        this['home_link'] = homeLink;
        return this;
    }
    public set homeLink(homeLink: string  | undefined) {
        this['home_link'] = homeLink;
    }
    public get homeLink(): string | undefined {
        return this['home_link'];
    }
    public withApiLink(apiLink: string): TemplateProductExt {
        this['api_link'] = apiLink;
        return this;
    }
    public set apiLink(apiLink: string  | undefined) {
        this['api_link'] = apiLink;
    }
    public get apiLink(): string | undefined {
        return this['api_link'];
    }
    public withSdkLink(sdkLink: string): TemplateProductExt {
        this['sdk_link'] = sdkLink;
        return this;
    }
    public set sdkLink(sdkLink: string  | undefined) {
        this['sdk_link'] = sdkLink;
    }
    public get sdkLink(): string | undefined {
        return this['sdk_link'];
    }
    public withDocLink(docLink: string): TemplateProductExt {
        this['doc_link'] = docLink;
        return this;
    }
    public set docLink(docLink: string  | undefined) {
        this['doc_link'] = docLink;
    }
    public get docLink(): string | undefined {
        return this['doc_link'];
    }
    public withLogoLink(logoLink: string): TemplateProductExt {
        this['logo_link'] = logoLink;
        return this;
    }
    public set logoLink(logoLink: string  | undefined) {
        this['logo_link'] = logoLink;
    }
    public get logoLink(): string | undefined {
        return this['logo_link'];
    }
}