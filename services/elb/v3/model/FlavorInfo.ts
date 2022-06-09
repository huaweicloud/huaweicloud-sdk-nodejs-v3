

export class FlavorInfo {
    public connection: number;
    public cps: number;
    public qps?: number;
    public bandwidth?: number;
    public lcu?: number;
    private 'https_cps'?: number | undefined;
    public constructor(connection?: any, cps?: any) { 
        this['connection'] = connection;
        this['cps'] = cps;
    }
    public withConnection(connection: number): FlavorInfo {
        this['connection'] = connection;
        return this;
    }
    public withCps(cps: number): FlavorInfo {
        this['cps'] = cps;
        return this;
    }
    public withQps(qps: number): FlavorInfo {
        this['qps'] = qps;
        return this;
    }
    public withBandwidth(bandwidth: number): FlavorInfo {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withLcu(lcu: number): FlavorInfo {
        this['lcu'] = lcu;
        return this;
    }
    public withHttpsCps(httpsCps: number): FlavorInfo {
        this['https_cps'] = httpsCps;
        return this;
    }
    public set httpsCps(httpsCps: number | undefined) {
        this['https_cps'] = httpsCps;
    }
    public get httpsCps() {
        return this['https_cps'];
    }
}