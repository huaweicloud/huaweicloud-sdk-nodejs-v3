

export class AutoGenerateSecurityGroupHardeningConfigSpec {
    public portsToDisable?: Array<string>;
    public constructor() { 
    }
    public withPortsToDisable(portsToDisable: Array<string>): AutoGenerateSecurityGroupHardeningConfigSpec {
        this['portsToDisable'] = portsToDisable;
        return this;
    }
}