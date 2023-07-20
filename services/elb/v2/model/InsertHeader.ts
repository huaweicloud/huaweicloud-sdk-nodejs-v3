

export class InsertHeader {
    private 'X-Forwarded-ELB-IP'?: boolean;
    private 'X-Forwarded-Host'?: boolean;
    public constructor() { 
    }
    public withXForwardedELBIP(xForwardedELBIP: boolean): InsertHeader {
        this['X-Forwarded-ELB-IP'] = xForwardedELBIP;
        return this;
    }
    public set xForwardedELBIP(xForwardedELBIP: boolean  | undefined) {
        this['X-Forwarded-ELB-IP'] = xForwardedELBIP;
    }
    public get xForwardedELBIP(): boolean | undefined {
        return this['X-Forwarded-ELB-IP'];
    }
    public withXForwardedHost(xForwardedHost: boolean): InsertHeader {
        this['X-Forwarded-Host'] = xForwardedHost;
        return this;
    }
    public set xForwardedHost(xForwardedHost: boolean  | undefined) {
        this['X-Forwarded-Host'] = xForwardedHost;
    }
    public get xForwardedHost(): boolean | undefined {
        return this['X-Forwarded-Host'];
    }
}