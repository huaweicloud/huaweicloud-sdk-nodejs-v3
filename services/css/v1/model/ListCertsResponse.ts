import { CustomCertsResource } from './CustomCertsResource';
import { DefaultCertsResource } from './DefaultCertsResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCertsResponse extends SdkResponse {
    public defaultCerts?: Array<DefaultCertsResource>;
    public customCerts?: Array<CustomCertsResource>;
    public constructor() { 
        super();
    }
    public withDefaultCerts(defaultCerts: Array<DefaultCertsResource>): ListCertsResponse {
        this['defaultCerts'] = defaultCerts;
        return this;
    }
    public withCustomCerts(customCerts: Array<CustomCertsResource>): ListCertsResponse {
        this['customCerts'] = customCerts;
        return this;
    }
}