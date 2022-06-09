import { ResourceList } from './ResourceList';


export class HealthmonitorResp {
    public id: string;
    private 'project_id': string | undefined;
    private 'tenant_id': string | undefined;
    public name: string;
    private 'admin_state_up': boolean | undefined;
    private 'monitor_port': number | undefined;
    public timeout: number;
    public type: HealthmonitorRespTypeEnum;
    private 'expected_codes': string | undefined;
    private 'domain_name': string | undefined;
    private 'url_path': string | undefined;
    private 'http_method': string | undefined;
    public delay: number;
    private 'max_retries': number | undefined;
    public pools: Array<ResourceList>;
    public constructor(id?: any, projectId?: any, tenantId?: any, name?: any, adminStateUp?: any, monitorPort?: any, timeout?: any, type?: any, expectedCodes?: any, domainName?: any, urlPath?: any, httpMethod?: any, delay?: any, maxRetries?: any, pools?: any) { 
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
    }
    public withId(id: string): HealthmonitorResp {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): HealthmonitorResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withTenantId(tenantId: string): HealthmonitorResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
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
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withMonitorPort(monitorPort: number): HealthmonitorResp {
        this['monitor_port'] = monitorPort;
        return this;
    }
    public set monitorPort(monitorPort: number | undefined) {
        this['monitor_port'] = monitorPort;
    }
    public get monitorPort() {
        return this['monitor_port'];
    }
    public withTimeout(timeout: number): HealthmonitorResp {
        this['timeout'] = timeout;
        return this;
    }
    public withType(type: HealthmonitorRespTypeEnum): HealthmonitorResp {
        this['type'] = type;
        return this;
    }
    public withExpectedCodes(expectedCodes: string): HealthmonitorResp {
        this['expected_codes'] = expectedCodes;
        return this;
    }
    public set expectedCodes(expectedCodes: string | undefined) {
        this['expected_codes'] = expectedCodes;
    }
    public get expectedCodes() {
        return this['expected_codes'];
    }
    public withDomainName(domainName: string): HealthmonitorResp {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withUrlPath(urlPath: string): HealthmonitorResp {
        this['url_path'] = urlPath;
        return this;
    }
    public set urlPath(urlPath: string | undefined) {
        this['url_path'] = urlPath;
    }
    public get urlPath() {
        return this['url_path'];
    }
    public withHttpMethod(httpMethod: string): HealthmonitorResp {
        this['http_method'] = httpMethod;
        return this;
    }
    public set httpMethod(httpMethod: string | undefined) {
        this['http_method'] = httpMethod;
    }
    public get httpMethod() {
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
    public set maxRetries(maxRetries: number | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries() {
        return this['max_retries'];
    }
    public withPools(pools: Array<ResourceList>): HealthmonitorResp {
        this['pools'] = pools;
        return this;
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
