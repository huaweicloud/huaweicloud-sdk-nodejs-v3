import { CertDetail } from './CertDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SubscribeCertificateResponse extends SdkResponse {
    private 'order_id'?: string;
    public cert?: Array<CertDetail>;
    public constructor() { 
        super();
    }
    public withOrderId(orderId: string): SubscribeCertificateResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withCert(cert: Array<CertDetail>): SubscribeCertificateResponse {
        this['cert'] = cert;
        return this;
    }
}