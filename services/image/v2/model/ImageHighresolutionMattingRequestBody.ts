import { ImageHighresolutionMattingConfig } from './ImageHighresolutionMattingConfig';
import { TaskCallback } from './TaskCallback';
import { TaskInput } from './TaskInput';
import { TaskOutput } from './TaskOutput';


export class ImageHighresolutionMattingRequestBody {
    public input: TaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config: ImageHighresolutionMattingConfig;
    public constructor(input?: any, output?: any, config?: any) { 
        this['input'] = input;
        this['output'] = output;
        this['config'] = config;
    }
    public withInput(input: TaskInput): ImageHighresolutionMattingRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): ImageHighresolutionMattingRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): ImageHighresolutionMattingRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: ImageHighresolutionMattingConfig): ImageHighresolutionMattingRequestBody {
        this['config'] = config;
        return this;
    }
}