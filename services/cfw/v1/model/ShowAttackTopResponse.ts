import { AttackTopRespBody } from './AttackTopRespBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAttackTopResponse extends SdkResponse {
    public data?: AttackTopRespBody;
    public constructor() { 
        super();
    }
    public withData(data: AttackTopRespBody): ShowAttackTopResponse {
        this['data'] = data;
        return this;
    }
}