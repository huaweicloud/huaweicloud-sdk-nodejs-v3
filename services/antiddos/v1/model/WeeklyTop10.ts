

export class WeeklyTop10 {
    private 'floating_ip_address'?: string;
    public times?: number;
    public constructor(floatingIpAddress?: string, times?: number) { 
        this['floating_ip_address'] = floatingIpAddress;
        this['times'] = times;
    }
    public withFloatingIpAddress(floatingIpAddress: string): WeeklyTop10 {
        this['floating_ip_address'] = floatingIpAddress;
        return this;
    }
    public set floatingIpAddress(floatingIpAddress: string  | undefined) {
        this['floating_ip_address'] = floatingIpAddress;
    }
    public get floatingIpAddress(): string | undefined {
        return this['floating_ip_address'];
    }
    public withTimes(times: number): WeeklyTop10 {
        this['times'] = times;
        return this;
    }
}