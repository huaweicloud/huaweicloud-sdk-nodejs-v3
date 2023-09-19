

export class CustomTemplates {
    public id?: string;
    public name?: string;
    public confContent?: string;
    public desc?: string;
    public constructor() { 
    }
    public withId(id: string): CustomTemplates {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CustomTemplates {
        this['name'] = name;
        return this;
    }
    public withConfContent(confContent: string): CustomTemplates {
        this['confContent'] = confContent;
        return this;
    }
    public withDesc(desc: string): CustomTemplates {
        this['desc'] = desc;
        return this;
    }
}