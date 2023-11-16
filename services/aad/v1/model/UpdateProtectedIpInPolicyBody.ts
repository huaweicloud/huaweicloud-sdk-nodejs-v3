

export class UpdateProtectedIpInPolicyBody {
    public id?: string;
    public ip?: string;
    public type?: UpdateProtectedIpInPolicyBodyTypeEnum | string;
    public name?: string;
    public constructor(id?: string, ip?: string, type?: string) { 
        this['id'] = id;
        this['ip'] = ip;
        this['type'] = type;
    }
    public withId(id: string): UpdateProtectedIpInPolicyBody {
        this['id'] = id;
        return this;
    }
    public withIp(ip: string): UpdateProtectedIpInPolicyBody {
        this['ip'] = ip;
        return this;
    }
    public withType(type: UpdateProtectedIpInPolicyBodyTypeEnum | string): UpdateProtectedIpInPolicyBody {
        this['type'] = type;
        return this;
    }
    public withName(name: string): UpdateProtectedIpInPolicyBody {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateProtectedIpInPolicyBodyTypeEnum {
    VPN = 'VPN',
    NAT = 'NAT',
    VIP = 'VIP',
    CCI = 'CCI',
    EIP = 'EIP',
    ELB = 'ELB',
    REROUTING_IP = 'REROUTING_IP',
    SUBENI = 'SubEni',
    NETINTERFACE = 'NetInterFace'
}
