

export class GetDefaultTemplateParam {
    public name?: string;
    public constructor() { 
    }
    public withName(name: string): GetDefaultTemplateParam {
        this['name'] = name;
        return this;
    }
}