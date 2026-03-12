

export class DeleteCertificateAuthorityRequest {
    private 'ca_id'?: string;
    private 'pending_days'?: string;
    public constructor(caId?: string, pendingDays?: string) { 
        this['ca_id'] = caId;
        this['pending_days'] = pendingDays;
    }
    public withCaId(caId: string): DeleteCertificateAuthorityRequest {
        this['ca_id'] = caId;
        return this;
    }
    public set caId(caId: string  | undefined) {
        this['ca_id'] = caId;
    }
    public get caId(): string | undefined {
        return this['ca_id'];
    }
    public withPendingDays(pendingDays: string): DeleteCertificateAuthorityRequest {
        this['pending_days'] = pendingDays;
        return this;
    }
    public set pendingDays(pendingDays: string  | undefined) {
        this['pending_days'] = pendingDays;
    }
    public get pendingDays(): string | undefined {
        return this['pending_days'];
    }
}