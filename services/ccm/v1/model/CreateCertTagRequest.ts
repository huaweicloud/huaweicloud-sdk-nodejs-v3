import { ResourceTagRequestBody } from './ResourceTagRequestBody';


export class CreateCertTagRequest {
    private 'certificate_id'?: string;
    public body?: ResourceTagRequestBody;
    public constructor(certificateId?: string) { 
        this['certificate_id'] = certificateId;
    }
    public withCertificateId(certificateId: string): CreateCertTagRequest {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withBody(body: ResourceTagRequestBody): CreateCertTagRequest {
        this['body'] = body;
        return this;
    }
}