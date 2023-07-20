

export class RegisterServerAutoRecoveryRequestBody {
    private 'support_auto_recovery'?: string;
    public constructor(supportAutoRecovery?: string) { 
        this['support_auto_recovery'] = supportAutoRecovery;
    }
    public withSupportAutoRecovery(supportAutoRecovery: string): RegisterServerAutoRecoveryRequestBody {
        this['support_auto_recovery'] = supportAutoRecovery;
        return this;
    }
    public set supportAutoRecovery(supportAutoRecovery: string  | undefined) {
        this['support_auto_recovery'] = supportAutoRecovery;
    }
    public get supportAutoRecovery(): string | undefined {
        return this['support_auto_recovery'];
    }
}