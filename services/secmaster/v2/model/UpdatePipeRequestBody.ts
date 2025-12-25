import { PipeCategory } from './PipeCategory';


export class UpdatePipeRequestBody {
    private 'pipe_alias'?: string;
    public description?: string;
    public directory?: string;
    public category?: PipeCategory;
    public constructor() { 
    }
    public withPipeAlias(pipeAlias: string): UpdatePipeRequestBody {
        this['pipe_alias'] = pipeAlias;
        return this;
    }
    public set pipeAlias(pipeAlias: string  | undefined) {
        this['pipe_alias'] = pipeAlias;
    }
    public get pipeAlias(): string | undefined {
        return this['pipe_alias'];
    }
    public withDescription(description: string): UpdatePipeRequestBody {
        this['description'] = description;
        return this;
    }
    public withDirectory(directory: string): UpdatePipeRequestBody {
        this['directory'] = directory;
        return this;
    }
    public withCategory(category: PipeCategory): UpdatePipeRequestBody {
        this['category'] = category;
        return this;
    }
}