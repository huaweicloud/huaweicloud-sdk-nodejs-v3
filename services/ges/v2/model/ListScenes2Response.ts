import { ListScenesRespResults } from './ListScenesRespResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScenes2Response extends SdkResponse {
    public results?: Array<ListScenesRespResults>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<ListScenesRespResults>): ListScenes2Response {
        this['results'] = results;
        return this;
    }
}