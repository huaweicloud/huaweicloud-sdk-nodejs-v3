import { VPCProtectsVo } from './VPCProtectsVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProtectedVpcsResponse extends SdkResponse {
    public data?: VPCProtectsVo;
    public constructor() { 
        super();
    }
    public withData(data: VPCProtectsVo): ListProtectedVpcsResponse {
        this['data'] = data;
        return this;
    }
}