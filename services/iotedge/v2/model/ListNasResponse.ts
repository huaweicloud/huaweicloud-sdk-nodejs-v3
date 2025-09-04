import { QueryNaBriefResponseDTO } from './QueryNaBriefResponseDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNasResponse extends SdkResponse {
    public nas?: Array<QueryNaBriefResponseDTO>;
    public constructor() { 
        super();
    }
    public withNas(nas: Array<QueryNaBriefResponseDTO>): ListNasResponse {
        this['nas'] = nas;
        return this;
    }
}