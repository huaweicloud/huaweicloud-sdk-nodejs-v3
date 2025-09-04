import { QueryAppInstanceHistoryResponseDTO } from './QueryAppInstanceHistoryResponseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppInstanceHistoryResponse extends SdkResponse {
    public history?: Array<QueryAppInstanceHistoryResponseDTO>;
    public constructor() { 
        super();
    }
    public withHistory(history: Array<QueryAppInstanceHistoryResponseDTO>): ListAppInstanceHistoryResponse {
        this['history'] = history;
        return this;
    }
}