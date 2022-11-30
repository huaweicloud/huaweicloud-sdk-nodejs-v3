import { ProjectFlavorLimit } from './ProjectFlavorLimit';


export class ServerLimits {
    public maxImageMeta: number;
    public maxPersonality: number;
    public maxPersonalitySize: number;
    public maxSecurityGroupRules: number;
    public maxSecurityGroups: number;
    public maxServerGroupMembers: number;
    public maxServerGroups: number;
    public maxServerMeta: number;
    public maxTotalCores: number;
    public maxTotalFloatingIps: number;
    public maxTotalInstances: number;
    public maxTotalKeypairs: number;
    public maxTotalRAMSize: number;
    public totalCoresUsed: number;
    public totalFloatingIpsUsed: number;
    public totalInstancesUsed: number;
    public totalRAMUsed: number;
    public totalSecurityGroupsUsed: number;
    public totalServerGroupsUsed: number;
    public maxTotalSpotInstances?: number;
    public maxTotalSpotCores?: number;
    public maxTotalSpotRAMSize?: number;
    public totalSpotInstancesUsed?: number;
    public totalSpotCoresUsed?: number;
    public totalSpotRAMUsed?: number;
    private 'limit_by_flavor'?: Array<ProjectFlavorLimit> | undefined;
    public constructor(maxImageMeta?: any, maxPersonality?: any, maxPersonalitySize?: any, maxSecurityGroupRules?: any, maxSecurityGroups?: any, maxServerGroupMembers?: any, maxServerGroups?: any, maxServerMeta?: any, maxTotalCores?: any, maxTotalFloatingIps?: any, maxTotalInstances?: any, maxTotalKeypairs?: any, maxTotalRAMSize?: any, totalCoresUsed?: any, totalFloatingIpsUsed?: any, totalInstancesUsed?: any, totalRAMUsed?: any, totalSecurityGroupsUsed?: any, totalServerGroupsUsed?: any) { 
        this['maxImageMeta'] = maxImageMeta;
        this['maxPersonality'] = maxPersonality;
        this['maxPersonalitySize'] = maxPersonalitySize;
        this['maxSecurityGroupRules'] = maxSecurityGroupRules;
        this['maxSecurityGroups'] = maxSecurityGroups;
        this['maxServerGroupMembers'] = maxServerGroupMembers;
        this['maxServerGroups'] = maxServerGroups;
        this['maxServerMeta'] = maxServerMeta;
        this['maxTotalCores'] = maxTotalCores;
        this['maxTotalFloatingIps'] = maxTotalFloatingIps;
        this['maxTotalInstances'] = maxTotalInstances;
        this['maxTotalKeypairs'] = maxTotalKeypairs;
        this['maxTotalRAMSize'] = maxTotalRAMSize;
        this['totalCoresUsed'] = totalCoresUsed;
        this['totalFloatingIpsUsed'] = totalFloatingIpsUsed;
        this['totalInstancesUsed'] = totalInstancesUsed;
        this['totalRAMUsed'] = totalRAMUsed;
        this['totalSecurityGroupsUsed'] = totalSecurityGroupsUsed;
        this['totalServerGroupsUsed'] = totalServerGroupsUsed;
    }
    public withMaxImageMeta(maxImageMeta: number): ServerLimits {
        this['maxImageMeta'] = maxImageMeta;
        return this;
    }
    public withMaxPersonality(maxPersonality: number): ServerLimits {
        this['maxPersonality'] = maxPersonality;
        return this;
    }
    public withMaxPersonalitySize(maxPersonalitySize: number): ServerLimits {
        this['maxPersonalitySize'] = maxPersonalitySize;
        return this;
    }
    public withMaxSecurityGroupRules(maxSecurityGroupRules: number): ServerLimits {
        this['maxSecurityGroupRules'] = maxSecurityGroupRules;
        return this;
    }
    public withMaxSecurityGroups(maxSecurityGroups: number): ServerLimits {
        this['maxSecurityGroups'] = maxSecurityGroups;
        return this;
    }
    public withMaxServerGroupMembers(maxServerGroupMembers: number): ServerLimits {
        this['maxServerGroupMembers'] = maxServerGroupMembers;
        return this;
    }
    public withMaxServerGroups(maxServerGroups: number): ServerLimits {
        this['maxServerGroups'] = maxServerGroups;
        return this;
    }
    public withMaxServerMeta(maxServerMeta: number): ServerLimits {
        this['maxServerMeta'] = maxServerMeta;
        return this;
    }
    public withMaxTotalCores(maxTotalCores: number): ServerLimits {
        this['maxTotalCores'] = maxTotalCores;
        return this;
    }
    public withMaxTotalFloatingIps(maxTotalFloatingIps: number): ServerLimits {
        this['maxTotalFloatingIps'] = maxTotalFloatingIps;
        return this;
    }
    public withMaxTotalInstances(maxTotalInstances: number): ServerLimits {
        this['maxTotalInstances'] = maxTotalInstances;
        return this;
    }
    public withMaxTotalKeypairs(maxTotalKeypairs: number): ServerLimits {
        this['maxTotalKeypairs'] = maxTotalKeypairs;
        return this;
    }
    public withMaxTotalRAMSize(maxTotalRAMSize: number): ServerLimits {
        this['maxTotalRAMSize'] = maxTotalRAMSize;
        return this;
    }
    public withTotalCoresUsed(totalCoresUsed: number): ServerLimits {
        this['totalCoresUsed'] = totalCoresUsed;
        return this;
    }
    public withTotalFloatingIpsUsed(totalFloatingIpsUsed: number): ServerLimits {
        this['totalFloatingIpsUsed'] = totalFloatingIpsUsed;
        return this;
    }
    public withTotalInstancesUsed(totalInstancesUsed: number): ServerLimits {
        this['totalInstancesUsed'] = totalInstancesUsed;
        return this;
    }
    public withTotalRAMUsed(totalRAMUsed: number): ServerLimits {
        this['totalRAMUsed'] = totalRAMUsed;
        return this;
    }
    public withTotalSecurityGroupsUsed(totalSecurityGroupsUsed: number): ServerLimits {
        this['totalSecurityGroupsUsed'] = totalSecurityGroupsUsed;
        return this;
    }
    public withTotalServerGroupsUsed(totalServerGroupsUsed: number): ServerLimits {
        this['totalServerGroupsUsed'] = totalServerGroupsUsed;
        return this;
    }
    public withMaxTotalSpotInstances(maxTotalSpotInstances: number): ServerLimits {
        this['maxTotalSpotInstances'] = maxTotalSpotInstances;
        return this;
    }
    public withMaxTotalSpotCores(maxTotalSpotCores: number): ServerLimits {
        this['maxTotalSpotCores'] = maxTotalSpotCores;
        return this;
    }
    public withMaxTotalSpotRAMSize(maxTotalSpotRAMSize: number): ServerLimits {
        this['maxTotalSpotRAMSize'] = maxTotalSpotRAMSize;
        return this;
    }
    public withTotalSpotInstancesUsed(totalSpotInstancesUsed: number): ServerLimits {
        this['totalSpotInstancesUsed'] = totalSpotInstancesUsed;
        return this;
    }
    public withTotalSpotCoresUsed(totalSpotCoresUsed: number): ServerLimits {
        this['totalSpotCoresUsed'] = totalSpotCoresUsed;
        return this;
    }
    public withTotalSpotRAMUsed(totalSpotRAMUsed: number): ServerLimits {
        this['totalSpotRAMUsed'] = totalSpotRAMUsed;
        return this;
    }
    public withLimitByFlavor(limitByFlavor: Array<ProjectFlavorLimit>): ServerLimits {
        this['limit_by_flavor'] = limitByFlavor;
        return this;
    }
    public set limitByFlavor(limitByFlavor: Array<ProjectFlavorLimit> | undefined) {
        this['limit_by_flavor'] = limitByFlavor;
    }
    public get limitByFlavor() {
        return this['limit_by_flavor'];
    }
}