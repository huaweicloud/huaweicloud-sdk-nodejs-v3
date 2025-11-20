import { AllocateSpResourceInfo } from './AllocateSpResourceInfo';
import { AllocateSpResourceSummaryInfo } from './AllocateSpResourceSummaryInfo';
import { SpTenantInfo } from './SpTenantInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTenantAssginRecordResponse extends SdkResponse {
    private 'customer_project_id'?: string;
    private 'customer_name'?: string;
    private 'region_id'?: string;
    private 'resource_count'?: number;
    public resources?: Array<AllocateSpResourceInfo>;
    private 'resources_overview'?: Array<AllocateSpResourceSummaryInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCustomerProjectId(customerProjectId: string): ShowTenantAssginRecordResponse {
        this['customer_project_id'] = customerProjectId;
        return this;
    }
    public set customerProjectId(customerProjectId: string  | undefined) {
        this['customer_project_id'] = customerProjectId;
    }
    public get customerProjectId(): string | undefined {
        return this['customer_project_id'];
    }
    public withCustomerName(customerName: string): ShowTenantAssginRecordResponse {
        this['customer_name'] = customerName;
        return this;
    }
    public set customerName(customerName: string  | undefined) {
        this['customer_name'] = customerName;
    }
    public get customerName(): string | undefined {
        return this['customer_name'];
    }
    public withRegionId(regionId: string): ShowTenantAssginRecordResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withResourceCount(resourceCount: number): ShowTenantAssginRecordResponse {
        this['resource_count'] = resourceCount;
        return this;
    }
    public set resourceCount(resourceCount: number  | undefined) {
        this['resource_count'] = resourceCount;
    }
    public get resourceCount(): number | undefined {
        return this['resource_count'];
    }
    public withResources(resources: Array<AllocateSpResourceInfo>): ShowTenantAssginRecordResponse {
        this['resources'] = resources;
        return this;
    }
    public withResourcesOverview(resourcesOverview: Array<AllocateSpResourceSummaryInfo>): ShowTenantAssginRecordResponse {
        this['resources_overview'] = resourcesOverview;
        return this;
    }
    public set resourcesOverview(resourcesOverview: Array<AllocateSpResourceSummaryInfo>  | undefined) {
        this['resources_overview'] = resourcesOverview;
    }
    public get resourcesOverview(): Array<AllocateSpResourceSummaryInfo> | undefined {
        return this['resources_overview'];
    }
    public withXRequestId(xRequestId: string): ShowTenantAssginRecordResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}