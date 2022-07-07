import { APIVersionDetail } from './APIVersionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVersionResponse extends SdkResponse {
    public versions?: Array<APIVersionDetail>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<APIVersionDetail>): ShowVersionResponse {
        this['versions'] = versions;
        return this;
    }
}