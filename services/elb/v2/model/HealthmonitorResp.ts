import { ResourceList } from './ResourceList';


export class HealthmonitorResp {
    public id?: string;
    private 'project_id'?: string;
    private 'tenant_id'?: string;
    public name?: string;
    private 'admin_state_up'?: boolean;
    private 'monitor_port'?: number;
    public timeout?: number;
    public type?: HealthmonitorRespTypeEnum | string;
    private 'expected_codes'?: string;
    private 'domain_name'?: string;
    private 'url_path'?: string;
    private 'http_method'?: string;
    public delay?: number;
    private 'max_retries'?: number;
    public pools?: Array<ResourceList>;
    private 'max_retries_down'?: number;
    public constructor(id?: string, projectId?: string, tenantId?: string, name?: string, adminStateUp?: boolean, monitorPort?: number, timeout?: number, type?: string, expectedCodes?: string, domainName?: string, urlPath?: string, httpMethod?: string, delay?: number, maxRetries?: number, pools?: Array<ResourceList>, maxRetriesDown?: number) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['tenant_id'] = tenantId;
        this['name'] = name;
        this['admin_state_up'] = adminStateUp;
        this['monitor_port'] = monitorPort;
        this['timeout'] = timeout;
        this['type'] = type;
        this['expected_codes'] = expectedCodes;
        this['domain_name'] = domainName;
        this['url_path'] = urlPath;
        this['http_method'] = httpMethod;
        this['delay'] = delay;
        this['max_retries'] = maxRetries;
        this['pools'] = pools;
        this['max_retries_down'] = maxRetriesDown;
    }
    public withId(id: string): HealthmonitorResp {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): HealthmonitorResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTenantId(tenantId: string): HealthmonitorResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): HealthmonitorResp {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): HealthmonitorResp {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withMonitorPort(monitorPort: number): HealthmonitorResp {
        this['monitor_port'] = monitorPort;
        return this;
    }
    public set monitorPort(monitorPort: number  | undefined) {
        this['monitor_port'] = monitorPort;
    }
    public get monitorPort(): number | undefined {
        return this['monitor_port'];
    }
    public withTimeout(timeout: number): HealthmonitorResp {
        this['timeout'] = timeout;
        return this;
    }
    public withType(type: HealthmonitorRespTypeEnum | string): HealthmonitorResp {
        this['type'] = type;
        return this;
    }
    public withExpectedCodes(expectedCodes: string): HealthmonitorResp {
        this['expected_codes'] = expectedCodes;
        return this;
    }
    public set expectedCodes(expectedCodes: string  | undefined) {
        this['expected_codes'] = expectedCodes;
    }
    public get expectedCodes(): string | undefined {
        return this['expected_codes'];
    }
    public withDomainName(domainName: string): HealthmonitorResp {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withUrlPath(urlPath: string): HealthmonitorResp {
        this['url_path'] = urlPath;
        return this;
    }
    public set urlPath(urlPath: string  | undefined) {
        this['url_path'] = urlPath;
    }
    public get urlPath(): string | undefined {
        return this['url_path'];
    }
    public withHttpMethod(httpMethod: string): HealthmonitorResp {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: string  | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod(): string | undefined {
        return this['http_method'];
    }
    public withDelay(delay: number): HealthmonitorResp {
        this['delay'] = delay;
        return this;
    }
    public withMaxRetries(maxRetries: number): HealthmonitorResp {
        this['max_retries'] = maxRetries;
        return this;
    }
    public set maxRetries(maxRetries: number  | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries(): number | undefined {
        return this['max_retries'];
    }
    public withPools(pools: Array<ResourceList>): HealthmonitorResp {
        this['pools'] = pools;
        return this;
    }
    public withMaxRetriesDown(maxRetriesDown: number): HealthmonitorResp {
        this['max_retries_down'] = maxRetriesDown;
        return this;
    }
    public set maxRetriesDown(maxRetriesDown: number  | undefined) {
        this['max_retries_down'] = maxRetriesDown;
    }
    public get maxRetriesDown(): number | undefined {
        return this['max_retries_down'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum HealthmonitorRespTypeEnum {
    TCP = 'TCP',
    UDP_CONNECT = 'UDP_CONNECT',
    HTTP = 'HTTP'
}
