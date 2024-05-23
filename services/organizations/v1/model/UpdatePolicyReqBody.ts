

export class UpdatePolicyReqBody {
    public content?: string;
    public description?: string;
    public name?: string;
    public constructor() { 
    }
    public withContent(content: string): UpdatePolicyReqBody {
        this['content'] = content;
        return this;
    }
    public withDescription(description: string): UpdatePolicyReqBody {
        this['description'] = description;
        return this;
    }
    public withName(name: string): UpdatePolicyReqBody {
        this['name'] = name;
        return this;
    }
}