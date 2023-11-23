

export class CreateMasterSlaveHealthMonitorOption {
    public delay?: number;
    private 'domain_name'?: string;
    private 'expected_codes'?: string;
    private 'http_method'?: string;
    private 'max_retries'?: number;
    private 'max_retries_down'?: number;
    private 'monitor_port'?: number;
    public name?: string;
    public timeout?: number;
    public type?: string;
    private 'url_path'?: string;
    public constructor(delay?: number, maxRetries?: number, timeout?: number, type?: string) { 
        this['delay'] = delay;
        this['max_retries'] = maxRetries;
        this['timeout'] = timeout;
        this['type'] = type;
    }
    public withDelay(delay: number): CreateMasterSlaveHealthMonitorOption {
        this['delay'] = delay;
        return this;
    }
    public withDomainName(domainName: string): CreateMasterSlaveHealthMonitorOption {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withExpectedCodes(expectedCodes: string): CreateMasterSlaveHealthMonitorOption {
        this['expected_codes'] = expectedCodes;
        return this;
    }
    public set expectedCodes(expectedCodes: string  | undefined) {
        this['expected_codes'] = expectedCodes;
    }
    public get expectedCodes(): string | undefined {
        return this['expected_codes'];
    }
    public withHttpMethod(httpMethod: string): CreateMasterSlaveHealthMonitorOption {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: string  | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod(): string | undefined {
        return this['http_method'];
    }
    public withMaxRetries(maxRetries: number): CreateMasterSlaveHealthMonitorOption {
        this['max_retries'] = maxRetries;
        return this;
    }
    public set maxRetries(maxRetries: number  | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries(): number | undefined {
        return this['max_retries'];
    }
    public withMaxRetriesDown(maxRetriesDown: number): CreateMasterSlaveHealthMonitorOption {
        this['max_retries_down'] = maxRetriesDown;
        return this;
    }
    public set maxRetriesDown(maxRetriesDown: number  | undefined) {
        this['max_retries_down'] = maxRetriesDown;
    }
    public get maxRetriesDown(): number | undefined {
        return this['max_retries_down'];
    }
    public withMonitorPort(monitorPort: number): CreateMasterSlaveHealthMonitorOption {
        this['monitor_port'] = monitorPort;
        return this;
    }
    public set monitorPort(monitorPort: number  | undefined) {
        this['monitor_port'] = monitorPort;
    }
    public get monitorPort(): number | undefined {
        return this['monitor_port'];
    }
    public withName(name: string): CreateMasterSlaveHealthMonitorOption {
        this['name'] = name;
        return this;
    }
    public withTimeout(timeout: number): CreateMasterSlaveHealthMonitorOption {
        this['timeout'] = timeout;
        return this;
    }
    public withType(type: string): CreateMasterSlaveHealthMonitorOption {
        this['type'] = type;
        return this;
    }
    public withUrlPath(urlPath: string): CreateMasterSlaveHealthMonitorOption {
        this['url_path'] = urlPath;
        return this;
    }
    public set urlPath(urlPath: string  | undefined) {
        this['url_path'] = urlPath;
    }
    public get urlPath(): string | undefined {
        return this['url_path'];
    }
}