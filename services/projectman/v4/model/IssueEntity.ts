import { FieldCodeValuePair } from './FieldCodeValuePair';
import { LabelEntity } from './LabelEntity';
import { UserEntity } from './UserEntity';


export class IssueEntity {
    public id?: string;
    public title?: string;
    public description?: string;
    public type?: string;
    private 'number'?: string;
    public category?: string;
    private 'parent_id'?: string;
    private 'project_id'?: string;
    public status?: string;
    public state?: string;
    public assignee?: UserEntity;
    private 'created_by'?: UserEntity;
    private 'created_time'?: string;
    private 'modified_by'?: UserEntity;
    private 'modified_time'?: string;
    private 'plan_end_date'?: string;
    private 'close_time'?: string;
    public workload?: string;
    private 'workload_sum'?: string;
    private 'tenant_id'?: string;
    public link?: string;
    public suspended?: boolean;
    private 'status_modified_time'?: string;
    public labels?: Array<LabelEntity>;
    private 'custom_fields'?: Array<FieldCodeValuePair>;
    public children?: Array<IssueEntity>;
    public path?: string;
    public ir2feature?: string;
    private 'need_break'?: string;
    private 'break_status'?: string;
    public baseline?: string;
    public priority?: string;
    private 'related_network_security'?: string;
    public collaboratives?: string;
    private 'business_domain'?: string;
    private 'plan_pi'?: string;
    private 'change_status'?: string;
    private 'no_break_reason'?: string;
    private 'submitted_by'?: string;
    public ir2rr?: string;
    public constructor() { 
    }
    public withId(id: string): IssueEntity {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): IssueEntity {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): IssueEntity {
        this['description'] = description;
        return this;
    }
    public withType(type: string): IssueEntity {
        this['type'] = type;
        return this;
    }
    public withModelNumber(modelNumber: string): IssueEntity {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withCategory(category: string): IssueEntity {
        this['category'] = category;
        return this;
    }
    public withParentId(parentId: string): IssueEntity {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withProjectId(projectId: string): IssueEntity {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStatus(status: string): IssueEntity {
        this['status'] = status;
        return this;
    }
    public withState(state: string): IssueEntity {
        this['state'] = state;
        return this;
    }
    public withAssignee(assignee: UserEntity): IssueEntity {
        this['assignee'] = assignee;
        return this;
    }
    public withCreatedBy(createdBy: UserEntity): IssueEntity {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: UserEntity  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): UserEntity | undefined {
        return this['created_by'];
    }
    public withCreatedTime(createdTime: string): IssueEntity {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withModifiedBy(modifiedBy: UserEntity): IssueEntity {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: UserEntity  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): UserEntity | undefined {
        return this['modified_by'];
    }
    public withModifiedTime(modifiedTime: string): IssueEntity {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: string  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): string | undefined {
        return this['modified_time'];
    }
    public withPlanEndDate(planEndDate: string): IssueEntity {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: string  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): string | undefined {
        return this['plan_end_date'];
    }
    public withCloseTime(closeTime: string): IssueEntity {
        this['close_time'] = closeTime;
        return this;
    }
    public set closeTime(closeTime: string  | undefined) {
        this['close_time'] = closeTime;
    }
    public get closeTime(): string | undefined {
        return this['close_time'];
    }
    public withWorkload(workload: string): IssueEntity {
        this['workload'] = workload;
        return this;
    }
    public withWorkloadSum(workloadSum: string): IssueEntity {
        this['workload_sum'] = workloadSum;
        return this;
    }
    public set workloadSum(workloadSum: string  | undefined) {
        this['workload_sum'] = workloadSum;
    }
    public get workloadSum(): string | undefined {
        return this['workload_sum'];
    }
    public withTenantId(tenantId: string): IssueEntity {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withLink(link: string): IssueEntity {
        this['link'] = link;
        return this;
    }
    public withSuspended(suspended: boolean): IssueEntity {
        this['suspended'] = suspended;
        return this;
    }
    public withStatusModifiedTime(statusModifiedTime: string): IssueEntity {
        this['status_modified_time'] = statusModifiedTime;
        return this;
    }
    public set statusModifiedTime(statusModifiedTime: string  | undefined) {
        this['status_modified_time'] = statusModifiedTime;
    }
    public get statusModifiedTime(): string | undefined {
        return this['status_modified_time'];
    }
    public withLabels(labels: Array<LabelEntity>): IssueEntity {
        this['labels'] = labels;
        return this;
    }
    public withCustomFields(customFields: Array<FieldCodeValuePair>): IssueEntity {
        this['custom_fields'] = customFields;
        return this;
    }
    public set customFields(customFields: Array<FieldCodeValuePair>  | undefined) {
        this['custom_fields'] = customFields;
    }
    public get customFields(): Array<FieldCodeValuePair> | undefined {
        return this['custom_fields'];
    }
    public withChildren(children: Array<IssueEntity>): IssueEntity {
        this['children'] = children;
        return this;
    }
    public withPath(path: string): IssueEntity {
        this['path'] = path;
        return this;
    }
    public withIr2feature(ir2feature: string): IssueEntity {
        this['ir2feature'] = ir2feature;
        return this;
    }
    public withNeedBreak(needBreak: string): IssueEntity {
        this['need_break'] = needBreak;
        return this;
    }
    public set needBreak(needBreak: string  | undefined) {
        this['need_break'] = needBreak;
    }
    public get needBreak(): string | undefined {
        return this['need_break'];
    }
    public withBreakStatus(breakStatus: string): IssueEntity {
        this['break_status'] = breakStatus;
        return this;
    }
    public set breakStatus(breakStatus: string  | undefined) {
        this['break_status'] = breakStatus;
    }
    public get breakStatus(): string | undefined {
        return this['break_status'];
    }
    public withBaseline(baseline: string): IssueEntity {
        this['baseline'] = baseline;
        return this;
    }
    public withPriority(priority: string): IssueEntity {
        this['priority'] = priority;
        return this;
    }
    public withRelatedNetworkSecurity(relatedNetworkSecurity: string): IssueEntity {
        this['related_network_security'] = relatedNetworkSecurity;
        return this;
    }
    public set relatedNetworkSecurity(relatedNetworkSecurity: string  | undefined) {
        this['related_network_security'] = relatedNetworkSecurity;
    }
    public get relatedNetworkSecurity(): string | undefined {
        return this['related_network_security'];
    }
    public withCollaboratives(collaboratives: string): IssueEntity {
        this['collaboratives'] = collaboratives;
        return this;
    }
    public withBusinessDomain(businessDomain: string): IssueEntity {
        this['business_domain'] = businessDomain;
        return this;
    }
    public set businessDomain(businessDomain: string  | undefined) {
        this['business_domain'] = businessDomain;
    }
    public get businessDomain(): string | undefined {
        return this['business_domain'];
    }
    public withPlanPi(planPi: string): IssueEntity {
        this['plan_pi'] = planPi;
        return this;
    }
    public set planPi(planPi: string  | undefined) {
        this['plan_pi'] = planPi;
    }
    public get planPi(): string | undefined {
        return this['plan_pi'];
    }
    public withChangeStatus(changeStatus: string): IssueEntity {
        this['change_status'] = changeStatus;
        return this;
    }
    public set changeStatus(changeStatus: string  | undefined) {
        this['change_status'] = changeStatus;
    }
    public get changeStatus(): string | undefined {
        return this['change_status'];
    }
    public withNoBreakReason(noBreakReason: string): IssueEntity {
        this['no_break_reason'] = noBreakReason;
        return this;
    }
    public set noBreakReason(noBreakReason: string  | undefined) {
        this['no_break_reason'] = noBreakReason;
    }
    public get noBreakReason(): string | undefined {
        return this['no_break_reason'];
    }
    public withSubmittedBy(submittedBy: string): IssueEntity {
        this['submitted_by'] = submittedBy;
        return this;
    }
    public set submittedBy(submittedBy: string  | undefined) {
        this['submitted_by'] = submittedBy;
    }
    public get submittedBy(): string | undefined {
        return this['submitted_by'];
    }
    public withIr2rr(ir2rr: string): IssueEntity {
        this['ir2rr'] = ir2rr;
        return this;
    }
}