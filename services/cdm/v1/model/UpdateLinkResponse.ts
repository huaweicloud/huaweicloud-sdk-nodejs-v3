import { ValidationResult } from './ValidationResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLinkResponse extends SdkResponse {
    private 'validation-result'?: Array<ValidationResult>;
    public constructor() { 
        super();
    }
    public withValidationResult(validationResult: Array<ValidationResult>): UpdateLinkResponse {
        this['validation-result'] = validationResult;
        return this;
    }
    public set validationResult(validationResult: Array<ValidationResult>  | undefined) {
        this['validation-result'] = validationResult;
    }
    public get validationResult(): Array<ValidationResult> | undefined {
        return this['validation-result'];
    }
}