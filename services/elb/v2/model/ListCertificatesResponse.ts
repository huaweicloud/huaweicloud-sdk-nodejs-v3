import { CertificateResp } from './CertificateResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCertificatesResponse extends SdkResponse {
    public certificates?: Array<CertificateResp>;
    private 'instance_num'?: number;
    public constructor() { 
        super();
    }
    public withCertificates(certificates: Array<CertificateResp>): ListCertificatesResponse {
        this['certificates'] = certificates;
        return this;
    }
    public withInstanceNum(instanceNum: number): ListCertificatesResponse {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
}