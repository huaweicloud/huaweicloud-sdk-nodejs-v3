import { TaskCallback } from './TaskCallback';
import { TaskInput } from './TaskInput';
import { TaskOutput } from './TaskOutput';
import { VideoTranslateConfig } from './VideoTranslateConfig';


export class VideoTranslateRequestBody {
    public input: TaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config?: VideoTranslateConfig;
    public constructor(input?: any, output?: any) { 
        this['input'] = input;
        this['output'] = output;
    }
    public withInput(input: TaskInput): VideoTranslateRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): VideoTranslateRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): VideoTranslateRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: VideoTranslateConfig): VideoTranslateRequestBody {
        this['config'] = config;
        return this;
    }
}