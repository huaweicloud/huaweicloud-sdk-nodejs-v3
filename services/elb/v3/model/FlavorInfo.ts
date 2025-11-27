

export class FlavorInfo {
    public connection?: number;
    public cps?: number;
    private 'tls_connection'?: number;
    private 'tls_cps'?: number;
    public qps?: number;
    public bandwidth?: number;
    public lcu?: number;
    private 'https_cps'?: number;
    public constructor(connection?: number, cps?: number) { 
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
    public withTlsConnection(tlsConnection: number): FlavorInfo {
        this['tls_connection'] = tlsConnection;
        return this;
    }
    public set tlsConnection(tlsConnection: number  | undefined) {
        this['tls_connection'] = tlsConnection;
    }
    public get tlsConnection(): number | undefined {
        return this['tls_connection'];
    }
    public withTlsCps(tlsCps: number): FlavorInfo {
        this['tls_cps'] = tlsCps;
        return this;
    }
    public set tlsCps(tlsCps: number  | undefined) {
        this['tls_cps'] = tlsCps;
    }
    public get tlsCps(): number | undefined {
        return this['tls_cps'];
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
    public set httpsCps(httpsCps: number  | undefined) {
        this['https_cps'] = httpsCps;
    }
    public get httpsCps(): number | undefined {
        return this['https_cps'];
    }
}