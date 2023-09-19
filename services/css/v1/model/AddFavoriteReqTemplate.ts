

export class AddFavoriteReqTemplate {
    public templateName?: string;
    public desc?: string;
    public constructor(templateName?: string) { 
        this['templateName'] = templateName;
    }
    public withTemplateName(templateName: string): AddFavoriteReqTemplate {
        this['templateName'] = templateName;
        return this;
    }
    public withDesc(desc: string): AddFavoriteReqTemplate {
        this['desc'] = desc;
        return this;
    }
}