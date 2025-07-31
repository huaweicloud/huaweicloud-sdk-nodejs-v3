import { AttackTrendRespBody } from './AttackTrendRespBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAttackTrendResponse extends SdkResponse {
    public data?: Array<AttackTrendRespBody>;
    public constructor() { 
        super();
    }
    public withData(data: Array<AttackTrendRespBody>): ShowAttackTrendResponse {
        this['data'] = data;
        return this;
    }
}