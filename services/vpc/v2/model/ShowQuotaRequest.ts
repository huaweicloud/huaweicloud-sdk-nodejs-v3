

export class ShowQuotaRequest {
    public type?: ShowQuotaRequestTypeEnum;
    public constructor() { 
    }
    public withType(type: ShowQuotaRequestTypeEnum): ShowQuotaRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowQuotaRequestTypeEnum {
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
