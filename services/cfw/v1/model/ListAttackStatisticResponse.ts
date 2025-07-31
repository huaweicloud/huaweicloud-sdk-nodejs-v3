import { AttackStatisticRespBody } from './AttackStatisticRespBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAttackStatisticResponse extends SdkResponse {
    public data?: Array<AttackStatisticRespBody>;
    public constructor() { 
        super();
    }
    public withData(data: Array<AttackStatisticRespBody>): ListAttackStatisticResponse {
        this['data'] = data;
        return this;
    }
}