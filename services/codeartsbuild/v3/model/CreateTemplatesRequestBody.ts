import { CreateBuildJobParameter } from './CreateBuildJobParameter';
import { CreateTemplate } from './CreateTemplate';


export class CreateTemplatesRequestBody {
    public template?: CreateTemplate;
    public name?: string;
    public description?: string;
    private 'tool_type'?: string;
    public parameters?: Array<CreateBuildJobParameter>;
    public constructor(template?: CreateTemplate, name?: string) { 
        this['template'] = template;
        this['name'] = name;
    }
    public withTemplate(template: CreateTemplate): CreateTemplatesRequestBody {
        this['template'] = template;
        return this;
    }
    public withName(name: string): CreateTemplatesRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateTemplatesRequestBody {
        this['description'] = description;
        return this;
    }
    public withToolType(toolType: string): CreateTemplatesRequestBody {
        this['tool_type'] = toolType;
        return this;
    }
    public set toolType(toolType: string  | undefined) {
        this['tool_type'] = toolType;
    }
    public get toolType(): string | undefined {
        return this['tool_type'];
    }
    public withParameters(parameters: Array<CreateBuildJobParameter>): CreateTemplatesRequestBody {
        this['parameters'] = parameters;
        return this;
    }
}