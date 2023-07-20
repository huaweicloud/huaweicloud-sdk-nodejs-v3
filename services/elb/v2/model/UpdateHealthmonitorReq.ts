

export class UpdateHealthmonitorReq {
    public name?: string;
    private 'admin_state_up'?: boolean;
    private 'monitor_port'?: number;
    public timeout?: number;
    private 'expected_codes'?: string;
    private 'domain_name'?: string;
    private 'url_path'?: string;
    private 'http_method'?: string;
    public delay?: number;
    private 'max_retries'?: number;
    public type?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateHealthmonitorReq {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateHealthmonitorReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withMonitorPort(monitorPort: number): UpdateHealthmonitorReq {
        this['monitor_port'] = monitorPort;
        return this;
    }
    public set monitorPort(monitorPort: number  | undefined) {
        this['monitor_port'] = monitorPort;
    }
    public get monitorPort(): number | undefined {
        return this['monitor_port'];
    }
    public withTimeout(timeout: number): UpdateHealthmonitorReq {
        this['timeout'] = timeout;
        return this;
    }
    public withExpectedCodes(expectedCodes: string): UpdateHealthmonitorReq {
        this['expected_codes'] = expectedCodes;
        return this;
    }
    public set expectedCodes(expectedCodes: string  | undefined) {
        this['expected_codes'] = expectedCodes;
    }
    public get expectedCodes(): string | undefined {
        return this['expected_codes'];
    }
    public withDomainName(domainName: string): UpdateHealthmonitorReq {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withUrlPath(urlPath: string): UpdateHealthmonitorReq {
        this['url_path'] = urlPath;
        return this;
    }
    public set urlPath(urlPath: string  | undefined) {
        this['url_path'] = urlPath;
    }
    public get urlPath(): string | undefined {
        return this['url_path'];
    }
    public withHttpMethod(httpMethod: string): UpdateHealthmonitorReq {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: string  | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod(): string | undefined {
        return this['http_method'];
    }
    public withDelay(delay: number): UpdateHealthmonitorReq {
        this['delay'] = delay;
        return this;
    }
    public withMaxRetries(maxRetries: number): UpdateHealthmonitorReq {
        this['max_retries'] = maxRetries;
        return this;
    }
    public set maxRetries(maxRetries: number  | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries(): number | undefined {
        return this['max_retries'];
    }
    public withType(type: string): UpdateHealthmonitorReq {
        this['type'] = type;
        return this;
    }
}