

export class CreateHealthMonitorOption {
    private 'admin_state_up'?: boolean;
    public delay?: number;
    private 'domain_name'?: string;
    private 'expected_codes'?: string;
    private 'http_method'?: string;
    private 'max_retries'?: number;
    private 'max_retries_down'?: number;
    private 'monitor_port'?: number;
    public name?: string;
    private 'pool_id'?: string;
    private 'project_id'?: string;
    public timeout?: number;
    public type?: string;
    private 'url_path'?: string;
    public constructor(delay?: number, maxRetries?: number, poolId?: string, timeout?: number, type?: string) { 
        this['delay'] = delay;
        this['max_retries'] = maxRetries;
        this['pool_id'] = poolId;
        this['timeout'] = timeout;
        this['type'] = type;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateHealthMonitorOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withDelay(delay: number): CreateHealthMonitorOption {
        this['delay'] = delay;
        return this;
    }
    public withDomainName(domainName: string): CreateHealthMonitorOption {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withExpectedCodes(expectedCodes: string): CreateHealthMonitorOption {
        this['expected_codes'] = expectedCodes;
        return this;
    }
    public set expectedCodes(expectedCodes: string  | undefined) {
        this['expected_codes'] = expectedCodes;
    }
    public get expectedCodes(): string | undefined {
        return this['expected_codes'];
    }
    public withHttpMethod(httpMethod: string): CreateHealthMonitorOption {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: string  | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod(): string | undefined {
        return this['http_method'];
    }
    public withMaxRetries(maxRetries: number): CreateHealthMonitorOption {
        this['max_retries'] = maxRetries;
        return this;
    }
    public set maxRetries(maxRetries: number  | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries(): number | undefined {
        return this['max_retries'];
    }
    public withMaxRetriesDown(maxRetriesDown: number): CreateHealthMonitorOption {
        this['max_retries_down'] = maxRetriesDown;
        return this;
    }
    public set maxRetriesDown(maxRetriesDown: number  | undefined) {
        this['max_retries_down'] = maxRetriesDown;
    }
    public get maxRetriesDown(): number | undefined {
        return this['max_retries_down'];
    }
    public withMonitorPort(monitorPort: number): CreateHealthMonitorOption {
        this['monitor_port'] = monitorPort;
        return this;
    }
    public set monitorPort(monitorPort: number  | undefined) {
        this['monitor_port'] = monitorPort;
    }
    public get monitorPort(): number | undefined {
        return this['monitor_port'];
    }
    public withName(name: string): CreateHealthMonitorOption {
        this['name'] = name;
        return this;
    }
    public withPoolId(poolId: string): CreateHealthMonitorOption {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withProjectId(projectId: string): CreateHealthMonitorOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTimeout(timeout: number): CreateHealthMonitorOption {
        this['timeout'] = timeout;
        return this;
    }
    public withType(type: string): CreateHealthMonitorOption {
        this['type'] = type;
        return this;
    }
    public withUrlPath(urlPath: string): CreateHealthMonitorOption {
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