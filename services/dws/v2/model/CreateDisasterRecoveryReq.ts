import { CreateDisasterRecovery } from './CreateDisasterRecovery';


export class CreateDisasterRecoveryReq {
    private 'disaster_recovery'?: CreateDisasterRecovery;
    public constructor(disasterRecovery?: CreateDisasterRecovery) { 
        this['disaster_recovery'] = disasterRecovery;
    }
    public withDisasterRecovery(disasterRecovery: CreateDisasterRecovery): CreateDisasterRecoveryReq {
        this['disaster_recovery'] = disasterRecovery;
        return this;
    }
    public set disasterRecovery(disasterRecovery: CreateDisasterRecovery  | undefined) {
        this['disaster_recovery'] = disasterRecovery;
    }
    public get disasterRecovery(): CreateDisasterRecovery | undefined {
        return this['disaster_recovery'];
    }
}