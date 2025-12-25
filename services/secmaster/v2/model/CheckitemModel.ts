import { SpecCheckitemModel } from './SpecCheckitemModel';


export class CheckitemModel {
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
    public constructor(cloudServer?: string, description?: string, level?: string, method?: number, name?: string) { 
        this['cloud_server'] = cloudServer;
        this['description'] = description;
        this['level'] = level;
        this['method'] = method;
        this['name'] = name;
    }
    public withUuid(uuid: string): CheckitemModel {
        this['uuid'] = uuid;
        return this;
    }
    public withAggregationHandleStatus(aggregationHandleStatus: string): CheckitemModel {
        this['aggregation_handle_status'] = aggregationHandleStatus;
        return this;
    }
    public set aggregationHandleStatus(aggregationHandleStatus: string  | undefined) {
        this['aggregation_handle_status'] = aggregationHandleStatus;
    }
    public get aggregationHandleStatus(): string | undefined {
        return this['aggregation_handle_status'];
    }
    public withAuditProcedure(auditProcedure: string): CheckitemModel {
        this['audit_procedure'] = auditProcedure;
        return this;
    }
    public set auditProcedure(auditProcedure: string  | undefined) {
        this['audit_procedure'] = auditProcedure;
    }
    public get auditProcedure(): string | undefined {
        return this['audit_procedure'];
    }
    public withImpact(impact: string): CheckitemModel {
        this['impact'] = impact;
        return this;
    }
    public withCloudServer(cloudServer: string): CheckitemModel {
        this['cloud_server'] = cloudServer;
        return this;
    }
    public set cloudServer(cloudServer: string  | undefined) {
        this['cloud_server'] = cloudServer;
    }
    public get cloudServer(): string | undefined {
        return this['cloud_server'];
    }
    public withDescription(description: string): CheckitemModel {
        this['description'] = description;
        return this;
    }
    public withLevel(level: string): CheckitemModel {
        this['level'] = level;
        return this;
    }
    public withMethod(method: number): CheckitemModel {
        this['method'] = method;
        return this;
    }
    public withName(name: string): CheckitemModel {
        this['name'] = name;
        return this;
    }
    public withSource(source: number): CheckitemModel {
        this['source'] = source;
        return this;
    }
    public withWorkflowId(workflowId: string): CheckitemModel {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withSpecCheckitemList(specCheckitemList: Array<SpecCheckitemModel>): CheckitemModel {
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