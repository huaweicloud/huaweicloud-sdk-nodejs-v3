import { AttackDetailVO } from './AttackDetailVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAttackDetailResponse extends SdkResponse {
    public data?: AttackDetailVO;
    public constructor() { 
        super();
    }
    public withData(data: AttackDetailVO): ShowAttackDetailResponse {
        this['data'] = data;
        return this;
    }
}