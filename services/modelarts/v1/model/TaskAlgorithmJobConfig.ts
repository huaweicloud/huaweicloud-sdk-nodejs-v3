import { Input } from './Input';
import { Output } from './Output';
import { Parameter } from './Parameter';
import { TaskAlgorithmJobConfigEngine } from './TaskAlgorithmJobConfigEngine';


export class TaskAlgorithmJobConfig {
    public parameters?: Array<Parameter>;
    public inputs?: Array<Input>;
    public outputs?: Array<Output>;
    public engine?: TaskAlgorithmJobConfigEngine;
    public constructor() { 
    }
    public withParameters(parameters: Array<Parameter>): TaskAlgorithmJobConfig {
        this['parameters'] = parameters;
        return this;
    }
    public withInputs(inputs: Array<Input>): TaskAlgorithmJobConfig {
        this['inputs'] = inputs;
        return this;
    }
    public withOutputs(outputs: Array<Output>): TaskAlgorithmJobConfig {
        this['outputs'] = outputs;
        return this;
    }
    public withEngine(engine: TaskAlgorithmJobConfigEngine): TaskAlgorithmJobConfig {
        this['engine'] = engine;
        return this;
    }
}