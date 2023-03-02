import { SummarizationAnalysisConfig } from './SummarizationAnalysisConfig';
import { TaskCallback } from './TaskCallback';
import { TaskInput } from './TaskInput';
import { TaskOutput } from './TaskOutput';


export class VideoSummarizationCreateTaskRequestBody {
    public input: TaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config: SummarizationAnalysisConfig;
    public constructor(input?: any, output?: any, config?: any) { 
        this['input'] = input;
        this['output'] = output;
        this['config'] = config;
    }
    public withInput(input: TaskInput): VideoSummarizationCreateTaskRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): VideoSummarizationCreateTaskRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): VideoSummarizationCreateTaskRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: SummarizationAnalysisConfig): VideoSummarizationCreateTaskRequestBody {
        this['config'] = config;
        return this;
    }
}