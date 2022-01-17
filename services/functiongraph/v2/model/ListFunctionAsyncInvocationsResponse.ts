import { ListFunctionAsyncInvocationsResult } from './ListFunctionAsyncInvocationsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFunctionAsyncInvocationsResponse extends SdkResponse {
    public invocations?: Array<ListFunctionAsyncInvocationsResult>;
    public constructor() { 
        super();
    }
    public withInvocations(invocations: Array<ListFunctionAsyncInvocationsResult>): ListFunctionAsyncInvocationsResponse {
        this['invocations'] = invocations;
        return this;
    }
}