import { UpdateDisasterRecoveryRequest } from './UpdateDisasterRecoveryRequest';


export class UpdateDisasterInfoRequest {
    private 'disaster_recovery_id': string | undefined;
    public body?: UpdateDisasterRecoveryRequest;
    public constructor(disasterRecoveryId?: any) { 
        this['disaster_recovery_id'] = disasterRecoveryId;
    }
    public withDisasterRecoveryId(disasterRecoveryId: string): UpdateDisasterInfoRequest {
        this['disaster_recovery_id'] = disasterRecoveryId;
        return this;
    }
    public set disasterRecoveryId(disasterRecoveryId: string | undefined) {
        this['disaster_recovery_id'] = disasterRecoveryId;
    }
    public get disasterRecoveryId() {
        return this['disaster_recovery_id'];
    }
    public withBody(body: UpdateDisasterRecoveryRequest): UpdateDisasterInfoRequest {
        this['body'] = body;
        return this;
    }
}