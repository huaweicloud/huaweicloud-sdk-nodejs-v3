import { TaskCallback } from './TaskCallback';
import { TaskOutput } from './TaskOutput';
import { VideoCoverAnalysisConfig } from './VideoCoverAnalysisConfig';
import { VideoCoverAnalysisTaskInput } from './VideoCoverAnalysisTaskInput';


export class CreateVideoCoverAnalysisTaskRequestBody {
    public input: VideoCoverAnalysisTaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config?: VideoCoverAnalysisConfig;
    public constructor(input?: any, output?: any) { 
        this['input'] = input;
        this['output'] = output;
    }
    public withInput(input: VideoCoverAnalysisTaskInput): CreateVideoCoverAnalysisTaskRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): CreateVideoCoverAnalysisTaskRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): CreateVideoCoverAnalysisTaskRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: VideoCoverAnalysisConfig): CreateVideoCoverAnalysisTaskRequestBody {
        this['config'] = config;
        return this;
    }
}