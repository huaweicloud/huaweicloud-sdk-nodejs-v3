

export class DeleteDisasterRecoveryRequest {
    private 'disaster_recovery_id'?: string;
    private 'need_send_request'?: number;
    public constructor(disasterRecoveryId?: string) { 
        this['disaster_recovery_id'] = disasterRecoveryId;
    }
    public withDisasterRecoveryId(disasterRecoveryId: string): DeleteDisasterRecoveryRequest {
        this['disaster_recovery_id'] = disasterRecoveryId;
        return this;
    }
    public set disasterRecoveryId(disasterRecoveryId: string  | undefined) {
        this['disaster_recovery_id'] = disasterRecoveryId;
    }
    public get disasterRecoveryId(): string | undefined {
        return this['disaster_recovery_id'];
    }
    public withNeedSendRequest(needSendRequest: number): DeleteDisasterRecoveryRequest {
        this['need_send_request'] = needSendRequest;
        return this;
    }
    public set needSendRequest(needSendRequest: number  | undefined) {
        this['need_send_request'] = needSendRequest;
    }
    public get needSendRequest(): number | undefined {
        return this['need_send_request'];
    }
}