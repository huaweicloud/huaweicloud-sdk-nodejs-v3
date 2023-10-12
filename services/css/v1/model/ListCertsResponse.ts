import { CustomCertsResource } from './CustomCertsResource';
import { DefaultCertsResource } from './DefaultCertsResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCertsResponse extends SdkResponse {
    public defaultCerts?: DefaultCertsResource;
    public customCerts?: CustomCertsResource;
    public constructor() { 
        super();
    }
    public withDefaultCerts(defaultCerts: DefaultCertsResource): ListCertsResponse {
        this['defaultCerts'] = defaultCerts;
        return this;
    }
    public withCustomCerts(customCerts: CustomCertsResource): ListCertsResponse {
        this['customCerts'] = customCerts;
        return this;
    }
}