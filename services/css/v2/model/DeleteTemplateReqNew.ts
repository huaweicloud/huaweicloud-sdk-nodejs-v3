

export class DeleteTemplateReqNew {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): DeleteTemplateReqNew {
        this['name'] = name;
        return this;
    }
}