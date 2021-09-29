

export class RegisterServerAutoRecoveryRequestBody {
    private 'support_auto_recovery': string | undefined;
    public constructor(supportAutoRecovery?: any) { 
        this['support_auto_recovery'] = supportAutoRecovery;
    }
    public withSupportAutoRecovery(supportAutoRecovery: string): RegisterServerAutoRecoveryRequestBody {
        this['support_auto_recovery'] = supportAutoRecovery;
        return this;
    }
    public set supportAutoRecovery(supportAutoRecovery: string | undefined) {
        this['support_auto_recovery'] = supportAutoRecovery;
    }
    public get supportAutoRecovery() {
        return this['support_auto_recovery'];
    }
}