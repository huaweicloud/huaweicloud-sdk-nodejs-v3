import { CodeSource } from './CodeSource';
import { PipelineByTemplateDTOVariables } from './PipelineByTemplateDTOVariables';


export class PipelineByTemplateDTO {
    public name?: string;
    public description?: string;
    private 'is_publish'?: boolean;
    public sources?: Array<CodeSource>;
    private 'security_level'?: number;
    private 'confidentiality_code'?: string;
    public variables?: Array<PipelineByTemplateDTOVariables>;
    public constructor(name?: string, isPublish?: boolean, sources?: Array<CodeSource>) { 
        this['name'] = name;
        this['is_publish'] = isPublish;
        this['sources'] = sources;
    }
    public withName(name: string): PipelineByTemplateDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PipelineByTemplateDTO {
        this['description'] = description;
        return this;
    }
    public withIsPublish(isPublish: boolean): PipelineByTemplateDTO {
        this['is_publish'] = isPublish;
        return this;
    }
    public set isPublish(isPublish: boolean  | undefined) {
        this['is_publish'] = isPublish;
    }
    public get isPublish(): boolean | undefined {
        return this['is_publish'];
    }
    public withSources(sources: Array<CodeSource>): PipelineByTemplateDTO {
        this['sources'] = sources;
        return this;
    }
    public withSecurityLevel(securityLevel: number): PipelineByTemplateDTO {
        this['security_level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: number  | undefined) {
        this['security_level'] = securityLevel;
    }
    public get securityLevel(): number | undefined {
        return this['security_level'];
    }
    public withConfidentialityCode(confidentialityCode: string): PipelineByTemplateDTO {
        this['confidentiality_code'] = confidentialityCode;
        return this;
    }
    public set confidentialityCode(confidentialityCode: string  | undefined) {
        this['confidentiality_code'] = confidentialityCode;
    }
    public get confidentialityCode(): string | undefined {
        return this['confidentiality_code'];
    }
    public withVariables(variables: Array<PipelineByTemplateDTOVariables>): PipelineByTemplateDTO {
        this['variables'] = variables;
        return this;
    }
}