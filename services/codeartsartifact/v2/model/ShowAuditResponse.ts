import { AuditResult } from './AuditResult';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuditResponse extends SdkResponse {
    public status?: ShowAuditResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: AuditResult;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowAuditResponseStatusEnum | string): ShowAuditResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowAuditResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: AuditResult): ShowAuditResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAuditResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
