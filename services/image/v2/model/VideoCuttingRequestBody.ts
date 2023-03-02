import { TaskCallback } from './TaskCallback';
import { TaskInput } from './TaskInput';
import { TaskOutput } from './TaskOutput';
import { VideoCuttingConfig } from './VideoCuttingConfig';


export class VideoCuttingRequestBody {
    public input: TaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config?: VideoCuttingConfig;
    public constructor(input?: any, output?: any) { 
        this['input'] = input;
        this['output'] = output;
    }
    public withInput(input: TaskInput): VideoCuttingRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): VideoCuttingRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): VideoCuttingRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: VideoCuttingConfig): VideoCuttingRequestBody {
        this['config'] = config;
        return this;
    }
}