import { ImageToVideoConfig } from './ImageToVideoConfig';
import { TaskCallback } from './TaskCallback';
import { TaskInput } from './TaskInput';
import { TaskOutput } from './TaskOutput';


export class ImageToVideoRequestBody {
    public input: TaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config: ImageToVideoConfig;
    public constructor(input?: any, output?: any, config?: any) { 
        this['input'] = input;
        this['output'] = output;
        this['config'] = config;
    }
    public withInput(input: TaskInput): ImageToVideoRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): ImageToVideoRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): ImageToVideoRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: ImageToVideoConfig): ImageToVideoRequestBody {
        this['config'] = config;
        return this;
    }
}