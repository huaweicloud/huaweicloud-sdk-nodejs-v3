import { OutputRespOutputResult } from './OutputRespOutputResult';


export class OutputRespStepOutputs {
    private 'step_run_id'?: string;
    private 'output_result'?: Array<OutputRespOutputResult>;
    public constructor() { 
    }
    public withStepRunId(stepRunId: string): OutputRespStepOutputs {
        this['step_run_id'] = stepRunId;
        return this;
    }
    public set stepRunId(stepRunId: string  | undefined) {
        this['step_run_id'] = stepRunId;
    }
    public get stepRunId(): string | undefined {
        return this['step_run_id'];
    }
    public withOutputResult(outputResult: Array<OutputRespOutputResult>): OutputRespStepOutputs {
        this['output_result'] = outputResult;
        return this;
    }
    public set outputResult(outputResult: Array<OutputRespOutputResult>  | undefined) {
        this['output_result'] = outputResult;
    }
    public get outputResult(): Array<OutputRespOutputResult> | undefined {
        return this['output_result'];
    }
}