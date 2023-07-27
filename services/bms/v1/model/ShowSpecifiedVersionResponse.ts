import { Versions } from './Versions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSpecifiedVersionResponse extends SdkResponse {
    public version?: Versions;
    public constructor() { 
        super();
    }
    public withVersion(version: Versions): ShowSpecifiedVersionResponse {
        this['version'] = version;
        return this;
    }
}