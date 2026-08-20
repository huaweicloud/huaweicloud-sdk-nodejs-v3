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
    private 'category_layer_id'?: string;
    private 'parent_id'?: string;
    private 'project_id'?: string;
    public status?: string;
    public state?: string;
    public assignee?: UserEntity;
    private 'assigned_cc'?: Array<UserEntity>;
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
    private 'plan_iteration'?: string;
    private 'change_status'?: string;
    private 'no_break_reason'?: string;
    private 'submitted_by'?: Array<UserEntity>;
    public ir2rr?: string;
    private 'feature_set'?: string;
    private 'expected_repair_date'?: string;
    private 'found_pi'?: string;
    private 'found_iteration'?: string;
    private 'reason_analysis'?: string;
    private 'repair_solution'?: string;
    private 'test_report'?: string;
    private 'sys_no_repair_reason'?: string;
    private 'sys_activation_reason'?: string;
    private 'sys_return_reason'?: string;
    private 'test_failures_times'?: number;
    private 'close_type'?: string;
    private 'plan_owner'?: UserEntity;
    private 'doing_owner'?: UserEntity;
    private 'delivered_owner'?: UserEntity;
    private 'checking_owner'?: UserEntity;
    private 'test_owner'?: UserEntity;
    private 'develop_owner'?: UserEntity;
    private 'processing_owner'?: UserEntity;
    private 'fixed_owner'?: UserEntity;
    private 'researchanddevelop_owner'?: UserEntity;
    private 'analyse_owner'?: UserEntity;
    private 'plan_start_date'?: string;
    private 'expect_delivery_time'?: string;
    private 'plan_test_end_date'?: string;
    public severity?: string;
    public promised?: string;
    public recipient?: Array<UserEntity>;
    private 'sys_no_develop_reason'?: string;
    private 'val_feature'?: string;
    private 'function_scene'?: string;
    public constructor(category?: string, categoryLayerId?: string) { 
        this['category'] = category;
        this['category_layer_id'] = categoryLayerId;
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
    public withCategoryLayerId(categoryLayerId: string): IssueEntity {
        this['category_layer_id'] = categoryLayerId;
        return this;
    }
    public set categoryLayerId(categoryLayerId: string  | undefined) {
        this['category_layer_id'] = categoryLayerId;
    }
    public get categoryLayerId(): string | undefined {
        return this['category_layer_id'];
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
    public withAssignedCc(assignedCc: Array<UserEntity>): IssueEntity {
        this['assigned_cc'] = assignedCc;
        return this;
    }
    public set assignedCc(assignedCc: Array<UserEntity>  | undefined) {
        this['assigned_cc'] = assignedCc;
    }
    public get assignedCc(): Array<UserEntity> | undefined {
        return this['assigned_cc'];
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
    public withPlanIteration(planIteration: string): IssueEntity {
        this['plan_iteration'] = planIteration;
        return this;
    }
    public set planIteration(planIteration: string  | undefined) {
        this['plan_iteration'] = planIteration;
    }
    public get planIteration(): string | undefined {
        return this['plan_iteration'];
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
    public withSubmittedBy(submittedBy: Array<UserEntity>): IssueEntity {
        this['submitted_by'] = submittedBy;
        return this;
    }
    public set submittedBy(submittedBy: Array<UserEntity>  | undefined) {
        this['submitted_by'] = submittedBy;
    }
    public get submittedBy(): Array<UserEntity> | undefined {
        return this['submitted_by'];
    }
    public withIr2rr(ir2rr: string): IssueEntity {
        this['ir2rr'] = ir2rr;
        return this;
    }
    public withFeatureSet(featureSet: string): IssueEntity {
        this['feature_set'] = featureSet;
        return this;
    }
    public set featureSet(featureSet: string  | undefined) {
        this['feature_set'] = featureSet;
    }
    public get featureSet(): string | undefined {
        return this['feature_set'];
    }
    public withExpectedRepairDate(expectedRepairDate: string): IssueEntity {
        this['expected_repair_date'] = expectedRepairDate;
        return this;
    }
    public set expectedRepairDate(expectedRepairDate: string  | undefined) {
        this['expected_repair_date'] = expectedRepairDate;
    }
    public get expectedRepairDate(): string | undefined {
        return this['expected_repair_date'];
    }
    public withFoundPi(foundPi: string): IssueEntity {
        this['found_pi'] = foundPi;
        return this;
    }
    public set foundPi(foundPi: string  | undefined) {
        this['found_pi'] = foundPi;
    }
    public get foundPi(): string | undefined {
        return this['found_pi'];
    }
    public withFoundIteration(foundIteration: string): IssueEntity {
        this['found_iteration'] = foundIteration;
        return this;
    }
    public set foundIteration(foundIteration: string  | undefined) {
        this['found_iteration'] = foundIteration;
    }
    public get foundIteration(): string | undefined {
        return this['found_iteration'];
    }
    public withReasonAnalysis(reasonAnalysis: string): IssueEntity {
        this['reason_analysis'] = reasonAnalysis;
        return this;
    }
    public set reasonAnalysis(reasonAnalysis: string  | undefined) {
        this['reason_analysis'] = reasonAnalysis;
    }
    public get reasonAnalysis(): string | undefined {
        return this['reason_analysis'];
    }
    public withRepairSolution(repairSolution: string): IssueEntity {
        this['repair_solution'] = repairSolution;
        return this;
    }
    public set repairSolution(repairSolution: string  | undefined) {
        this['repair_solution'] = repairSolution;
    }
    public get repairSolution(): string | undefined {
        return this['repair_solution'];
    }
    public withTestReport(testReport: string): IssueEntity {
        this['test_report'] = testReport;
        return this;
    }
    public set testReport(testReport: string  | undefined) {
        this['test_report'] = testReport;
    }
    public get testReport(): string | undefined {
        return this['test_report'];
    }
    public withSysNoRepairReason(sysNoRepairReason: string): IssueEntity {
        this['sys_no_repair_reason'] = sysNoRepairReason;
        return this;
    }
    public set sysNoRepairReason(sysNoRepairReason: string  | undefined) {
        this['sys_no_repair_reason'] = sysNoRepairReason;
    }
    public get sysNoRepairReason(): string | undefined {
        return this['sys_no_repair_reason'];
    }
    public withSysActivationReason(sysActivationReason: string): IssueEntity {
        this['sys_activation_reason'] = sysActivationReason;
        return this;
    }
    public set sysActivationReason(sysActivationReason: string  | undefined) {
        this['sys_activation_reason'] = sysActivationReason;
    }
    public get sysActivationReason(): string | undefined {
        return this['sys_activation_reason'];
    }
    public withSysReturnReason(sysReturnReason: string): IssueEntity {
        this['sys_return_reason'] = sysReturnReason;
        return this;
    }
    public set sysReturnReason(sysReturnReason: string  | undefined) {
        this['sys_return_reason'] = sysReturnReason;
    }
    public get sysReturnReason(): string | undefined {
        return this['sys_return_reason'];
    }
    public withTestFailuresTimes(testFailuresTimes: number): IssueEntity {
        this['test_failures_times'] = testFailuresTimes;
        return this;
    }
    public set testFailuresTimes(testFailuresTimes: number  | undefined) {
        this['test_failures_times'] = testFailuresTimes;
    }
    public get testFailuresTimes(): number | undefined {
        return this['test_failures_times'];
    }
    public withCloseType(closeType: string): IssueEntity {
        this['close_type'] = closeType;
        return this;
    }
    public set closeType(closeType: string  | undefined) {
        this['close_type'] = closeType;
    }
    public get closeType(): string | undefined {
        return this['close_type'];
    }
    public withPlanOwner(planOwner: UserEntity): IssueEntity {
        this['plan_owner'] = planOwner;
        return this;
    }
    public set planOwner(planOwner: UserEntity  | undefined) {
        this['plan_owner'] = planOwner;
    }
    public get planOwner(): UserEntity | undefined {
        return this['plan_owner'];
    }
    public withDoingOwner(doingOwner: UserEntity): IssueEntity {
        this['doing_owner'] = doingOwner;
        return this;
    }
    public set doingOwner(doingOwner: UserEntity  | undefined) {
        this['doing_owner'] = doingOwner;
    }
    public get doingOwner(): UserEntity | undefined {
        return this['doing_owner'];
    }
    public withDeliveredOwner(deliveredOwner: UserEntity): IssueEntity {
        this['delivered_owner'] = deliveredOwner;
        return this;
    }
    public set deliveredOwner(deliveredOwner: UserEntity  | undefined) {
        this['delivered_owner'] = deliveredOwner;
    }
    public get deliveredOwner(): UserEntity | undefined {
        return this['delivered_owner'];
    }
    public withCheckingOwner(checkingOwner: UserEntity): IssueEntity {
        this['checking_owner'] = checkingOwner;
        return this;
    }
    public set checkingOwner(checkingOwner: UserEntity  | undefined) {
        this['checking_owner'] = checkingOwner;
    }
    public get checkingOwner(): UserEntity | undefined {
        return this['checking_owner'];
    }
    public withTestOwner(testOwner: UserEntity): IssueEntity {
        this['test_owner'] = testOwner;
        return this;
    }
    public set testOwner(testOwner: UserEntity  | undefined) {
        this['test_owner'] = testOwner;
    }
    public get testOwner(): UserEntity | undefined {
        return this['test_owner'];
    }
    public withDevelopOwner(developOwner: UserEntity): IssueEntity {
        this['develop_owner'] = developOwner;
        return this;
    }
    public set developOwner(developOwner: UserEntity  | undefined) {
        this['develop_owner'] = developOwner;
    }
    public get developOwner(): UserEntity | undefined {
        return this['develop_owner'];
    }
    public withProcessingOwner(processingOwner: UserEntity): IssueEntity {
        this['processing_owner'] = processingOwner;
        return this;
    }
    public set processingOwner(processingOwner: UserEntity  | undefined) {
        this['processing_owner'] = processingOwner;
    }
    public get processingOwner(): UserEntity | undefined {
        return this['processing_owner'];
    }
    public withFixedOwner(fixedOwner: UserEntity): IssueEntity {
        this['fixed_owner'] = fixedOwner;
        return this;
    }
    public set fixedOwner(fixedOwner: UserEntity  | undefined) {
        this['fixed_owner'] = fixedOwner;
    }
    public get fixedOwner(): UserEntity | undefined {
        return this['fixed_owner'];
    }
    public withResearchanddevelopOwner(researchanddevelopOwner: UserEntity): IssueEntity {
        this['researchanddevelop_owner'] = researchanddevelopOwner;
        return this;
    }
    public set researchanddevelopOwner(researchanddevelopOwner: UserEntity  | undefined) {
        this['researchanddevelop_owner'] = researchanddevelopOwner;
    }
    public get researchanddevelopOwner(): UserEntity | undefined {
        return this['researchanddevelop_owner'];
    }
    public withAnalyseOwner(analyseOwner: UserEntity): IssueEntity {
        this['analyse_owner'] = analyseOwner;
        return this;
    }
    public set analyseOwner(analyseOwner: UserEntity  | undefined) {
        this['analyse_owner'] = analyseOwner;
    }
    public get analyseOwner(): UserEntity | undefined {
        return this['analyse_owner'];
    }
    public withPlanStartDate(planStartDate: string): IssueEntity {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: string  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): string | undefined {
        return this['plan_start_date'];
    }
    public withExpectDeliveryTime(expectDeliveryTime: string): IssueEntity {
        this['expect_delivery_time'] = expectDeliveryTime;
        return this;
    }
    public set expectDeliveryTime(expectDeliveryTime: string  | undefined) {
        this['expect_delivery_time'] = expectDeliveryTime;
    }
    public get expectDeliveryTime(): string | undefined {
        return this['expect_delivery_time'];
    }
    public withPlanTestEndDate(planTestEndDate: string): IssueEntity {
        this['plan_test_end_date'] = planTestEndDate;
        return this;
    }
    public set planTestEndDate(planTestEndDate: string  | undefined) {
        this['plan_test_end_date'] = planTestEndDate;
    }
    public get planTestEndDate(): string | undefined {
        return this['plan_test_end_date'];
    }
    public withSeverity(severity: string): IssueEntity {
        this['severity'] = severity;
        return this;
    }
    public withPromised(promised: string): IssueEntity {
        this['promised'] = promised;
        return this;
    }
    public withRecipient(recipient: Array<UserEntity>): IssueEntity {
        this['recipient'] = recipient;
        return this;
    }
    public withSysNoDevelopReason(sysNoDevelopReason: string): IssueEntity {
        this['sys_no_develop_reason'] = sysNoDevelopReason;
        return this;
    }
    public set sysNoDevelopReason(sysNoDevelopReason: string  | undefined) {
        this['sys_no_develop_reason'] = sysNoDevelopReason;
    }
    public get sysNoDevelopReason(): string | undefined {
        return this['sys_no_develop_reason'];
    }
    public withValFeature(valFeature: string): IssueEntity {
        this['val_feature'] = valFeature;
        return this;
    }
    public set valFeature(valFeature: string  | undefined) {
        this['val_feature'] = valFeature;
    }
    public get valFeature(): string | undefined {
        return this['val_feature'];
    }
    public withFunctionScene(functionScene: string): IssueEntity {
        this['function_scene'] = functionScene;
        return this;
    }
    public set functionScene(functionScene: string  | undefined) {
        this['function_scene'] = functionScene;
    }
    public get functionScene(): string | undefined {
        return this['function_scene'];
    }
}