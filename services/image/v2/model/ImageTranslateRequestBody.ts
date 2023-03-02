import { ImageTranslateConfig } from './ImageTranslateConfig';
import { TaskCallback } from './TaskCallback';
import { TaskInput } from './TaskInput';
import { TaskOutput } from './TaskOutput';


export class ImageTranslateRequestBody {
    public input: TaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config: ImageTranslateConfig;
    public constructor(input?: any, output?: any, config?: any) { 
        this['input'] = input;
        this['output'] = output;
        this['config'] = config;
    }
    public withInput(input: TaskInput): ImageTranslateRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): ImageTranslateRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): ImageTranslateRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: ImageTranslateConfig): ImageTranslateRequestBody {
        this['config'] = config;
        return this;
    }
}