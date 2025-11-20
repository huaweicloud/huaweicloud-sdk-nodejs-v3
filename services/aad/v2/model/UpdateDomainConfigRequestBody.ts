

export class UpdateDomainConfigRequestBody {
    private 'real_server_type'?: UpdateDomainConfigRequestBodyRealServerTypeEnum | number;
    private 'real_server'?: string;
    private 'port_http'?: Array<number>;
    private 'port_https'?: Array<number>;
    private 'overseas_type'?: string;
    private 'cert_name'?: string;
    public constructor(realServerType?: number, realServer?: string) { 
        this['real_server_type'] = realServerType;
        this['real_server'] = realServer;
    }
    public withRealServerType(realServerType: UpdateDomainConfigRequestBodyRealServerTypeEnum | number): UpdateDomainConfigRequestBody {
        this['real_server_type'] = realServerType;
        return this;
    }
    public set realServerType(realServerType: UpdateDomainConfigRequestBodyRealServerTypeEnum | number  | undefined) {
        this['real_server_type'] = realServerType;
    }
    public get realServerType(): UpdateDomainConfigRequestBodyRealServerTypeEnum | number | undefined {
        return this['real_server_type'];
    }
    public withRealServer(realServer: string): UpdateDomainConfigRequestBody {
        this['real_server'] = realServer;
        return this;
    }
    public set realServer(realServer: string  | undefined) {
        this['real_server'] = realServer;
    }
    public get realServer(): string | undefined {
        return this['real_server'];
    }
    public withPortHttp(portHttp: Array<number>): UpdateDomainConfigRequestBody {
        this['port_http'] = portHttp;
        return this;
    }
    public set portHttp(portHttp: Array<number>  | undefined) {
        this['port_http'] = portHttp;
    }
    public get portHttp(): Array<number> | undefined {
        return this['port_http'];
    }
    public withPortHttps(portHttps: Array<number>): UpdateDomainConfigRequestBody {
        this['port_https'] = portHttps;
        return this;
    }
    public set portHttps(portHttps: Array<number>  | undefined) {
        this['port_https'] = portHttps;
    }
    public get portHttps(): Array<number> | undefined {
        return this['port_https'];
    }
    public withOverseasType(overseasType: string): UpdateDomainConfigRequestBody {
        this['overseas_type'] = overseasType;
        return this;
    }
    public set overseasType(overseasType: string  | undefined) {
        this['overseas_type'] = overseasType;
    }
    public get overseasType(): string | undefined {
        return this['overseas_type'];
    }
    public withCertName(certName: string): UpdateDomainConfigRequestBody {
        this['cert_name'] = certName;
        return this;
    }
    public set certName(certName: string  | undefined) {
        this['cert_name'] = certName;
    }
    public get certName(): string | undefined {
        return this['cert_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateDomainConfigRequestBodyRealServerTypeEnum {
    NUMBER_1 = 1,
    NUMBER_0 = 0
}
