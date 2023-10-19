

export class UpdateCustomTemplateBody {
    public name?: string;
    public description?: string;
    public params?: { [key: string]: string; };
    public constructor() { 
    }
    public withName(name: string): UpdateCustomTemplateBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateCustomTemplateBody {
        this['description'] = description;
        return this;
    }
    public withParams(params: { [key: string]: string; }): UpdateCustomTemplateBody {
        this['params'] = params;
        return this;
    }
}