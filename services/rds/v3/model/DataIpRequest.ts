

export class DataIpRequest {
    private 'new_ip'?: string;
    public constructor(newIp?: string) { 
        this['new_ip'] = newIp;
    }
    public withNewIp(newIp: string): DataIpRequest {
        this['new_ip'] = newIp;
        return this;
    }
    public set newIp(newIp: string  | undefined) {
        this['new_ip'] = newIp;
    }
    public get newIp(): string | undefined {
        return this['new_ip'];
    }
}