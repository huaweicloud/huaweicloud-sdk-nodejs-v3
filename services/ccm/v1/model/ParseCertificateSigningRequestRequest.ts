import { ParseCertificateSigningRequestRequestBody } from './ParseCertificateSigningRequestRequestBody';


export class ParseCertificateSigningRequestRequest {
    public body?: ParseCertificateSigningRequestRequestBody;
    public constructor() { 
    }
    public withBody(body: ParseCertificateSigningRequestRequestBody): ParseCertificateSigningRequestRequest {
        this['body'] = body;
        return this;
    }
}