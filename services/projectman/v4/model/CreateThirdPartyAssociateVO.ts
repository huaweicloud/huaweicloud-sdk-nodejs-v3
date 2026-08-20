

export class CreateThirdPartyAssociateVO {
    public title?: string;
    public url?: string;
    public constructor(title?: string, url?: string) { 
        this['title'] = title;
        this['url'] = url;
    }
    public withTitle(title: string): CreateThirdPartyAssociateVO {
        this['title'] = title;
        return this;
    }
    public withUrl(url: string): CreateThirdPartyAssociateVO {
        this['url'] = url;
        return this;
    }
}