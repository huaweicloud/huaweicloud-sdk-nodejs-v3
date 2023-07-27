import { AttachOrDetachDomainsReqBody } from './AttachOrDetachDomainsReqBody';


export class BatchAssociateDomainsV2Request {
    private 'certificate_id'?: string;
    public body?: AttachOrDetachDomainsReqBody;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): BatchAssociateDomainsV2Request {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: AttachOrDetachDomainsReqBody): BatchAssociateDomainsV2Request {
        this['body'] = body;
        return this;
    }
}