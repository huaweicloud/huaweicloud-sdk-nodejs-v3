import { BatchJobInfo } from './BatchJobInfo';


export class JobTemplateInfo {
    public type?: string;
    public id?: string;
    public name?: string;
    public body?: BatchJobInfo;
    public group?: string;
    public description?: string;
    public language?: string;
    public owner?: string;
    public constructor() { 
    }
    public withType(type: string): JobTemplateInfo {
        this['type'] = type;
        return this;
    }
    public withId(id: string): JobTemplateInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): JobTemplateInfo {
        this['name'] = name;
        return this;
    }
    public withBody(body: BatchJobInfo): JobTemplateInfo {
        this['body'] = body;
        return this;
    }
    public withGroup(group: string): JobTemplateInfo {
        this['group'] = group;
        return this;
    }
    public withDescription(description: string): JobTemplateInfo {
        this['description'] = description;
        return this;
    }
    public withLanguage(language: string): JobTemplateInfo {
        this['language'] = language;
        return this;
    }
    public withOwner(owner: string): JobTemplateInfo {
        this['owner'] = owner;
        return this;
    }
}