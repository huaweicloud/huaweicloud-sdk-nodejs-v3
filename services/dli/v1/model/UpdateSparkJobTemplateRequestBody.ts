

export class UpdateSparkJobTemplateRequestBody {
    public name?: string;
    public body?: string;
    public group?: string;
    public description?: string;
    public constructor(name?: string, body?: string) { 
        this['name'] = name;
        this['body'] = body;
    }
    public withName(name: string): UpdateSparkJobTemplateRequestBody {
        this['name'] = name;
        return this;
    }
    public withBody(body: string): UpdateSparkJobTemplateRequestBody {
        this['body'] = body;
        return this;
    }
    public withGroup(group: string): UpdateSparkJobTemplateRequestBody {
        this['group'] = group;
        return this;
    }
    public withDescription(description: string): UpdateSparkJobTemplateRequestBody {
        this['description'] = description;
        return this;
    }
}