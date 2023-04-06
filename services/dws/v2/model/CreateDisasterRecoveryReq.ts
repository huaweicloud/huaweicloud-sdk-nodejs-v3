import { CreateDisasterRecovery } from './CreateDisasterRecovery';


export class CreateDisasterRecoveryReq {
    private 'disaster_recovery': CreateDisasterRecovery | undefined;
    public constructor(disasterRecovery?: any) { 
        this['disaster_recovery'] = disasterRecovery;
    }
    public withDisasterRecovery(disasterRecovery: CreateDisasterRecovery): CreateDisasterRecoveryReq {
        this['disaster_recovery'] = disasterRecovery;
        return this;
    }
    public set disasterRecovery(disasterRecovery: CreateDisasterRecovery | undefined) {
        this['disaster_recovery'] = disasterRecovery;
    }
    public get disasterRecovery() {
        return this['disaster_recovery'];
    }
}