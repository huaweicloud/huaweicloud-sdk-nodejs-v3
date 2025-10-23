import { RecoveryInfo } from './RecoveryInfo';


export class RestoreRedisDataRequestBody {
    private 'recovery_info'?: RecoveryInfo;
    public constructor() { 
    }
    public withRecoveryInfo(recoveryInfo: RecoveryInfo): RestoreRedisDataRequestBody {
        this['recovery_info'] = recoveryInfo;
        return this;
    }
    public set recoveryInfo(recoveryInfo: RecoveryInfo  | undefined) {
        this['recovery_info'] = recoveryInfo;
    }
    public get recoveryInfo(): RecoveryInfo | undefined {
        return this['recovery_info'];
    }
}