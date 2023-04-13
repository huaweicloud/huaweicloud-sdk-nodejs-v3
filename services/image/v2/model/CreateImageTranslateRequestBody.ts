import { ImageTranslateConfig } from './ImageTranslateConfig';
import { ImageTranslateTaskInput } from './ImageTranslateTaskInput';
import { TaskCallback } from './TaskCallback';
import { TaskOutput } from './TaskOutput';


export class CreateImageTranslateRequestBody {
    public input: ImageTranslateTaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config: ImageTranslateConfig;
    public constructor(input?: any, output?: any, config?: any) { 
        this['input'] = input;
        this['output'] = output;
        this['config'] = config;
    }
    public withInput(input: ImageTranslateTaskInput): CreateImageTranslateRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): CreateImageTranslateRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): CreateImageTranslateRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: ImageTranslateConfig): CreateImageTranslateRequestBody {
        this['config'] = config;
        return this;
    }
}