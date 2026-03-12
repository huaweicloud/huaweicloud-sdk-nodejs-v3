import { PurchaseCertificateRequestBody } from './PurchaseCertificateRequestBody';


export class SubscribeCertificateRequest {
    public body?: PurchaseCertificateRequestBody;
    public constructor() { 
    }
    public withBody(body: PurchaseCertificateRequestBody): SubscribeCertificateRequest {
        this['body'] = body;
        return this;
    }
}