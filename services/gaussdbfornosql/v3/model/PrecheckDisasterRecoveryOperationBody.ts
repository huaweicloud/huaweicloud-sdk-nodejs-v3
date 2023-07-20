import { PrecheckDisasterRecoveryInstance } from './PrecheckDisasterRecoveryInstance';


export class PrecheckDisasterRecoveryOperationBody {
    public operation?: string;
    private 'disaster_recovery_instance'?: PrecheckDisasterRecoveryInstance;
    public constructor(operation?: string) { 
        this['operation'] = operation;
    }
    public withOperation(operation: string): PrecheckDisasterRecoveryOperationBody {
        this['operation'] = operation;
        return this;
    }
    public withDisasterRecoveryInstance(disasterRecoveryInstance: PrecheckDisasterRecoveryInstance): PrecheckDisasterRecoveryOperationBody {
        this['disaster_recovery_instance'] = disasterRecoveryInstance;
        return this;
    }
    public set disasterRecoveryInstance(disasterRecoveryInstance: PrecheckDisasterRecoveryInstance  | undefined) {
        this['disaster_recovery_instance'] = disasterRecoveryInstance;
    }
    public get disasterRecoveryInstance(): PrecheckDisasterRecoveryInstance | undefined {
        return this['disaster_recovery_instance'];
    }
}