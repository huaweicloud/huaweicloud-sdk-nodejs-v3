import { CodeSource } from './CodeSource';


export class PipelineDTO {
    public name?: string;
    public description?: string;
    private 'is_publish'?: boolean;
    public sources?: Array<CodeSource>;
    public constructor() { 
    }
    public withName(name: string): PipelineDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): PipelineDTO {
        this['description'] = description;
        return this;
    }
    public withIsPublish(isPublish: boolean): PipelineDTO {
        this['is_publish'] = isPublish;
        return this;
    }
    public set isPublish(isPublish: boolean  | undefined) {
        this['is_publish'] = isPublish;
    }
    public get isPublish(): boolean | undefined {
        return this['is_publish'];
    }
    public withSources(sources: Array<CodeSource>): PipelineDTO {
        this['sources'] = sources;
        return this;
    }
}