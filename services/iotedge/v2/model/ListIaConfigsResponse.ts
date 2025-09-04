import { QueryIaConfigResponseDTO } from './QueryIaConfigResponseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIaConfigsResponse extends SdkResponse {
    public configs?: Array<QueryIaConfigResponseDTO>;
    public constructor() { 
        super();
    }
    public withConfigs(configs: Array<QueryIaConfigResponseDTO>): ListIaConfigsResponse {
        this['configs'] = configs;
        return this;
    }
}