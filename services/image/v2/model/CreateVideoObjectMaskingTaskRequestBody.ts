import { ObjectMaskingTaskInput } from './ObjectMaskingTaskInput';
import { TaskCallback } from './TaskCallback';
import { TaskOutput } from './TaskOutput';
import { VideoObjectMaskingTaskConfig } from './VideoObjectMaskingTaskConfig';


export class CreateVideoObjectMaskingTaskRequestBody {
    public input: ObjectMaskingTaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config: VideoObjectMaskingTaskConfig;
    public constructor(input?: any, output?: any, config?: any) { 
        this['input'] = input;
        this['output'] = output;
        this['config'] = config;
    }
    public withInput(input: ObjectMaskingTaskInput): CreateVideoObjectMaskingTaskRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): CreateVideoObjectMaskingTaskRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): CreateVideoObjectMaskingTaskRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: VideoObjectMaskingTaskConfig): CreateVideoObjectMaskingTaskRequestBody {
        this['config'] = config;
        return this;
    }
}