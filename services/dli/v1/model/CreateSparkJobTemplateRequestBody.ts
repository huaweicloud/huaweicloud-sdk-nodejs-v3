

export class CreateSparkJobTemplateRequestBody {
    public type?: string;
    public name?: string;
    public body?: string;
    public group?: string;
    public description?: string;
    public language?: string;
    public constructor(type?: string, name?: string, body?: string) { 
        this['type'] = type;
        this['name'] = name;
        this['body'] = body;
    }
    public withType(type: string): CreateSparkJobTemplateRequestBody {
        this['type'] = type;
        return this;
    }
    public withName(name: string): CreateSparkJobTemplateRequestBody {
        this['name'] = name;
        return this;
    }
    public withBody(body: string): CreateSparkJobTemplateRequestBody {
        this['body'] = body;
        return this;
    }
    public withGroup(group: string): CreateSparkJobTemplateRequestBody {
        this['group'] = group;
        return this;
    }
    public withDescription(description: string): CreateSparkJobTemplateRequestBody {
        this['description'] = description;
        return this;
    }
    public withLanguage(language: string): CreateSparkJobTemplateRequestBody {
        this['language'] = language;
        return this;
    }
}