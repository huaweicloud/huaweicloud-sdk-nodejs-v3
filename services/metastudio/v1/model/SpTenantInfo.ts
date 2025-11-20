import { AllocateSpResourceInfo } from './AllocateSpResourceInfo';
import { AllocateSpResourceSummaryInfo } from './AllocateSpResourceSummaryInfo';


export class SpTenantInfo {
    private 'customer_project_id'?: string;
    private 'customer_name'?: string;
    private 'region_id'?: string;
    private 'resource_count'?: number;
    public resources?: Array<AllocateSpResourceInfo>;
    private 'resources_overview'?: Array<AllocateSpResourceSummaryInfo>;
    public constructor() { 
    }
    public withCustomerProjectId(customerProjectId: string): SpTenantInfo {
        this['customer_project_id'] = customerProjectId;
        return this;
    }
    public set customerProjectId(customerProjectId: string  | undefined) {
        this['customer_project_id'] = customerProjectId;
    }
    public get customerProjectId(): string | undefined {
        return this['customer_project_id'];
    }
    public withCustomerName(customerName: string): SpTenantInfo {
        this['customer_name'] = customerName;
        return this;
    }
    public set customerName(customerName: string  | undefined) {
        this['customer_name'] = customerName;
    }
    public get customerName(): string | undefined {
        return this['customer_name'];
    }
    public withRegionId(regionId: string): SpTenantInfo {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withResourceCount(resourceCount: number): SpTenantInfo {
        this['resource_count'] = resourceCount;
        return this;
    }
    public set resourceCount(resourceCount: number  | undefined) {
        this['resource_count'] = resourceCount;
    }
    public get resourceCount(): number | undefined {
        return this['resource_count'];
    }
    public withResources(resources: Array<AllocateSpResourceInfo>): SpTenantInfo {
        this['resources'] = resources;
        return this;
    }
    public withResourcesOverview(resourcesOverview: Array<AllocateSpResourceSummaryInfo>): SpTenantInfo {
        this['resources_overview'] = resourcesOverview;
        return this;
    }
    public set resourcesOverview(resourcesOverview: Array<AllocateSpResourceSummaryInfo>  | undefined) {
        this['resources_overview'] = resourcesOverview;
    }
    public get resourcesOverview(): Array<AllocateSpResourceSummaryInfo> | undefined {
        return this['resources_overview'];
    }
}