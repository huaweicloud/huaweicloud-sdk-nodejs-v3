import { Parameter } from './Parameter';
import { QueryTemplate } from './QueryTemplate';


export class TemplateList {
    public language?: string;
    public favourite?: boolean;
    public uuid?: string;
    public type?: string;
    public name?: string;
    public weight?: number;
    public scope?: string;
    public description?: string;
    private 'nick_name'?: string;
    private 'public'?: boolean;
    private 'tool_type'?: string;
    public template?: QueryTemplate;
    public parameters?: Array<Parameter>;
    public constructor() { 
    }
    public withLanguage(language: string): TemplateList {
        this['language'] = language;
        return this;
    }
    public withFavourite(favourite: boolean): TemplateList {
        this['favourite'] = favourite;
        return this;
    }
    public withUuid(uuid: string): TemplateList {
        this['uuid'] = uuid;
        return this;
    }
    public withType(type: string): TemplateList {
        this['type'] = type;
        return this;
    }
    public withName(name: string): TemplateList {
        this['name'] = name;
        return this;
    }
    public withWeight(weight: number): TemplateList {
        this['weight'] = weight;
        return this;
    }
    public withScope(scope: string): TemplateList {
        this['scope'] = scope;
        return this;
    }
    public withDescription(description: string): TemplateList {
        this['description'] = description;
        return this;
    }
    public withNickName(nickName: string): TemplateList {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withPublic(_public: boolean): TemplateList {
        this['public'] = _public;
        return this;
    }
    public set _public(_public: boolean  | undefined) {
        this['public'] = _public;
    }
    public get _public(): boolean | undefined {
        return this['public'];
    }
    public withToolType(toolType: string): TemplateList {
        this['tool_type'] = toolType;
        return this;
    }
    public set toolType(toolType: string  | undefined) {
        this['tool_type'] = toolType;
    }
    public get toolType(): string | undefined {
        return this['tool_type'];
    }
    public withTemplate(template: QueryTemplate): TemplateList {
        this['template'] = template;
        return this;
    }
    public withParameters(parameters: Array<Parameter>): TemplateList {
        this['parameters'] = parameters;
        return this;
    }
}