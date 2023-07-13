

export class ResourceResult {
    public type: ResourceResultTypeEnum;
    public used: number;
    public quota: number;
    public min: number;
    public constructor(type?: any, used?: any, quota?: any, min?: any) { 
        this['type'] = type;
        this['used'] = used;
        this['quota'] = quota;
        this['min'] = min;
    }
    public withType(type: ResourceResultTypeEnum): ResourceResult {
        this['type'] = type;
        return this;
    }
    public withUsed(used: number): ResourceResult {
        this['used'] = used;
        return this;
    }
    public withQuota(quota: number): ResourceResult {
        this['quota'] = quota;
        return this;
    }
    public withMin(min: number): ResourceResult {
        this['min'] = min;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceResultTypeEnum {
    VPC = 'vpc',
    SUBNET = 'subnet',
    SECURITYGROUP = 'securityGroup',
    SECURITYGROUPRULE = 'securityGroupRule',
    PUBLICIP = 'publicIp',
    VPN = 'vpn',
    VPNGW = 'vpngw',
    VPCPEER = 'vpcPeer',
    FIREWALL = 'firewall',
    SHAREBANDWIDTH = 'shareBandwidth',
    SHAREBANDWIDTHIP = 'shareBandwidthIP',
    LOADBALANCER = 'loadbalancer',
    LISTENER = 'listener',
    PHYSICALCONNECT = 'physicalConnect',
    VIRTUALINTERFACE = 'virtualInterface',
    VPCCONTAINROUTETABLE = 'vpcContainRoutetable',
    ROUTETABLECONTAINROUTES = 'routetableContainRoutes'
}
