

export class SystemTemplates {
    public id?: string;
    public name?: string;
    public confContent?: string;
    public desc?: string;
    public constructor() { 
    }
    public withId(id: string): SystemTemplates {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SystemTemplates {
        this['name'] = name;
        return this;
    }
    public withConfContent(confContent: string): SystemTemplates {
        this['confContent'] = confContent;
        return this;
    }
    public withDesc(desc: string): SystemTemplates {
        this['desc'] = desc;
        return this;
    }
}