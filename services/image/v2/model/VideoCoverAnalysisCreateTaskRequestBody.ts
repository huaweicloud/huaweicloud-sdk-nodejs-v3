import { TaskCallback } from './TaskCallback';
import { TaskInput } from './TaskInput';
import { TaskOutput } from './TaskOutput';
import { VideoCoverAnalysisConfig } from './VideoCoverAnalysisConfig';


export class VideoCoverAnalysisCreateTaskRequestBody {
    public input: TaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config?: VideoCoverAnalysisConfig;
    public constructor(input?: any, output?: any) { 
        this['input'] = input;
        this['output'] = output;
    }
    public withInput(input: TaskInput): VideoCoverAnalysisCreateTaskRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): VideoCoverAnalysisCreateTaskRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): VideoCoverAnalysisCreateTaskRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: VideoCoverAnalysisConfig): VideoCoverAnalysisCreateTaskRequestBody {
        this['config'] = config;
        return this;
    }
}