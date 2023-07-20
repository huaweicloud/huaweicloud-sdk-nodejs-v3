import { ConstructDisasterRecoveryInstance } from './ConstructDisasterRecoveryInstance';


export class ConstructDisasterRecoveryBody {
    public id?: string;
    public alias?: string;
    public password?: string;
    private 'instance_role'?: string;
    private 'disaster_recovery_instance'?: ConstructDisasterRecoveryInstance;
    public constructor(alias?: string, password?: string, instanceRole?: string, disasterRecoveryInstance?: ConstructDisasterRecoveryInstance) { 
        this['alias'] = alias;
        this['password'] = password;
        this['instance_role'] = instanceRole;
        this['disaster_recovery_instance'] = disasterRecoveryInstance;
    }
    public withId(id: string): ConstructDisasterRecoveryBody {
        this['id'] = id;
        return this;
    }
    public withAlias(alias: string): ConstructDisasterRecoveryBody {
        this['alias'] = alias;
        return this;
    }
    public withPassword(password: string): ConstructDisasterRecoveryBody {
        this['password'] = password;
        return this;
    }
    public withInstanceRole(instanceRole: string): ConstructDisasterRecoveryBody {
        this['instance_role'] = instanceRole;
        return this;
    }
    public set instanceRole(instanceRole: string  | undefined) {
        this['instance_role'] = instanceRole;
    }
    public get instanceRole(): string | undefined {
        return this['instance_role'];
    }
    public withDisasterRecoveryInstance(disasterRecoveryInstance: ConstructDisasterRecoveryInstance): ConstructDisasterRecoveryBody {
        this['disaster_recovery_instance'] = disasterRecoveryInstance;
        return this;
    }
    public set disasterRecoveryInstance(disasterRecoveryInstance: ConstructDisasterRecoveryInstance  | undefined) {
        this['disaster_recovery_instance'] = disasterRecoveryInstance;
    }
    public get disasterRecoveryInstance(): ConstructDisasterRecoveryInstance | undefined {
        return this['disaster_recovery_instance'];
    }
}