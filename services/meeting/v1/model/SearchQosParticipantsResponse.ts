import { QosParticipantInfo } from './QosParticipantInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchQosParticipantsResponse extends SdkResponse {
    public count?: number;
    public limit?: number;
    public offset?: number;
    public data?: Array<QosParticipantInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): SearchQosParticipantsResponse {
        this['count'] = count;
        return this;
    }
    public withLimit(limit: number): SearchQosParticipantsResponse {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): SearchQosParticipantsResponse {
        this['offset'] = offset;
        return this;
    }
    public withData(data: Array<QosParticipantInfo>): SearchQosParticipantsResponse {
        this['data'] = data;
        return this;
    }
}