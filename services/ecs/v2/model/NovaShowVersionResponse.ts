import { NovaVersionDetail } from './NovaVersionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NovaShowVersionResponse extends SdkResponse {
    public version?: NovaVersionDetail;
    public constructor() { 
        super();
    }
    public withVersion(version: NovaVersionDetail): NovaShowVersionResponse {
        this['version'] = version;
        return this;
    }
}