import { SummarizationAnalysisConfig } from './SummarizationAnalysisConfig';
import { TaskCallback } from './TaskCallback';
import { TaskOutput } from './TaskOutput';
import { VideoSummarizationTaskInput } from './VideoSummarizationTaskInput';


export class CreateVideoSummarizationTaskRequestBody {
    public input: VideoSummarizationTaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config: SummarizationAnalysisConfig;
    public constructor(input?: any, output?: any, config?: any) { 
        this['input'] = input;
        this['output'] = output;
        this['config'] = config;
    }
    public withInput(input: VideoSummarizationTaskInput): CreateVideoSummarizationTaskRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): CreateVideoSummarizationTaskRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): CreateVideoSummarizationTaskRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: SummarizationAnalysisConfig): CreateVideoSummarizationTaskRequestBody {
        this['config'] = config;
        return this;
    }
}