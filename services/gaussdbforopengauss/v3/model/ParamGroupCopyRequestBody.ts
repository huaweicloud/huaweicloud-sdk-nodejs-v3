

export class ParamGroupCopyRequestBody {
    public name?: string;
    public description?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): ParamGroupCopyRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ParamGroupCopyRequestBody {
        this['description'] = description;
        return this;
    }
}