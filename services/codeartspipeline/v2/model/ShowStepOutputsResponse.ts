import { OutputRespStepOutputs } from './OutputRespStepOutputs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStepOutputsResponse extends SdkResponse {
    private 'step_outputs'?: Array<OutputRespStepOutputs>;
    private 'current_system_time'?: number;
    public constructor() { 
        super();
    }
    public withStepOutputs(stepOutputs: Array<OutputRespStepOutputs>): ShowStepOutputsResponse {
        this['step_outputs'] = stepOutputs;
        return this;
    }
    public set stepOutputs(stepOutputs: Array<OutputRespStepOutputs>  | undefined) {
        this['step_outputs'] = stepOutputs;
    }
    public get stepOutputs(): Array<OutputRespStepOutputs> | undefined {
        return this['step_outputs'];
    }
    public withCurrentSystemTime(currentSystemTime: number): ShowStepOutputsResponse {
        this['current_system_time'] = currentSystemTime;
        return this;
    }
    public set currentSystemTime(currentSystemTime: number  | undefined) {
        this['current_system_time'] = currentSystemTime;
    }
    public get currentSystemTime(): number | undefined {
        return this['current_system_time'];
    }
}