import { CodeSource } from './CodeSource';
import { PipelineByTemplateDTOVariables } from './PipelineByTemplateDTOVariables';


export class PipelineByTemplateDTO {
    public name?: string;
    public description?: string;
    private 'is_publish'?: boolean;
    public sources?: Array<CodeSource>;
    public variables?: Array<PipelineByTemplateDTOVariables>;
    public constructor() { 
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
    public withVariables(variables: Array<PipelineByTemplateDTOVariables>): PipelineByTemplateDTO {
        this['variables'] = variables;
        return this;
    }
}