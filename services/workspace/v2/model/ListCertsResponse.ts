import { CertItem } from './CertItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCertsResponse extends SdkResponse {
    private 'cert_list'?: Array<CertItem>;
    public constructor() { 
        super();
    }
    public withCertList(certList: Array<CertItem>): ListCertsResponse {
        this['cert_list'] = certList;
        return this;
    }
    public set certList(certList: Array<CertItem>  | undefined) {
        this['cert_list'] = certList;
    }
    public get certList(): Array<CertItem> | undefined {
        return this['cert_list'];
    }
}