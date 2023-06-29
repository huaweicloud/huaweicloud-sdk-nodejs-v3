import { RestPicLayout } from './RestPicLayout';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLayoutResponse extends SdkResponse {
    public returnCode?: number;
    public returnDesc?: string;
    public picLayouts?: Array<RestPicLayout>;
    public constructor() { 
        super();
    }
    public withReturnCode(returnCode: number): ShowLayoutResponse {
        this['returnCode'] = returnCode;
        return this;
    }
    public withReturnDesc(returnDesc: string): ShowLayoutResponse {
        this['returnDesc'] = returnDesc;
        return this;
    }
    public withPicLayouts(picLayouts: Array<RestPicLayout>): ShowLayoutResponse {
        this['picLayouts'] = picLayouts;
        return this;
    }
}