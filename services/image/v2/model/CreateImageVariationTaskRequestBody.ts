import { ImageVariationTaskConfig } from './ImageVariationTaskConfig';
import { TaskCallback } from './TaskCallback';
import { TaskInput } from './TaskInput';
import { TaskOutput } from './TaskOutput';


export class CreateImageVariationTaskRequestBody {
    public input: TaskInput;
    public output: TaskOutput;
    public callback?: TaskCallback;
    public config: ImageVariationTaskConfig;
    public constructor(input?: any, output?: any, config?: any) { 
        this['input'] = input;
        this['output'] = output;
        this['config'] = config;
    }
    public withInput(input: TaskInput): CreateImageVariationTaskRequestBody {
        this['input'] = input;
        return this;
    }
    public withOutput(output: TaskOutput): CreateImageVariationTaskRequestBody {
        this['output'] = output;
        return this;
    }
    public withCallback(callback: TaskCallback): CreateImageVariationTaskRequestBody {
        this['callback'] = callback;
        return this;
    }
    public withConfig(config: ImageVariationTaskConfig): CreateImageVariationTaskRequestBody {
        this['config'] = config;
        return this;
    }
}