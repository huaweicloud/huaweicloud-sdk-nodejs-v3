import { ValidationResult } from './ValidationResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLinkResponse extends SdkResponse {
    public name?: string;
    private 'validation-result'?: Array<ValidationResult>;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateLinkResponse {
        this['name'] = name;
        return this;
    }
    public withValidationResult(validationResult: Array<ValidationResult>): CreateLinkResponse {
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