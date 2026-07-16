

export class ExecutionActionPolicy {
    private 'rerun_steps'?: Array<string>;
    public constructor() { 
    }
    public withRerunSteps(rerunSteps: Array<string>): ExecutionActionPolicy {
        this['rerun_steps'] = rerunSteps;
        return this;
    }
    public set rerunSteps(rerunSteps: Array<string>  | undefined) {
        this['rerun_steps'] = rerunSteps;
    }
    public get rerunSteps(): Array<string> | undefined {
        return this['rerun_steps'];
    }
}