import { Metric } from './Metric';


export class DesktopMetric {
    private 'resource_id'?: string;
    private 'resource_pool_id'?: string;
    private 'resource_pool_name'?: string;
    private 'resource_name'?: string;
    private 'enterprise_project_id'?: string;
    private 'machine_sid'?: string;
    private 'latest_connect_username'?: string;
    public metric?: Array<Metric>;
    public constructor() { 
    }
    public withResourceId(resourceId: string): DesktopMetric {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourcePoolId(resourcePoolId: string): DesktopMetric {
        this['resource_pool_id'] = resourcePoolId;
        return this;
    }
    public set resourcePoolId(resourcePoolId: string  | undefined) {
        this['resource_pool_id'] = resourcePoolId;
    }
    public get resourcePoolId(): string | undefined {
        return this['resource_pool_id'];
    }
    public withResourcePoolName(resourcePoolName: string): DesktopMetric {
        this['resource_pool_name'] = resourcePoolName;
        return this;
    }
    public set resourcePoolName(resourcePoolName: string  | undefined) {
        this['resource_pool_name'] = resourcePoolName;
    }
    public get resourcePoolName(): string | undefined {
        return this['resource_pool_name'];
    }
    public withResourceName(resourceName: string): DesktopMetric {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DesktopMetric {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withMachineSid(machineSid: string): DesktopMetric {
        this['machine_sid'] = machineSid;
        return this;
    }
    public set machineSid(machineSid: string  | undefined) {
        this['machine_sid'] = machineSid;
    }
    public get machineSid(): string | undefined {
        return this['machine_sid'];
    }
    public withLatestConnectUsername(latestConnectUsername: string): DesktopMetric {
        this['latest_connect_username'] = latestConnectUsername;
        return this;
    }
    public set latestConnectUsername(latestConnectUsername: string  | undefined) {
        this['latest_connect_username'] = latestConnectUsername;
    }
    public get latestConnectUsername(): string | undefined {
        return this['latest_connect_username'];
    }
    public withMetric(metric: Array<Metric>): DesktopMetric {
        this['metric'] = metric;
        return this;
    }
}