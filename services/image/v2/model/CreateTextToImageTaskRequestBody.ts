import { TaskCallback } from './TaskCallback';
import { TaskOutput } from './TaskOutput';
import { TextToImageTaskConfig } from './TextToImageTaskConfig';


export class CreateTextToImageTaskRequestBody {
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config: TextToImageTaskConfig;
    public constructor(output?: any, config?: any) { 
        this['output'] = output;
        this['config'] = config;
    }
    public withOutput(output: TaskOutput): CreateTextToImageTaskRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): CreateTextToImageTaskRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: TextToImageTaskConfig): CreateTextToImageTaskRequestBody {
        this['config'] = config;
        return this;
    }
}