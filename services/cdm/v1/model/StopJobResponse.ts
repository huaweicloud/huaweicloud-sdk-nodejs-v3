import { JobValidationResult } from './JobValidationResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopJobResponse extends SdkResponse {
    private 'validation-result'?: Array<JobValidationResult>;
    public constructor() { 
        super();
    }
    public withValidationResult(validationResult: Array<JobValidationResult>): StopJobResponse {
        this['validation-result'] = validationResult;
        return this;
    }
    public set validationResult(validationResult: Array<JobValidationResult>  | undefined) {
        this['validation-result'] = validationResult;
    }
    public get validationResult(): Array<JobValidationResult> | undefined {
        return this['validation-result'];
    }
}