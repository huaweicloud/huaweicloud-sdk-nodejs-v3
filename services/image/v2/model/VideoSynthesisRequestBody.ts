import { TaskCallback } from './TaskCallback';
import { TaskInput } from './TaskInput';
import { TaskOutput } from './TaskOutput';
import { VideoSynthesisConfig } from './VideoSynthesisConfig';


export class VideoSynthesisRequestBody {
    public input: TaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config: VideoSynthesisConfig;
    public constructor(input?: any, output?: any, config?: any) { 
        this['input'] = input;
        this['output'] = output;
        this['config'] = config;
    }
    public withInput(input: TaskInput): VideoSynthesisRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): VideoSynthesisRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): VideoSynthesisRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: VideoSynthesisConfig): VideoSynthesisRequestBody {
        this['config'] = config;
        return this;
    }
}