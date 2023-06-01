import { LogtankItem } from './LogtankItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLogtankResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public count?: number;
    public logtanks?: Array<LogtankItem>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListLogtankResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withCount(count: number): ListLogtankResponse {
        this['count'] = count;
        return this;
    }
    public withLogtanks(logtanks: Array<LogtankItem>): ListLogtankResponse {
        this['logtanks'] = logtanks;
        return this;
    }
}