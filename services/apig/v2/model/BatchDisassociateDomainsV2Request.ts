import { AttachOrDetachDomainsReqBody } from './AttachOrDetachDomainsReqBody';


export class BatchDisassociateDomainsV2Request {
    private 'certificate_id'?: string;
    public body?: AttachOrDetachDomainsReqBody;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): BatchDisassociateDomainsV2Request {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: AttachOrDetachDomainsReqBody): BatchDisassociateDomainsV2Request {
        this['body'] = body;
        return this;
    }
}