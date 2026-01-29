

export class NetWork {
    public name?: string;
    public ip?: string;
    public ipv6?: string;
    public netmask?: string;
    public gateway?: string;
    public mtu?: number;
    public mac?: string;
    public id?: string;
    public constructor(mac?: string) { 
        this['mac'] = mac;
    }
    public withName(name: string): NetWork {
        this['name'] = name;
        return this;
    }
    public withIp(ip: string): NetWork {
        this['ip'] = ip;
        return this;
    }
    public withIpv6(ipv6: string): NetWork {
        this['ipv6'] = ipv6;
        return this;
    }
    public withNetmask(netmask: string): NetWork {
        this['netmask'] = netmask;
        return this;
    }
    public withGateway(gateway: string): NetWork {
        this['gateway'] = gateway;
        return this;
    }
    public withMtu(mtu: number): NetWork {
        this['mtu'] = mtu;
        return this;
    }
    public withMac(mac: string): NetWork {
        this['mac'] = mac;
        return this;
    }
    public withId(id: string): NetWork {
        this['id'] = id;
        return this;
    }
}