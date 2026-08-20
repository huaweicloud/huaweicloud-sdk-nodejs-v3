import { ExtensionExecutionStep } from './ExtensionExecutionStep';


export class ExtensionExecution {
    public steps?: Array<ExtensionExecutionStep>;
    public constructor() { 
    }
    public withSteps(steps: Array<ExtensionExecutionStep>): ExtensionExecution {
        this['steps'] = steps;
        return this;
    }
}