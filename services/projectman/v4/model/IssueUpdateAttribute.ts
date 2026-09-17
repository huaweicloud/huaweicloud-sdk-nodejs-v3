import { FieldCodeValuePair } from './FieldCodeValuePair';
import { LabelEntity } from './LabelEntity';
import { UserUpdateAttribute } from './UserUpdateAttribute';


export class IssueUpdateAttribute {
    public category?: string;
    public description?: string;
    private 'parent_id'?: string;
    public status?: string;
    public assignee?: UserUpdateAttribute;
    private 'assigned_cc'?: Array<UserUpdateAttribute>;
    private 'plan_end_date'?: string;
    public workload?: string;
    public link?: string;
    public labels?: Array<LabelEntity>;
    private 'custom_fields'?: Array<FieldCodeValuePair>;
    public ir2feature?: string;
    private 'need_break'?: string;
    public baseline?: string;
    public priority?: string;
    private 'related_network_security'?: string;
    private 'business_domain'?: string;
    private 'plan_pi'?: string;
    private 'plan_iteration'?: string;
    private 'no_break_reason'?: string;
    private 'submitted_by'?: Array<UserUpdateAttribute>;
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
    private 'security_level'?: string;
    private 'plan_owner'?: UserUpdateAttribute;
    private 'doing_owner'?: UserUpdateAttribute;
    private 'delivered_owner'?: UserUpdateAttribute;
    private 'checking_owner'?: UserUpdateAttribute;
    private 'test_owner'?: UserUpdateAttribute;
    private 'develop_owner'?: UserUpdateAttribute;
    private 'processing_owner'?: UserUpdateAttribute;
    private 'fixed_owner'?: UserUpdateAttribute;
    private 'researchanddevelop_owner'?: UserUpdateAttribute;
    private 'analyse_owner'?: UserUpdateAttribute;
    private 'plan_start_date'?: string;
    private 'expect_delivery_time'?: string;
    private 'plan_test_end_date'?: string;
    public severity?: string;
    public promised?: string;
    public recipient?: Array<UserUpdateAttribute>;
    private 'sys_no_develop_reason'?: string;
    private 'val_feature'?: string;
    private 'function_scene'?: string;
    public constructor() { 
    }
    public withCategory(category: string): IssueUpdateAttribute {
        this['category'] = category;
        return this;
    }
    public withDescription(description: string): IssueUpdateAttribute {
        this['description'] = description;
        return this;
    }
    public withParentId(parentId: string): IssueUpdateAttribute {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withStatus(status: string): IssueUpdateAttribute {
        this['status'] = status;
        return this;
    }
    public withAssignee(assignee: UserUpdateAttribute): IssueUpdateAttribute {
        this['assignee'] = assignee;
        return this;
    }
    public withAssignedCc(assignedCc: Array<UserUpdateAttribute>): IssueUpdateAttribute {
        this['assigned_cc'] = assignedCc;
        return this;
    }
    public set assignedCc(assignedCc: Array<UserUpdateAttribute>  | undefined) {
        this['assigned_cc'] = assignedCc;
    }
    public get assignedCc(): Array<UserUpdateAttribute> | undefined {
        return this['assigned_cc'];
    }
    public withPlanEndDate(planEndDate: string): IssueUpdateAttribute {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: string  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): string | undefined {
        return this['plan_end_date'];
    }
    public withWorkload(workload: string): IssueUpdateAttribute {
        this['workload'] = workload;
        return this;
    }
    public withLink(link: string): IssueUpdateAttribute {
        this['link'] = link;
        return this;
    }
    public withLabels(labels: Array<LabelEntity>): IssueUpdateAttribute {
        this['labels'] = labels;
        return this;
    }
    public withCustomFields(customFields: Array<FieldCodeValuePair>): IssueUpdateAttribute {
        this['custom_fields'] = customFields;
        return this;
    }
    public set customFields(customFields: Array<FieldCodeValuePair>  | undefined) {
        this['custom_fields'] = customFields;
    }
    public get customFields(): Array<FieldCodeValuePair> | undefined {
        return this['custom_fields'];
    }
    public withIr2feature(ir2feature: string): IssueUpdateAttribute {
        this['ir2feature'] = ir2feature;
        return this;
    }
    public withNeedBreak(needBreak: string): IssueUpdateAttribute {
        this['need_break'] = needBreak;
        return this;
    }
    public set needBreak(needBreak: string  | undefined) {
        this['need_break'] = needBreak;
    }
    public get needBreak(): string | undefined {
        return this['need_break'];
    }
    public withBaseline(baseline: string): IssueUpdateAttribute {
        this['baseline'] = baseline;
        return this;
    }
    public withPriority(priority: string): IssueUpdateAttribute {
        this['priority'] = priority;
        return this;
    }
    public withRelatedNetworkSecurity(relatedNetworkSecurity: string): IssueUpdateAttribute {
        this['related_network_security'] = relatedNetworkSecurity;
        return this;
    }
    public set relatedNetworkSecurity(relatedNetworkSecurity: string  | undefined) {
        this['related_network_security'] = relatedNetworkSecurity;
    }
    public get relatedNetworkSecurity(): string | undefined {
        return this['related_network_security'];
    }
    public withBusinessDomain(businessDomain: string): IssueUpdateAttribute {
        this['business_domain'] = businessDomain;
        return this;
    }
    public set businessDomain(businessDomain: string  | undefined) {
        this['business_domain'] = businessDomain;
    }
    public get businessDomain(): string | undefined {
        return this['business_domain'];
    }
    public withPlanPi(planPi: string): IssueUpdateAttribute {
        this['plan_pi'] = planPi;
        return this;
    }
    public set planPi(planPi: string  | undefined) {
        this['plan_pi'] = planPi;
    }
    public get planPi(): string | undefined {
        return this['plan_pi'];
    }
    public withPlanIteration(planIteration: string): IssueUpdateAttribute {
        this['plan_iteration'] = planIteration;
        return this;
    }
    public set planIteration(planIteration: string  | undefined) {
        this['plan_iteration'] = planIteration;
    }
    public get planIteration(): string | undefined {
        return this['plan_iteration'];
    }
    public withNoBreakReason(noBreakReason: string): IssueUpdateAttribute {
        this['no_break_reason'] = noBreakReason;
        return this;
    }
    public set noBreakReason(noBreakReason: string  | undefined) {
        this['no_break_reason'] = noBreakReason;
    }
    public get noBreakReason(): string | undefined {
        return this['no_break_reason'];
    }
    public withSubmittedBy(submittedBy: Array<UserUpdateAttribute>): IssueUpdateAttribute {
        this['submitted_by'] = submittedBy;
        return this;
    }
    public set submittedBy(submittedBy: Array<UserUpdateAttribute>  | undefined) {
        this['submitted_by'] = submittedBy;
    }
    public get submittedBy(): Array<UserUpdateAttribute> | undefined {
        return this['submitted_by'];
    }
    public withIr2rr(ir2rr: string): IssueUpdateAttribute {
        this['ir2rr'] = ir2rr;
        return this;
    }
    public withFeatureSet(featureSet: string): IssueUpdateAttribute {
        this['feature_set'] = featureSet;
        return this;
    }
    public set featureSet(featureSet: string  | undefined) {
        this['feature_set'] = featureSet;
    }
    public get featureSet(): string | undefined {
        return this['feature_set'];
    }
    public withExpectedRepairDate(expectedRepairDate: string): IssueUpdateAttribute {
        this['expected_repair_date'] = expectedRepairDate;
        return this;
    }
    public set expectedRepairDate(expectedRepairDate: string  | undefined) {
        this['expected_repair_date'] = expectedRepairDate;
    }
    public get expectedRepairDate(): string | undefined {
        return this['expected_repair_date'];
    }
    public withFoundPi(foundPi: string): IssueUpdateAttribute {
        this['found_pi'] = foundPi;
        return this;
    }
    public set foundPi(foundPi: string  | undefined) {
        this['found_pi'] = foundPi;
    }
    public get foundPi(): string | undefined {
        return this['found_pi'];
    }
    public withFoundIteration(foundIteration: string): IssueUpdateAttribute {
        this['found_iteration'] = foundIteration;
        return this;
    }
    public set foundIteration(foundIteration: string  | undefined) {
        this['found_iteration'] = foundIteration;
    }
    public get foundIteration(): string | undefined {
        return this['found_iteration'];
    }
    public withReasonAnalysis(reasonAnalysis: string): IssueUpdateAttribute {
        this['reason_analysis'] = reasonAnalysis;
        return this;
    }
    public set reasonAnalysis(reasonAnalysis: string  | undefined) {
        this['reason_analysis'] = reasonAnalysis;
    }
    public get reasonAnalysis(): string | undefined {
        return this['reason_analysis'];
    }
    public withRepairSolution(repairSolution: string): IssueUpdateAttribute {
        this['repair_solution'] = repairSolution;
        return this;
    }
    public set repairSolution(repairSolution: string  | undefined) {
        this['repair_solution'] = repairSolution;
    }
    public get repairSolution(): string | undefined {
        return this['repair_solution'];
    }
    public withTestReport(testReport: string): IssueUpdateAttribute {
        this['test_report'] = testReport;
        return this;
    }
    public set testReport(testReport: string  | undefined) {
        this['test_report'] = testReport;
    }
    public get testReport(): string | undefined {
        return this['test_report'];
    }
    public withSysNoRepairReason(sysNoRepairReason: string): IssueUpdateAttribute {
        this['sys_no_repair_reason'] = sysNoRepairReason;
        return this;
    }
    public set sysNoRepairReason(sysNoRepairReason: string  | undefined) {
        this['sys_no_repair_reason'] = sysNoRepairReason;
    }
    public get sysNoRepairReason(): string | undefined {
        return this['sys_no_repair_reason'];
    }
    public withSysActivationReason(sysActivationReason: string): IssueUpdateAttribute {
        this['sys_activation_reason'] = sysActivationReason;
        return this;
    }
    public set sysActivationReason(sysActivationReason: string  | undefined) {
        this['sys_activation_reason'] = sysActivationReason;
    }
    public get sysActivationReason(): string | undefined {
        return this['sys_activation_reason'];
    }
    public withSysReturnReason(sysReturnReason: string): IssueUpdateAttribute {
        this['sys_return_reason'] = sysReturnReason;
        return this;
    }
    public set sysReturnReason(sysReturnReason: string  | undefined) {
        this['sys_return_reason'] = sysReturnReason;
    }
    public get sysReturnReason(): string | undefined {
        return this['sys_return_reason'];
    }
    public withTestFailuresTimes(testFailuresTimes: number): IssueUpdateAttribute {
        this['test_failures_times'] = testFailuresTimes;
        return this;
    }
    public set testFailuresTimes(testFailuresTimes: number  | undefined) {
        this['test_failures_times'] = testFailuresTimes;
    }
    public get testFailuresTimes(): number | undefined {
        return this['test_failures_times'];
    }
    public withCloseType(closeType: string): IssueUpdateAttribute {
        this['close_type'] = closeType;
        return this;
    }
    public set closeType(closeType: string  | undefined) {
        this['close_type'] = closeType;
    }
    public get closeType(): string | undefined {
        return this['close_type'];
    }
    public withSecurityLevel(securityLevel: string): IssueUpdateAttribute {
        this['security_level'] = securityLevel;
        return this;
    }
    public set securityLevel(securityLevel: string  | undefined) {
        this['security_level'] = securityLevel;
    }
    public get securityLevel(): string | undefined {
        return this['security_level'];
    }
    public withPlanOwner(planOwner: UserUpdateAttribute): IssueUpdateAttribute {
        this['plan_owner'] = planOwner;
        return this;
    }
    public set planOwner(planOwner: UserUpdateAttribute  | undefined) {
        this['plan_owner'] = planOwner;
    }
    public get planOwner(): UserUpdateAttribute | undefined {
        return this['plan_owner'];
    }
    public withDoingOwner(doingOwner: UserUpdateAttribute): IssueUpdateAttribute {
        this['doing_owner'] = doingOwner;
        return this;
    }
    public set doingOwner(doingOwner: UserUpdateAttribute  | undefined) {
        this['doing_owner'] = doingOwner;
    }
    public get doingOwner(): UserUpdateAttribute | undefined {
        return this['doing_owner'];
    }
    public withDeliveredOwner(deliveredOwner: UserUpdateAttribute): IssueUpdateAttribute {
        this['delivered_owner'] = deliveredOwner;
        return this;
    }
    public set deliveredOwner(deliveredOwner: UserUpdateAttribute  | undefined) {
        this['delivered_owner'] = deliveredOwner;
    }
    public get deliveredOwner(): UserUpdateAttribute | undefined {
        return this['delivered_owner'];
    }
    public withCheckingOwner(checkingOwner: UserUpdateAttribute): IssueUpdateAttribute {
        this['checking_owner'] = checkingOwner;
        return this;
    }
    public set checkingOwner(checkingOwner: UserUpdateAttribute  | undefined) {
        this['checking_owner'] = checkingOwner;
    }
    public get checkingOwner(): UserUpdateAttribute | undefined {
        return this['checking_owner'];
    }
    public withTestOwner(testOwner: UserUpdateAttribute): IssueUpdateAttribute {
        this['test_owner'] = testOwner;
        return this;
    }
    public set testOwner(testOwner: UserUpdateAttribute  | undefined) {
        this['test_owner'] = testOwner;
    }
    public get testOwner(): UserUpdateAttribute | undefined {
        return this['test_owner'];
    }
    public withDevelopOwner(developOwner: UserUpdateAttribute): IssueUpdateAttribute {
        this['develop_owner'] = developOwner;
        return this;
    }
    public set developOwner(developOwner: UserUpdateAttribute  | undefined) {
        this['develop_owner'] = developOwner;
    }
    public get developOwner(): UserUpdateAttribute | undefined {
        return this['develop_owner'];
    }
    public withProcessingOwner(processingOwner: UserUpdateAttribute): IssueUpdateAttribute {
        this['processing_owner'] = processingOwner;
        return this;
    }
    public set processingOwner(processingOwner: UserUpdateAttribute  | undefined) {
        this['processing_owner'] = processingOwner;
    }
    public get processingOwner(): UserUpdateAttribute | undefined {
        return this['processing_owner'];
    }
    public withFixedOwner(fixedOwner: UserUpdateAttribute): IssueUpdateAttribute {
        this['fixed_owner'] = fixedOwner;
        return this;
    }
    public set fixedOwner(fixedOwner: UserUpdateAttribute  | undefined) {
        this['fixed_owner'] = fixedOwner;
    }
    public get fixedOwner(): UserUpdateAttribute | undefined {
        return this['fixed_owner'];
    }
    public withResearchanddevelopOwner(researchanddevelopOwner: UserUpdateAttribute): IssueUpdateAttribute {
        this['researchanddevelop_owner'] = researchanddevelopOwner;
        return this;
    }
    public set researchanddevelopOwner(researchanddevelopOwner: UserUpdateAttribute  | undefined) {
        this['researchanddevelop_owner'] = researchanddevelopOwner;
    }
    public get researchanddevelopOwner(): UserUpdateAttribute | undefined {
        return this['researchanddevelop_owner'];
    }
    public withAnalyseOwner(analyseOwner: UserUpdateAttribute): IssueUpdateAttribute {
        this['analyse_owner'] = analyseOwner;
        return this;
    }
    public set analyseOwner(analyseOwner: UserUpdateAttribute  | undefined) {
        this['analyse_owner'] = analyseOwner;
    }
    public get analyseOwner(): UserUpdateAttribute | undefined {
        return this['analyse_owner'];
    }
    public withPlanStartDate(planStartDate: string): IssueUpdateAttribute {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: string  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): string | undefined {
        return this['plan_start_date'];
    }
    public withExpectDeliveryTime(expectDeliveryTime: string): IssueUpdateAttribute {
        this['expect_delivery_time'] = expectDeliveryTime;
        return this;
    }
    public set expectDeliveryTime(expectDeliveryTime: string  | undefined) {
        this['expect_delivery_time'] = expectDeliveryTime;
    }
    public get expectDeliveryTime(): string | undefined {
        return this['expect_delivery_time'];
    }
    public withPlanTestEndDate(planTestEndDate: string): IssueUpdateAttribute {
        this['plan_test_end_date'] = planTestEndDate;
        return this;
    }
    public set planTestEndDate(planTestEndDate: string  | undefined) {
        this['plan_test_end_date'] = planTestEndDate;
    }
    public get planTestEndDate(): string | undefined {
        return this['plan_test_end_date'];
    }
    public withSeverity(severity: string): IssueUpdateAttribute {
        this['severity'] = severity;
        return this;
    }
    public withPromised(promised: string): IssueUpdateAttribute {
        this['promised'] = promised;
        return this;
    }
    public withRecipient(recipient: Array<UserUpdateAttribute>): IssueUpdateAttribute {
        this['recipient'] = recipient;
        return this;
    }
    public withSysNoDevelopReason(sysNoDevelopReason: string): IssueUpdateAttribute {
        this['sys_no_develop_reason'] = sysNoDevelopReason;
        return this;
    }
    public set sysNoDevelopReason(sysNoDevelopReason: string  | undefined) {
        this['sys_no_develop_reason'] = sysNoDevelopReason;
    }
    public get sysNoDevelopReason(): string | undefined {
        return this['sys_no_develop_reason'];
    }
    public withValFeature(valFeature: string): IssueUpdateAttribute {
        this['val_feature'] = valFeature;
        return this;
    }
    public set valFeature(valFeature: string  | undefined) {
        this['val_feature'] = valFeature;
    }
    public get valFeature(): string | undefined {
        return this['val_feature'];
    }
    public withFunctionScene(functionScene: string): IssueUpdateAttribute {
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