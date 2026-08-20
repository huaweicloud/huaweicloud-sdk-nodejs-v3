

export class UpdateThirdPartyAssociateVO {
    public title?: string;
    public url?: string;
    public id?: string;
    public constructor(title?: string, url?: string, id?: string) { 
        this['title'] = title;
        this['url'] = url;
        this['id'] = id;
    }
    public withTitle(title: string): UpdateThirdPartyAssociateVO {
        this['title'] = title;
        return this;
    }
    public withUrl(url: string): UpdateThirdPartyAssociateVO {
        this['url'] = url;
        return this;
    }
    public withId(id: string): UpdateThirdPartyAssociateVO {
        this['id'] = id;
        return this;
    }
}