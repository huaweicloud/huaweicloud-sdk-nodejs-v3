

export class ShowCertificateAuthorityRequest {
    private 'ca_id'?: string;
    public constructor(caId?: string) { 
        this['ca_id'] = caId;
    }
    public withCaId(caId: string): ShowCertificateAuthorityRequest {
        this['ca_id'] = caId;
        return this;
    }
    public set caId(caId: string  | undefined) {
        this['ca_id'] = caId;
    }
    public get caId(): string | undefined {
        return this['ca_id'];
    }
}