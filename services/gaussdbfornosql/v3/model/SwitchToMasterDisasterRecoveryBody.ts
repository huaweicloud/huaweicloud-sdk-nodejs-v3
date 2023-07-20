

export class SwitchToMasterDisasterRecoveryBody {
    public force?: boolean;
    public constructor() { 
    }
    public withForce(force: boolean): SwitchToMasterDisasterRecoveryBody {
        this['force'] = force;
        return this;
    }
}