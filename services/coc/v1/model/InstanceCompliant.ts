import { CompliantSummary } from './CompliantSummary';
import { ExecutionSummary } from './ExecutionSummary';
import { NonCompliantSummary } from './NonCompliantSummary';


export class InstanceCompliant {
    private 'compliant_summary'?: CompliantSummary;
    private 'non_compliant_summary'?: NonCompliantSummary;
    private 'execution_summary'?: ExecutionSummary;
    public id?: string;
    private 'enterprise_project_id'?: string;
    public name?: string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    public ip?: string;
    public eip?: string;
    public region?: string;
    public group?: string;
    private 'report_scene'?: string;
    private 'cce_info_id'?: string;
    public status?: string;
    private 'baseline_id'?: string;
    private 'baseline_name'?: string;
    private 'rule_type'?: string;
    private 'operating_system'?: string;
    public constructor() { 
    }
    public withCompliantSummary(compliantSummary: CompliantSummary): InstanceCompliant {
        this['compliant_summary'] = compliantSummary;
        return this;
    }
    public set compliantSummary(compliantSummary: CompliantSummary  | undefined) {
        this['compliant_summary'] = compliantSummary;
    }
    public get compliantSummary(): CompliantSummary | undefined {
        return this['compliant_summary'];
    }
    public withNonCompliantSummary(nonCompliantSummary: NonCompliantSummary): InstanceCompliant {
        this['non_compliant_summary'] = nonCompliantSummary;
        return this;
    }
    public set nonCompliantSummary(nonCompliantSummary: NonCompliantSummary  | undefined) {
        this['non_compliant_summary'] = nonCompliantSummary;
    }
    public get nonCompliantSummary(): NonCompliantSummary | undefined {
        return this['non_compliant_summary'];
    }
    public withExecutionSummary(executionSummary: ExecutionSummary): InstanceCompliant {
        this['execution_summary'] = executionSummary;
        return this;
    }
    public set executionSummary(executionSummary: ExecutionSummary  | undefined) {
        this['execution_summary'] = executionSummary;
    }
    public get executionSummary(): ExecutionSummary | undefined {
        return this['execution_summary'];
    }
    public withId(id: string): InstanceCompliant {
        this['id'] = id;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): InstanceCompliant {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withName(name: string): InstanceCompliant {
        this['name'] = name;
        return this;
    }
    public withInstanceId(instanceId: string): InstanceCompliant {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): InstanceCompliant {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withIp(ip: string): InstanceCompliant {
        this['ip'] = ip;
        return this;
    }
    public withEip(eip: string): InstanceCompliant {
        this['eip'] = eip;
        return this;
    }
    public withRegion(region: string): InstanceCompliant {
        this['region'] = region;
        return this;
    }
    public withGroup(group: string): InstanceCompliant {
        this['group'] = group;
        return this;
    }
    public withReportScene(reportScene: string): InstanceCompliant {
        this['report_scene'] = reportScene;
        return this;
    }
    public set reportScene(reportScene: string  | undefined) {
        this['report_scene'] = reportScene;
    }
    public get reportScene(): string | undefined {
        return this['report_scene'];
    }
    public withCceInfoId(cceInfoId: string): InstanceCompliant {
        this['cce_info_id'] = cceInfoId;
        return this;
    }
    public set cceInfoId(cceInfoId: string  | undefined) {
        this['cce_info_id'] = cceInfoId;
    }
    public get cceInfoId(): string | undefined {
        return this['cce_info_id'];
    }
    public withStatus(status: string): InstanceCompliant {
        this['status'] = status;
        return this;
    }
    public withBaselineId(baselineId: string): InstanceCompliant {
        this['baseline_id'] = baselineId;
        return this;
    }
    public set baselineId(baselineId: string  | undefined) {
        this['baseline_id'] = baselineId;
    }
    public get baselineId(): string | undefined {
        return this['baseline_id'];
    }
    public withBaselineName(baselineName: string): InstanceCompliant {
        this['baseline_name'] = baselineName;
        return this;
    }
    public set baselineName(baselineName: string  | undefined) {
        this['baseline_name'] = baselineName;
    }
    public get baselineName(): string | undefined {
        return this['baseline_name'];
    }
    public withRuleType(ruleType: string): InstanceCompliant {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withOperatingSystem(operatingSystem: string): InstanceCompliant {
        this['operating_system'] = operatingSystem;
        return this;
    }
    public set operatingSystem(operatingSystem: string  | undefined) {
        this['operating_system'] = operatingSystem;
    }
    public get operatingSystem(): string | undefined {
        return this['operating_system'];
    }
}