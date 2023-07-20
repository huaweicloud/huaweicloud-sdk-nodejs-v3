import { UpdateDisasterRecoveryReq } from './UpdateDisasterRecoveryReq';


export class UpdateDisasterRecoveryRequest {
    private 'disaster_recovery'?: UpdateDisasterRecoveryReq;
    public constructor() { 
    }
    public withDisasterRecovery(disasterRecovery: UpdateDisasterRecoveryReq): UpdateDisasterRecoveryRequest {
        this['disaster_recovery'] = disasterRecovery;
        return this;
    }
    public set disasterRecovery(disasterRecovery: UpdateDisasterRecoveryReq  | undefined) {
        this['disaster_recovery'] = disasterRecovery;
    }
    public get disasterRecovery(): UpdateDisasterRecoveryReq | undefined {
        return this['disaster_recovery'];
    }
}