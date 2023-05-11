import { TaskCallback } from './TaskCallback';
import { TaskOutput } from './TaskOutput';
import { VideoTaggingMediaTaskInput } from './VideoTaggingMediaTaskInput';
import { VideoTaggingTaskConfig } from './VideoTaggingTaskConfig';


export class CreateVideoTaggingMediaTaskRequestBody {
    public input: VideoTaggingMediaTaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config?: VideoTaggingTaskConfig;
    public constructor(input?: any, output?: any) { 
        this['input'] = input;
        this['output'] = output;
    }
    public withInput(input: VideoTaggingMediaTaskInput): CreateVideoTaggingMediaTaskRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): CreateVideoTaggingMediaTaskRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): CreateVideoTaggingMediaTaskRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: VideoTaggingTaskConfig): CreateVideoTaggingMediaTaskRequestBody {
        this['config'] = config;
        return this;
    }
}