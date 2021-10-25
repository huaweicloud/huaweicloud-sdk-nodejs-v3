import { QualificationCertificateRequestBody } from './QualificationCertificateRequestBody';


export class RecognizeQualificationCertificateRequest {
    public body?: QualificationCertificateRequestBody;
    public constructor() { 
    }
    public withBody(body: QualificationCertificateRequestBody): RecognizeQualificationCertificateRequest {
        this['body'] = body;
        return this;
    }
}