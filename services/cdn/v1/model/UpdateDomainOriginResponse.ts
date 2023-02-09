import { ResourceBody } from './ResourceBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainOriginResponse extends SdkResponse {
    public origin?: ResourceBody;
    public constructor() { 
        super();
    }
    public withOrigin(origin: ResourceBody): UpdateDomainOriginResponse {
        this['origin'] = origin;
        return this;
    }
}