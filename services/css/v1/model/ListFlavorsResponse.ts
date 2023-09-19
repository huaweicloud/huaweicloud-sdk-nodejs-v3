import { EsflavorsVersionsResp } from './EsflavorsVersionsResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorsResponse extends SdkResponse {
    public versions?: Array<EsflavorsVersionsResp>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<EsflavorsVersionsResp>): ListFlavorsResponse {
        this['versions'] = versions;
        return this;
    }
}