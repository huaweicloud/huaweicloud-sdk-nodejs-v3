import { ImageHighresolutionMattingConfig } from './ImageHighresolutionMattingConfig';
import { ImageHighresolutionMattingInput } from './ImageHighresolutionMattingInput';
import { TaskCallback } from './TaskCallback';
import { TaskOutput } from './TaskOutput';


export class ImageHighresolutionMattingRequestBody {
    public input?: ImageHighresolutionMattingInput;
    public output?: TaskOutput;
    public callback?: TaskCallback;
    public config?: ImageHighresolutionMattingConfig;
    public constructor(input?: ImageHighresolutionMattingInput, output?: TaskOutput, config?: ImageHighresolutionMattingConfig) { 
        this['input'] = input;
        this['output'] = output;
        this['config'] = config;
    }
    public withInput(input: ImageHighresolutionMattingInput): ImageHighresolutionMattingRequestBody {
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