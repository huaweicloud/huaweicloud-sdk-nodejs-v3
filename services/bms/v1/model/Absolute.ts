

export class Absolute {
    public maxTotalInstances?: number;
    public maxTotalCores?: number;
    public maxTotalRAMSize?: number;
    public maxTotalKeypairs?: number;
    public maxServerMeta?: number;
    public maxPersonality?: number;
    public maxPersonalitySize?: number;
    public maxServerGroups?: number;
    public maxServerGroupMembers?: number;
    public totalServerGroupsUsed?: number;
    public maxSecurityGroups?: number;
    public maxSecurityGroupRules?: number;
    public maxTotalFloatingIps?: number;
    public maxImageMeta?: number;
    public totalInstancesUsed?: number;
    public totalCoresUsed?: number;
    public totalRAMUsed?: number;
    public totalSecurityGroupsUsed?: number;
    public totalFloatingIpsUsed?: number;
    public constructor() { 
    }
    public withMaxTotalInstances(maxTotalInstances: number): Absolute {
        this['maxTotalInstances'] = maxTotalInstances;
        return this;
    }
    public withMaxTotalCores(maxTotalCores: number): Absolute {
        this['maxTotalCores'] = maxTotalCores;
        return this;
    }
    public withMaxTotalRAMSize(maxTotalRAMSize: number): Absolute {
        this['maxTotalRAMSize'] = maxTotalRAMSize;
        return this;
    }
    public withMaxTotalKeypairs(maxTotalKeypairs: number): Absolute {
        this['maxTotalKeypairs'] = maxTotalKeypairs;
        return this;
    }
    public withMaxServerMeta(maxServerMeta: number): Absolute {
        this['maxServerMeta'] = maxServerMeta;
        return this;
    }
    public withMaxPersonality(maxPersonality: number): Absolute {
        this['maxPersonality'] = maxPersonality;
        return this;
    }
    public withMaxPersonalitySize(maxPersonalitySize: number): Absolute {
        this['maxPersonalitySize'] = maxPersonalitySize;
        return this;
    }
    public withMaxServerGroups(maxServerGroups: number): Absolute {
        this['maxServerGroups'] = maxServerGroups;
        return this;
    }
    public withMaxServerGroupMembers(maxServerGroupMembers: number): Absolute {
        this['maxServerGroupMembers'] = maxServerGroupMembers;
        return this;
    }
    public withTotalServerGroupsUsed(totalServerGroupsUsed: number): Absolute {
        this['totalServerGroupsUsed'] = totalServerGroupsUsed;
        return this;
    }
    public withMaxSecurityGroups(maxSecurityGroups: number): Absolute {
        this['maxSecurityGroups'] = maxSecurityGroups;
        return this;
    }
    public withMaxSecurityGroupRules(maxSecurityGroupRules: number): Absolute {
        this['maxSecurityGroupRules'] = maxSecurityGroupRules;
        return this;
    }
    public withMaxTotalFloatingIps(maxTotalFloatingIps: number): Absolute {
        this['maxTotalFloatingIps'] = maxTotalFloatingIps;
        return this;
    }
    public withMaxImageMeta(maxImageMeta: number): Absolute {
        this['maxImageMeta'] = maxImageMeta;
        return this;
    }
    public withTotalInstancesUsed(totalInstancesUsed: number): Absolute {
        this['totalInstancesUsed'] = totalInstancesUsed;
        return this;
    }
    public withTotalCoresUsed(totalCoresUsed: number): Absolute {
        this['totalCoresUsed'] = totalCoresUsed;
        return this;
    }
    public withTotalRAMUsed(totalRAMUsed: number): Absolute {
        this['totalRAMUsed'] = totalRAMUsed;
        return this;
    }
    public withTotalSecurityGroupsUsed(totalSecurityGroupsUsed: number): Absolute {
        this['totalSecurityGroupsUsed'] = totalSecurityGroupsUsed;
        return this;
    }
    public withTotalFloatingIpsUsed(totalFloatingIpsUsed: number): Absolute {
        this['totalFloatingIpsUsed'] = totalFloatingIpsUsed;
        return this;
    }
}