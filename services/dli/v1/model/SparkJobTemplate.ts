import { SparkJobTemplateDetail } from './SparkJobTemplateDetail';


export class SparkJobTemplate {
    public type?: string;
    public id?: string;
    public name?: string;
    public body?: SparkJobTemplateDetail;
    public group?: string;
    public description?: string;
    public language?: string;
    public owner?: string;
    public constructor() { 
    }
    public withType(type: string): SparkJobTemplate {
        this['type'] = type;
        return this;
    }
    public withId(id: string): SparkJobTemplate {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SparkJobTemplate {
        this['name'] = name;
        return this;
    }
    public withBody(body: SparkJobTemplateDetail): SparkJobTemplate {
        this['body'] = body;
        return this;
    }
    public withGroup(group: string): SparkJobTemplate {
        this['group'] = group;
        return this;
    }
    public withDescription(description: string): SparkJobTemplate {
        this['description'] = description;
        return this;
    }
    public withLanguage(language: string): SparkJobTemplate {
        this['language'] = language;
        return this;
    }
    public withOwner(owner: string): SparkJobTemplate {
        this['owner'] = owner;
        return this;
    }
}