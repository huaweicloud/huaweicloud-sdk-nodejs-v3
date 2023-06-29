import { QosInfo } from './QosInfo';
import { QosParticipantInfo } from './QosParticipantInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchQosParticipantDetailResponse extends SdkResponse {
    public user?: QosParticipantInfo;
    public qos?: QosInfo;
    public constructor() { 
        super();
    }
    public withUser(user: QosParticipantInfo): SearchQosParticipantDetailResponse {
        this['user'] = user;
        return this;
    }
    public withQos(qos: QosInfo): SearchQosParticipantDetailResponse {
        this['qos'] = qos;
        return this;
    }
}