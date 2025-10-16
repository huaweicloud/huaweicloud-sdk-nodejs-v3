import { SessionMemoryContextInfoResult } from './SessionMemoryContextInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSessionMemoryContextResponse extends SdkResponse {
    public total?: number;
    private 'memory_context_info'?: Array<SessionMemoryContextInfoResult>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSessionMemoryContextResponse {
        this['total'] = total;
        return this;
    }
    public withMemoryContextInfo(memoryContextInfo: Array<SessionMemoryContextInfoResult>): ListSessionMemoryContextResponse {
        this['memory_context_info'] = memoryContextInfo;
        return this;
    }
    public set memoryContextInfo(memoryContextInfo: Array<SessionMemoryContextInfoResult>  | undefined) {
        this['memory_context_info'] = memoryContextInfo;
    }
    public get memoryContextInfo(): Array<SessionMemoryContextInfoResult> | undefined {
        return this['memory_context_info'];
    }
}