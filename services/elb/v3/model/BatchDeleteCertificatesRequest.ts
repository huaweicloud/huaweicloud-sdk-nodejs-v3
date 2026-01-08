import { BatchDeleteCertificatesRequestBody } from './BatchDeleteCertificatesRequestBody';


export class BatchDeleteCertificatesRequest {
    public body?: BatchDeleteCertificatesRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchDeleteCertificatesRequestBody): BatchDeleteCertificatesRequest {
        this['body'] = body;
        return this;
    }
}