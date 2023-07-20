import { LogtankItem } from './LogtankItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLogtankResponse extends SdkResponse {
    private 'request_id'?: string;
    public logtank?: LogtankItem;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): UpdateLogtankResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withLogtank(logtank: LogtankItem): UpdateLogtankResponse {
        this['logtank'] = logtank;
        return this;
    }
}