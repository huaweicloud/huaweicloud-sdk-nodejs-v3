import { UpdateDomainMultiCertificatesResponseBodyContent } from './UpdateDomainMultiCertificatesResponseBodyContent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainMultiCertificatesResponse extends SdkResponse {
    public https?: UpdateDomainMultiCertificatesResponseBodyContent;
    public constructor() { 
        super();
    }
    public withHttps(https: UpdateDomainMultiCertificatesResponseBodyContent): UpdateDomainMultiCertificatesResponse {
        this['https'] = https;
        return this;
    }
}