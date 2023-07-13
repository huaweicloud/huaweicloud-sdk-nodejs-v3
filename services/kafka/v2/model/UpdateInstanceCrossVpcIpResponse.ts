import { UpdateInstanceCrossVpcIpRespResults } from './UpdateInstanceCrossVpcIpRespResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateInstanceCrossVpcIpResponse extends SdkResponse {
    public success?: boolean;
    public results?: Array<UpdateInstanceCrossVpcIpRespResults>;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): UpdateInstanceCrossVpcIpResponse {
        this['success'] = success;
        return this;
    }
    public withResults(results: Array<UpdateInstanceCrossVpcIpRespResults>): UpdateInstanceCrossVpcIpResponse {
        this['results'] = results;
        return this;
    }
}