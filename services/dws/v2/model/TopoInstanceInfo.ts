

export class TopoInstanceInfo {
    public id?: string;
    public name?: string;
    private 'manage_ip'?: string;
    private 'traffic_ip'?: string;
    private 'internal_ip'?: string;
    private 'internal_mgnt_ip'?: string;
    public eip?: string;
    public elb?: string;
    public status?: string;
    private 'az_code'?: string;
    public constructor() { 
    }
    public withId(id: string): TopoInstanceInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TopoInstanceInfo {
        this['name'] = name;
        return this;
    }
    public withManageIp(manageIp: string): TopoInstanceInfo {
        this['manage_ip'] = manageIp;
        return this;
    }
    public set manageIp(manageIp: string  | undefined) {
        this['manage_ip'] = manageIp;
    }
    public get manageIp(): string | undefined {
        return this['manage_ip'];
    }
    public withTrafficIp(trafficIp: string): TopoInstanceInfo {
        this['traffic_ip'] = trafficIp;
        return this;
    }
    public set trafficIp(trafficIp: string  | undefined) {
        this['traffic_ip'] = trafficIp;
    }
    public get trafficIp(): string | undefined {
        return this['traffic_ip'];
    }
    public withInternalIp(internalIp: string): TopoInstanceInfo {
        this['internal_ip'] = internalIp;
        return this;
    }
    public set internalIp(internalIp: string  | undefined) {
        this['internal_ip'] = internalIp;
    }
    public get internalIp(): string | undefined {
        return this['internal_ip'];
    }
    public withInternalMgntIp(internalMgntIp: string): TopoInstanceInfo {
        this['internal_mgnt_ip'] = internalMgntIp;
        return this;
    }
    public set internalMgntIp(internalMgntIp: string  | undefined) {
        this['internal_mgnt_ip'] = internalMgntIp;
    }
    public get internalMgntIp(): string | undefined {
        return this['internal_mgnt_ip'];
    }
    public withEip(eip: string): TopoInstanceInfo {
        this['eip'] = eip;
        return this;
    }
    public withElb(elb: string): TopoInstanceInfo {
        this['elb'] = elb;
        return this;
    }
    public withStatus(status: string): TopoInstanceInfo {
        this['status'] = status;
        return this;
    }
    public withAzCode(azCode: string): TopoInstanceInfo {
        this['az_code'] = azCode;
        return this;
    }
    public set azCode(azCode: string  | undefined) {
        this['az_code'] = azCode;
    }
    public get azCode(): string | undefined {
        return this['az_code'];
    }
}