

export class ShowDisasterProgressRequest {
    private 'disaster_recovery_id': string | undefined;
    public constructor(disasterRecoveryId?: any) { 
        this['disaster_recovery_id'] = disasterRecoveryId;
    }
    public withDisasterRecoveryId(disasterRecoveryId: string): ShowDisasterProgressRequest {
        this['disaster_recovery_id'] = disasterRecoveryId;
        return this;
    }
    public set disasterRecoveryId(disasterRecoveryId: string | undefined) {
        this['disaster_recovery_id'] = disasterRecoveryId;
    }
    public get disasterRecoveryId() {
        return this['disaster_recovery_id'];
    }
}