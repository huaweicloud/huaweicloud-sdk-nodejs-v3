import { JobValidationResult } from './JobValidationResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateJobResponse extends SdkResponse {
    public name?: string;
    private 'validation-result'?: Array<JobValidationResult>;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateJobResponse {
        this['name'] = name;
        return this;
    }
    public withValidationResult(validationResult: Array<JobValidationResult>): CreateJobResponse {
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