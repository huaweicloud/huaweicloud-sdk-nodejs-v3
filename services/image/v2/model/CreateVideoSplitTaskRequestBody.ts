import { TaskCallback } from './TaskCallback';
import { TaskOutput } from './TaskOutput';
import { VideoSplitTaskInput } from './VideoSplitTaskInput';


export class CreateVideoSplitTaskRequestBody {
    public input: VideoSplitTaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public constructor(input?: any, output?: any) { 
        this['input'] = input;
        this['output'] = output;
    }
    public withInput(input: VideoSplitTaskInput): CreateVideoSplitTaskRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): CreateVideoSplitTaskRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): CreateVideoSplitTaskRequestBody {
        this['callback'] = callback;
        return this;
    }
}