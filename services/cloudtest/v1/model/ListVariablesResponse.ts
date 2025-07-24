import { CommonResponseErrorOfAPITest } from './CommonResponseErrorOfAPITest';
import { PageResults } from './PageResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVariablesResponse extends SdkResponse {
    public code?: string;
    public error?: CommonResponseErrorOfAPITest;
    public reason?: string;
    public result?: PageResults;
    public status?: string;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListVariablesResponse {
        this['code'] = code;
        return this;
    }
    public withError(error: CommonResponseErrorOfAPITest): ListVariablesResponse {
        this['error'] = error;
        return this;
    }
    public withReason(reason: string): ListVariablesResponse {
        this['reason'] = reason;
        return this;
    }
    public withResult(result: PageResults): ListVariablesResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListVariablesResponse {
        this['status'] = status;
        return this;
    }
}