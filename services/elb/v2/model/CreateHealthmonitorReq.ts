

export class CreateHealthmonitorReq {
    private 'tenant_id'?: string | undefined;
    public name?: string;
    private 'admin_state_up'?: boolean | undefined;
    private 'monitor_port'?: number | undefined;
    public timeout: number;
    public type: CreateHealthmonitorReqTypeEnum;
    private 'expected_codes'?: string | undefined;
    private 'domain_name'?: string | undefined;
    private 'url_path'?: string | undefined;
    private 'http_method'?: string | undefined;
    public delay: number;
    private 'max_retries': number | undefined;
    private 'pool_id': string | undefined;
    public constructor(timeout?: any, type?: any, delay?: any, maxRetries?: any, poolId?: any) { 
        this['timeout'] = timeout;
        this['type'] = type;
        this['delay'] = delay;
        this['max_retries'] = maxRetries;
        this['pool_id'] = poolId;
    }
    public withTenantId(tenantId: string): CreateHealthmonitorReq {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withName(name: string): CreateHealthmonitorReq {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateHealthmonitorReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withMonitorPort(monitorPort: number): CreateHealthmonitorReq {
        this['monitor_port'] = monitorPort;
        return this;
    }
    public set monitorPort(monitorPort: number | undefined) {
        this['monitor_port'] = monitorPort;
    }
    public get monitorPort() {
        return this['monitor_port'];
    }
    public withTimeout(timeout: number): CreateHealthmonitorReq {
        this['timeout'] = timeout;
        return this;
    }
    public withType(type: CreateHealthmonitorReqTypeEnum): CreateHealthmonitorReq {
        this['type'] = type;
        return this;
    }
    public withExpectedCodes(expectedCodes: string): CreateHealthmonitorReq {
        this['expected_codes'] = expectedCodes;
        return this;
    }
    public set expectedCodes(expectedCodes: string | undefined) {
        this['expected_codes'] = expectedCodes;
    }
    public get expectedCodes() {
        return this['expected_codes'];
    }
    public withDomainName(domainName: string): CreateHealthmonitorReq {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withUrlPath(urlPath: string): CreateHealthmonitorReq {
        this['url_path'] = urlPath;
        return this;
    }
    public set urlPath(urlPath: string | undefined) {
        this['url_path'] = urlPath;
    }
    public get urlPath() {
        return this['url_path'];
    }
    public withHttpMethod(httpMethod: string): CreateHealthmonitorReq {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: string | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod() {
        return this['http_method'];
    }
    public withDelay(delay: number): CreateHealthmonitorReq {
        this['delay'] = delay;
        return this;
    }
    public withMaxRetries(maxRetries: number): CreateHealthmonitorReq {
        this['max_retries'] = maxRetries;
        return this;
    }
    public set maxRetries(maxRetries: number | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries() {
        return this['max_retries'];
    }
    public withPoolId(poolId: string): CreateHealthmonitorReq {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId() {
        return this['pool_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHealthmonitorReqTypeEnum {
    TCP = 'TCP',
    UDP_CONNECT = 'UDP_CONNECT',
    HTTP = 'HTTP'
}
