

export class ShowDisasterDetailRequest {
    private 'disaster_recovery_id'?: string;
    public constructor(disasterRecoveryId?: string) { 
        this['disaster_recovery_id'] = disasterRecoveryId;
    }
    public withDisasterRecoveryId(disasterRecoveryId: string): ShowDisasterDetailRequest {
        this['disaster_recovery_id'] = disasterRecoveryId;
        return this;
    }
    public set disasterRecoveryId(disasterRecoveryId: string  | undefined) {
        this['disaster_recovery_id'] = disasterRecoveryId;
    }
    public get disasterRecoveryId(): string | undefined {
        return this['disaster_recovery_id'];
    }
}