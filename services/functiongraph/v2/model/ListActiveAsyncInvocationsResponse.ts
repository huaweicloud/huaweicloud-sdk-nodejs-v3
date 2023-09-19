import { ListFunctionAsyncInvocationsResult } from './ListFunctionAsyncInvocationsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListActiveAsyncInvocationsResponse extends SdkResponse {
    public invocations?: Array<ListFunctionAsyncInvocationsResult>;
    public constructor() { 
        super();
    }
    public withInvocations(invocations: Array<ListFunctionAsyncInvocationsResult>): ListActiveAsyncInvocationsResponse {
        this['invocations'] = invocations;
        return this;
    }
}