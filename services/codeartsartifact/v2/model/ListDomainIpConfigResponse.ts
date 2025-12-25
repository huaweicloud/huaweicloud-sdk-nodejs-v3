import { DomainIPWhiteListModelPage } from './DomainIPWhiteListModelPage';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDomainIpConfigResponse extends SdkResponse {
    public status?: ListDomainIpConfigResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: DomainIPWhiteListModelPage;
    public constructor() { 
        super();
    }
    public withStatus(status: ListDomainIpConfigResponseStatusEnum | string): ListDomainIpConfigResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListDomainIpConfigResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: DomainIPWhiteListModelPage): ListDomainIpConfigResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDomainIpConfigResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
