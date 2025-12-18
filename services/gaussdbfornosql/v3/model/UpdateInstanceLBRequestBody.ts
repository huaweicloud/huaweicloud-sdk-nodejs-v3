

export class UpdateInstanceLBRequestBody {
    public ip?: string;
    public constructor(ip?: string) { 
        this['ip'] = ip;
    }
    public withIp(ip: string): UpdateInstanceLBRequestBody {
        this['ip'] = ip;
        return this;
    }
}