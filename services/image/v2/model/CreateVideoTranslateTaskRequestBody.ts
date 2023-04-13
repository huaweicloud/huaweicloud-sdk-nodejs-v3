import { TaskCallback } from './TaskCallback';
import { TaskOutput } from './TaskOutput';
import { VideoTranslateConfig } from './VideoTranslateConfig';
import { VideoTranslateTaskInput } from './VideoTranslateTaskInput';


export class CreateVideoTranslateTaskRequestBody {
    public input: VideoTranslateTaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config?: VideoTranslateConfig;
    public constructor(input?: any, output?: any) { 
        this['input'] = input;
        this['output'] = output;
    }
    public withInput(input: VideoTranslateTaskInput): CreateVideoTranslateTaskRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): CreateVideoTranslateTaskRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): CreateVideoTranslateTaskRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: VideoTranslateConfig): CreateVideoTranslateTaskRequestBody {
        this['config'] = config;
        return this;
    }
}