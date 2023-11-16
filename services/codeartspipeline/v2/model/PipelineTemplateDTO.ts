import { CustomVariable } from './CustomVariable';


export class PipelineTemplateDTO {
    public name?: string;
    public description?: string;
    public language?: string;
    public variables?: CustomVariable;
    public definition?: string;
    private 'is_system'?: boolean;
    private 'domain_id'?: string;
    private 'is_show_source'?: boolean;
    public constructor(name?: string, language?: string, definition?: string, isSystem?: boolean, domainId?: string, isShowSource?: boolean) { 
        this['name'] = name;
        this['language'] = language;
        this['definition'] = definition;
        this['is_system'] = isSystem;
        this['domain_id'] = domainId;
        this['is_show_source'] = isShowSource;
    }
    public withName(name: string): PipelineTemplateDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PipelineTemplateDTO {
        this['description'] = description;
        return this;
    }
    public withLanguage(language: string): PipelineTemplateDTO {
        this['language'] = language;
        return this;
    }
    public withVariables(variables: CustomVariable): PipelineTemplateDTO {
        this['variables'] = variables;
        return this;
    }
    public withDefinition(definition: string): PipelineTemplateDTO {
        this['definition'] = definition;
        return this;
    }
    public withIsSystem(isSystem: boolean): PipelineTemplateDTO {
        this['is_system'] = isSystem;
        return this;
    }
    public set isSystem(isSystem: boolean  | undefined) {
        this['is_system'] = isSystem;
    }
    public get isSystem(): boolean | undefined {
        return this['is_system'];
    }
    public withDomainId(domainId: string): PipelineTemplateDTO {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withIsShowSource(isShowSource: boolean): PipelineTemplateDTO {
        this['is_show_source'] = isShowSource;
        return this;
    }
    public set isShowSource(isShowSource: boolean  | undefined) {
        this['is_show_source'] = isShowSource;
    }
    public get isShowSource(): boolean | undefined {
        return this['is_show_source'];
    }
}