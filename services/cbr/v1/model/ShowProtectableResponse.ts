import { ProtectablesResp } from './ProtectablesResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProtectableResponse extends SdkResponse {
    public instance?: ProtectablesResp;
    public constructor() { 
        super();
    }
    public withInstance(instance: ProtectablesResp): ShowProtectableResponse {
        this['instance'] = instance;
        return this;
    }
}