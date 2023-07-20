

export class ListenerInsertHeaders {
    private 'X-Forwarded-ELB-IP'?: boolean;
    private 'X-Forwarded-Port'?: boolean;
    private 'X-Forwarded-For-Port'?: boolean;
    private 'X-Forwarded-Host'?: boolean;
    public constructor() { 
    }
    public withXForwardedELBIP(xForwardedELBIP: boolean): ListenerInsertHeaders {
        this['X-Forwarded-ELB-IP'] = xForwardedELBIP;
        return this;
    }
    public set xForwardedELBIP(xForwardedELBIP: boolean  | undefined) {
        this['X-Forwarded-ELB-IP'] = xForwardedELBIP;
    }
    public get xForwardedELBIP(): boolean | undefined {
        return this['X-Forwarded-ELB-IP'];
    }
    public withXForwardedPort(xForwardedPort: boolean): ListenerInsertHeaders {
        this['X-Forwarded-Port'] = xForwardedPort;
        return this;
    }
    public set xForwardedPort(xForwardedPort: boolean  | undefined) {
        this['X-Forwarded-Port'] = xForwardedPort;
    }
    public get xForwardedPort(): boolean | undefined {
        return this['X-Forwarded-Port'];
    }
    public withXForwardedForPort(xForwardedForPort: boolean): ListenerInsertHeaders {
        this['X-Forwarded-For-Port'] = xForwardedForPort;
        return this;
    }
    public set xForwardedForPort(xForwardedForPort: boolean  | undefined) {
        this['X-Forwarded-For-Port'] = xForwardedForPort;
    }
    public get xForwardedForPort(): boolean | undefined {
        return this['X-Forwarded-For-Port'];
    }
    public withXForwardedHost(xForwardedHost: boolean): ListenerInsertHeaders {
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