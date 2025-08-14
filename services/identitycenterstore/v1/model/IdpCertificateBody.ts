

export class IdpCertificateBody {
    private 'certificate_id'?: string;
    public status?: string;
    public constructor(certificateId?: string, status?: string) { 
        this['certificate_id'] = certificateId;
        this['status'] = status;
    }
    public withCertificateId(certificateId: string): IdpCertificateBody {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
    public withStatus(status: string): IdpCertificateBody {
        this['status'] = status;
        return this;
    }
}