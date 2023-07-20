

export class UpdateHealthMonitorOption {
    private 'admin_state_up'?: boolean;
    public delay?: number;
    private 'domain_name'?: string;
    private 'expected_codes'?: string;
    private 'http_method'?: UpdateHealthMonitorOptionHttpMethodEnum | string;
    private 'max_retries'?: number;
    private 'max_retries_down'?: number;
    private 'monitor_port'?: number;
    public name?: string;
    public timeout?: number;
    private 'url_path'?: string;
    public type?: string;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateHealthMonitorOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withDelay(delay: number): UpdateHealthMonitorOption {
        this['delay'] = delay;
        return this;
    }
    public withDomainName(domainName: string): UpdateHealthMonitorOption {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withExpectedCodes(expectedCodes: string): UpdateHealthMonitorOption {
        this['expected_codes'] = expectedCodes;
        return this;
    }
    public set expectedCodes(expectedCodes: string  | undefined) {
        this['expected_codes'] = expectedCodes;
    }
    public get expectedCodes(): string | undefined {
        return this['expected_codes'];
    }
    public withHttpMethod(httpMethod: UpdateHealthMonitorOptionHttpMethodEnum | string): UpdateHealthMonitorOption {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: UpdateHealthMonitorOptionHttpMethodEnum | string  | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod(): UpdateHealthMonitorOptionHttpMethodEnum | string | undefined {
        return this['http_method'];
    }
    public withMaxRetries(maxRetries: number): UpdateHealthMonitorOption {
        this['max_retries'] = maxRetries;
        return this;
    }
    public set maxRetries(maxRetries: number  | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries(): number | undefined {
        return this['max_retries'];
    }
    public withMaxRetriesDown(maxRetriesDown: number): UpdateHealthMonitorOption {
        this['max_retries_down'] = maxRetriesDown;
        return this;
    }
    public set maxRetriesDown(maxRetriesDown: number  | undefined) {
        this['max_retries_down'] = maxRetriesDown;
    }
    public get maxRetriesDown(): number | undefined {
        return this['max_retries_down'];
    }
    public withMonitorPort(monitorPort: number): UpdateHealthMonitorOption {
        this['monitor_port'] = monitorPort;
        return this;
    }
    public set monitorPort(monitorPort: number  | undefined) {
        this['monitor_port'] = monitorPort;
    }
    public get monitorPort(): number | undefined {
        return this['monitor_port'];
    }
    public withName(name: string): UpdateHealthMonitorOption {
        this['name'] = name;
        return this;
    }
    public withTimeout(timeout: number): UpdateHealthMonitorOption {
        this['timeout'] = timeout;
        return this;
    }
    public withUrlPath(urlPath: string): UpdateHealthMonitorOption {
        this['url_path'] = urlPath;
        return this;
    }
    public set urlPath(urlPath: string  | undefined) {
        this['url_path'] = urlPath;
    }
    public get urlPath(): string | undefined {
        return this['url_path'];
    }
    public withType(type: string): UpdateHealthMonitorOption {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateHealthMonitorOptionHttpMethodEnum {
    GET = 'GET',
    HEAD = 'HEAD',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    TRACE = 'TRACE',
    OPTIONS = 'OPTIONS',
    CONNECT = 'CONNECT',
    PATCH = 'PATCH'
}
