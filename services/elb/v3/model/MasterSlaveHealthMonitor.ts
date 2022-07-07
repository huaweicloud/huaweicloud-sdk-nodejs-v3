

export class MasterSlaveHealthMonitor {
    private 'admin_state_up': boolean | undefined;
    public delay: number;
    private 'domain_name': string | undefined;
    private 'expected_codes': string | undefined;
    private 'http_method': string | undefined;
    public id: string;
    private 'max_retries': number | undefined;
    private 'max_retries_down': number | undefined;
    private 'monitor_port': number | undefined;
    public name: string;
    public timeout: number;
    public type: string;
    private 'url_path': string | undefined;
    public constructor(adminStateUp?: any, delay?: any, domainName?: any, expectedCodes?: any, httpMethod?: any, id?: any, maxRetries?: any, maxRetriesDown?: any, monitorPort?: any, name?: any, timeout?: any, type?: any, urlPath?: any) { 
        this['admin_state_up'] = adminStateUp;
        this['delay'] = delay;
        this['domain_name'] = domainName;
        this['expected_codes'] = expectedCodes;
        this['http_method'] = httpMethod;
        this['id'] = id;
        this['max_retries'] = maxRetries;
        this['max_retries_down'] = maxRetriesDown;
        this['monitor_port'] = monitorPort;
        this['name'] = name;
        this['timeout'] = timeout;
        this['type'] = type;
        this['url_path'] = urlPath;
    }
    public withAdminStateUp(adminStateUp: boolean): MasterSlaveHealthMonitor {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withDelay(delay: number): MasterSlaveHealthMonitor {
        this['delay'] = delay;
        return this;
    }
    public withDomainName(domainName: string): MasterSlaveHealthMonitor {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withExpectedCodes(expectedCodes: string): MasterSlaveHealthMonitor {
        this['expected_codes'] = expectedCodes;
        return this;
    }
    public set expectedCodes(expectedCodes: string | undefined) {
        this['expected_codes'] = expectedCodes;
    }
    public get expectedCodes() {
        return this['expected_codes'];
    }
    public withHttpMethod(httpMethod: string): MasterSlaveHealthMonitor {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: string | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod() {
        return this['http_method'];
    }
    public withId(id: string): MasterSlaveHealthMonitor {
        this['id'] = id;
        return this;
    }
    public withMaxRetries(maxRetries: number): MasterSlaveHealthMonitor {
        this['max_retries'] = maxRetries;
        return this;
    }
    public set maxRetries(maxRetries: number | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries() {
        return this['max_retries'];
    }
    public withMaxRetriesDown(maxRetriesDown: number): MasterSlaveHealthMonitor {
        this['max_retries_down'] = maxRetriesDown;
        return this;
    }
    public set maxRetriesDown(maxRetriesDown: number | undefined) {
        this['max_retries_down'] = maxRetriesDown;
    }
    public get maxRetriesDown() {
        return this['max_retries_down'];
    }
    public withMonitorPort(monitorPort: number): MasterSlaveHealthMonitor {
        this['monitor_port'] = monitorPort;
        return this;
    }
    public set monitorPort(monitorPort: number | undefined) {
        this['monitor_port'] = monitorPort;
    }
    public get monitorPort() {
        return this['monitor_port'];
    }
    public withName(name: string): MasterSlaveHealthMonitor {
        this['name'] = name;
        return this;
    }
    public withTimeout(timeout: number): MasterSlaveHealthMonitor {
        this['timeout'] = timeout;
        return this;
    }
    public withType(type: string): MasterSlaveHealthMonitor {
        this['type'] = type;
        return this;
    }
    public withUrlPath(urlPath: string): MasterSlaveHealthMonitor {
        this['url_path'] = urlPath;
        return this;
    }
    public set urlPath(urlPath: string | undefined) {
        this['url_path'] = urlPath;
    }
    public get urlPath() {
        return this['url_path'];
    }
}