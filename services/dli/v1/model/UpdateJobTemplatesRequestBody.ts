

export class UpdateJobTemplatesRequestBody {
    public name?: string;
    public body?: string;
    public group?: string;
    public description?: string;
    public constructor(name?: string, body?: string) { 
        this['name'] = name;
        this['body'] = body;
    }
    public withName(name: string): UpdateJobTemplatesRequestBody {
        this['name'] = name;
        return this;
    }
    public withBody(body: string): UpdateJobTemplatesRequestBody {
        this['body'] = body;
        return this;
    }
    public withGroup(group: string): UpdateJobTemplatesRequestBody {
        this['group'] = group;
        return this;
    }
    public withDescription(description: string): UpdateJobTemplatesRequestBody {
        this['description'] = description;
        return this;
    }
}