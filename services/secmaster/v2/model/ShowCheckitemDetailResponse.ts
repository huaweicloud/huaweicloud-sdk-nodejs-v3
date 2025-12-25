import { SpecCheckitemModel } from './SpecCheckitemModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCheckitemDetailResponse extends SdkResponse {
    public uuid?: string;
    private 'aggregation_handle_status'?: string;
    private 'audit_procedure'?: string;
    public impact?: string;
    private 'cloud_server'?: string;
    public description?: string;
    public level?: string;
    public method?: number;
    public name?: string;
    public source?: number;
    private 'workflow_id'?: string;
    private 'spec_checkitem_list'?: Array<SpecCheckitemModel>;
    public constructor() { 
        super();
    }
    public withUuid(uuid: string): ShowCheckitemDetailResponse {
        this['uuid'] = uuid;
        return this;
    }
    public withAggregationHandleStatus(aggregationHandleStatus: string): ShowCheckitemDetailResponse {
        this['aggregation_handle_status'] = aggregationHandleStatus;
        return this;
    }
    public set aggregationHandleStatus(aggregationHandleStatus: string  | undefined) {
        this['aggregation_handle_status'] = aggregationHandleStatus;
    }
    public get aggregationHandleStatus(): string | undefined {
        return this['aggregation_handle_status'];
    }
    public withAuditProcedure(auditProcedure: string): ShowCheckitemDetailResponse {
        this['audit_procedure'] = auditProcedure;
        return this;
    }
    public set auditProcedure(auditProcedure: string  | undefined) {
        this['audit_procedure'] = auditProcedure;
    }
    public get auditProcedure(): string | undefined {
        return this['audit_procedure'];
    }
    public withImpact(impact: string): ShowCheckitemDetailResponse {
        this['impact'] = impact;
        return this;
    }
    public withCloudServer(cloudServer: string): ShowCheckitemDetailResponse {
        this['cloud_server'] = cloudServer;
        return this;
    }
    public set cloudServer(cloudServer: string  | undefined) {
        this['cloud_server'] = cloudServer;
    }
    public get cloudServer(): string | undefined {
        return this['cloud_server'];
    }
    public withDescription(description: string): ShowCheckitemDetailResponse {
        this['description'] = description;
        return this;
    }
    public withLevel(level: string): ShowCheckitemDetailResponse {
        this['level'] = level;
        return this;
    }
    public withMethod(method: number): ShowCheckitemDetailResponse {
        this['method'] = method;
        return this;
    }
    public withName(name: string): ShowCheckitemDetailResponse {
        this['name'] = name;
        return this;
    }
    public withSource(source: number): ShowCheckitemDetailResponse {
        this['source'] = source;
        return this;
    }
    public withWorkflowId(workflowId: string): ShowCheckitemDetailResponse {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withSpecCheckitemList(specCheckitemList: Array<SpecCheckitemModel>): ShowCheckitemDetailResponse {
        this['spec_checkitem_list'] = specCheckitemList;
        return this;
    }
    public set specCheckitemList(specCheckitemList: Array<SpecCheckitemModel>  | undefined) {
        this['spec_checkitem_list'] = specCheckitemList;
    }
    public get specCheckitemList(): Array<SpecCheckitemModel> | undefined {
        return this['spec_checkitem_list'];
    }
}