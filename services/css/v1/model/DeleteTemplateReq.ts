

export class DeleteTemplateReq {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): DeleteTemplateReq {
        this['name'] = name;
        return this;
    }
}