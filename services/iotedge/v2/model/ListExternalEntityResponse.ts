import { ExternalEntityRespDTO } from './ExternalEntityRespDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExternalEntityResponse extends SdkResponse {
    public externals?: Array<ExternalEntityRespDTO>;
    public constructor() { 
        super();
    }
    public withExternals(externals: Array<ExternalEntityRespDTO>): ListExternalEntityResponse {
        this['externals'] = externals;
        return this;
    }
}