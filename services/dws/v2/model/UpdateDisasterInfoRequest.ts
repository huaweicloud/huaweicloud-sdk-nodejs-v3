import { UpdateDisasterRecoveryRequest } from './UpdateDisasterRecoveryRequest';


export class UpdateDisasterInfoRequest {
    private 'disaster_recovery_id'?: string;
    public body?: UpdateDisasterRecoveryRequest;
    public constructor(disasterRecoveryId?: string) { 
        this['disaster_recovery_id'] = disasterRecoveryId;
    }
    public withDisasterRecoveryId(disasterRecoveryId: string): UpdateDisasterInfoRequest {
        this['disaster_recovery_id'] = disasterRecoveryId;
        return this;
    }
    public set disasterRecoveryId(disasterRecoveryId: string  | undefined) {
        this['disaster_recovery_id'] = disasterRecoveryId;
    }
    public get disasterRecoveryId(): string | undefined {
        return this['disaster_recovery_id'];
    }
    public withBody(body: UpdateDisasterRecoveryRequest): UpdateDisasterInfoRequest {
        this['body'] = body;
        return this;
    }
}