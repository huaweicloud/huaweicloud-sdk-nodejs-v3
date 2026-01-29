import { AlmStatus } from './AlmStatus';
import { DomainVO } from './DomainVO';
import { OptionVO } from './OptionVO';
import { PlanVO } from './PlanVO';
import { UserVO } from './UserVO';
import { WorkItemLabelVO } from './WorkItemLabelVO';


export class IssueVO {
    private 'sys_analysis_conclusion'?: string;
    private 'sys_remark'?: string;
    public promised?: OptionVO;
    public type?: string;
    private 'belong_inside'?: string;
    private 'src_domain'?: DomainVO;
    private 'domain_id'?: DomainVO;
    private 'send_from'?: string;
    private 'number'?: string;
    private 'send_to'?: string;
    public path?: string;
    private 'workload_man_day'?: string;
    private 'sys_check_conclusion'?: string;
    public id?: string;
    public state?: string;
    private 'stay_days'?: number;
    private 'assigned_cc'?: Array<UserVO>;
    private 'submit_time'?: string;
    public workitem2label?: Array<WorkItemLabelVO>;
    private 'sys_return_conclusion'?: string;
    private 'close_time'?: string;
    public priority?: OptionVO;
    private 'modified_date'?: string;
    private 'created_by'?: UserVO;
    private 'break_status'?: OptionVO;
    private 'status_modified_date'?: string;
    private 'expect_delivery_time'?: string;
    private 'parent_id'?: string;
    public assignee?: UserVO;
    public region?: string;
    public status?: AlmStatus;
    private 'tenant_id'?: string;
    private 'plan_pi'?: PlanVO;
    public link?: string;
    public description?: string;
    private 'is_suspended'?: OptionVO;
    private 'change_status'?: OptionVO;
    public title?: string;
    private 'sum_workload_man_day'?: string;
    private 'sys_close_reason'?: string;
    private 'sys_resubmit_reason'?: string;
    private 'plan_end_date'?: string;
    public rr2ir?: string;
    private 'category_layer_id'?: string;
    private 'submitted_by'?: Array<UserVO>;
    public rr2us?: string;
    private 'sys_no_develop_reason'?: string;
    private 'plan_iteration'?: PlanVO;
    private 'sys_return_reason'?: string;
    private 'cascade_delete'?: string;
    public recipient?: Array<UserVO>;
    private 'modified_by'?: UserVO;
    private 'created_date'?: string;
    public category?: string;
    private 'collaborative_status'?: Array<string>;
    public project?: DomainVO;
    private 'child_issues'?: { [key: string]: IssueVO; };
    private 'activate_times'?: number;
    public baseline?: OptionVO;
    private 'business_domain'?: OptionVO;
    public children?: string;
    private 'collaborative_history'?: string;
    public collaboratives?: string;
    private 'convolution_actual_hours'?: string;
    private 'convolution_plan_hours'?: string;
    private 'develop_owner'?: string;
    private 'done_ratio'?: OptionVO;
    private 'expected_repair_date'?: string;
    public feature2ir?: string;
    private 'feature_set'?: OptionVO;
    private 'found_env'?: OptionVO;
    private 'found_iteration'?: PlanVO;
    private 'found_pi'?: PlanVO;
    private 'function_scene'?: string;
    public ir2feature?: string;
    public ir2rr?: string;
    private 'issue_opinion_id'?: string;
    private 'issue_review_id'?: string;
    public module?: OptionVO;
    private 'need_break'?: OptionVO;
    private 'need_develop'?: OptionVO;
    private 'no_break_reason'?: string;
    private 'no_develop_reason'?: string;
    public order?: string;
    private 'plan_dev_end_date'?: string;
    private 'plan_processing_end_date'?: string;
    private 'plan_researchanddevelop_end_date'?: string;
    private 'plan_test_end_date'?: string;
    private 'position_float'?: string;
    private 'processing_owner'?: string;
    private 'reason_analysis'?: string;
    private 'regression_failure_number'?: number;
    private 'related_network_security'?: OptionVO;
    private 'repair_solution'?: string;
    private 'researchanddevelop_owner'?: string;
    public severity?: OptionVO;
    private 'sys_activation_reason'?: string;
    private 'sys_no_repair_reason'?: string;
    private 'test_failures_times'?: number;
    private 'test_owner'?: string;
    private 'test_report'?: string;
    private 'val_feature'?: OptionVO;
    public workitem2ganttchart?: string;
    public workitem2mindmap?: string;
    public constructor() { 
    }
    public withSysAnalysisConclusion(sysAnalysisConclusion: string): IssueVO {
        this['sys_analysis_conclusion'] = sysAnalysisConclusion;
        return this;
    }
    public set sysAnalysisConclusion(sysAnalysisConclusion: string  | undefined) {
        this['sys_analysis_conclusion'] = sysAnalysisConclusion;
    }
    public get sysAnalysisConclusion(): string | undefined {
        return this['sys_analysis_conclusion'];
    }
    public withSysRemark(sysRemark: string): IssueVO {
        this['sys_remark'] = sysRemark;
        return this;
    }
    public set sysRemark(sysRemark: string  | undefined) {
        this['sys_remark'] = sysRemark;
    }
    public get sysRemark(): string | undefined {
        return this['sys_remark'];
    }
    public withPromised(promised: OptionVO): IssueVO {
        this['promised'] = promised;
        return this;
    }
    public withType(type: string): IssueVO {
        this['type'] = type;
        return this;
    }
    public withBelongInside(belongInside: string): IssueVO {
        this['belong_inside'] = belongInside;
        return this;
    }
    public set belongInside(belongInside: string  | undefined) {
        this['belong_inside'] = belongInside;
    }
    public get belongInside(): string | undefined {
        return this['belong_inside'];
    }
    public withSrcDomain(srcDomain: DomainVO): IssueVO {
        this['src_domain'] = srcDomain;
        return this;
    }
    public set srcDomain(srcDomain: DomainVO  | undefined) {
        this['src_domain'] = srcDomain;
    }
    public get srcDomain(): DomainVO | undefined {
        return this['src_domain'];
    }
    public withDomainId(domainId: DomainVO): IssueVO {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: DomainVO  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): DomainVO | undefined {
        return this['domain_id'];
    }
    public withSendFrom(sendFrom: string): IssueVO {
        this['send_from'] = sendFrom;
        return this;
    }
    public set sendFrom(sendFrom: string  | undefined) {
        this['send_from'] = sendFrom;
    }
    public get sendFrom(): string | undefined {
        return this['send_from'];
    }
    public withModelNumber(modelNumber: string): IssueVO {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withSendTo(sendTo: string): IssueVO {
        this['send_to'] = sendTo;
        return this;
    }
    public set sendTo(sendTo: string  | undefined) {
        this['send_to'] = sendTo;
    }
    public get sendTo(): string | undefined {
        return this['send_to'];
    }
    public withPath(path: string): IssueVO {
        this['path'] = path;
        return this;
    }
    public withWorkloadManDay(workloadManDay: string): IssueVO {
        this['workload_man_day'] = workloadManDay;
        return this;
    }
    public set workloadManDay(workloadManDay: string  | undefined) {
        this['workload_man_day'] = workloadManDay;
    }
    public get workloadManDay(): string | undefined {
        return this['workload_man_day'];
    }
    public withSysCheckConclusion(sysCheckConclusion: string): IssueVO {
        this['sys_check_conclusion'] = sysCheckConclusion;
        return this;
    }
    public set sysCheckConclusion(sysCheckConclusion: string  | undefined) {
        this['sys_check_conclusion'] = sysCheckConclusion;
    }
    public get sysCheckConclusion(): string | undefined {
        return this['sys_check_conclusion'];
    }
    public withId(id: string): IssueVO {
        this['id'] = id;
        return this;
    }
    public withState(state: string): IssueVO {
        this['state'] = state;
        return this;
    }
    public withStayDays(stayDays: number): IssueVO {
        this['stay_days'] = stayDays;
        return this;
    }
    public set stayDays(stayDays: number  | undefined) {
        this['stay_days'] = stayDays;
    }
    public get stayDays(): number | undefined {
        return this['stay_days'];
    }
    public withAssignedCc(assignedCc: Array<UserVO>): IssueVO {
        this['assigned_cc'] = assignedCc;
        return this;
    }
    public set assignedCc(assignedCc: Array<UserVO>  | undefined) {
        this['assigned_cc'] = assignedCc;
    }
    public get assignedCc(): Array<UserVO> | undefined {
        return this['assigned_cc'];
    }
    public withSubmitTime(submitTime: string): IssueVO {
        this['submit_time'] = submitTime;
        return this;
    }
    public set submitTime(submitTime: string  | undefined) {
        this['submit_time'] = submitTime;
    }
    public get submitTime(): string | undefined {
        return this['submit_time'];
    }
    public withWorkitem2label(workitem2label: Array<WorkItemLabelVO>): IssueVO {
        this['workitem2label'] = workitem2label;
        return this;
    }
    public withSysReturnConclusion(sysReturnConclusion: string): IssueVO {
        this['sys_return_conclusion'] = sysReturnConclusion;
        return this;
    }
    public set sysReturnConclusion(sysReturnConclusion: string  | undefined) {
        this['sys_return_conclusion'] = sysReturnConclusion;
    }
    public get sysReturnConclusion(): string | undefined {
        return this['sys_return_conclusion'];
    }
    public withCloseTime(closeTime: string): IssueVO {
        this['close_time'] = closeTime;
        return this;
    }
    public set closeTime(closeTime: string  | undefined) {
        this['close_time'] = closeTime;
    }
    public get closeTime(): string | undefined {
        return this['close_time'];
    }
    public withPriority(priority: OptionVO): IssueVO {
        this['priority'] = priority;
        return this;
    }
    public withModifiedDate(modifiedDate: string): IssueVO {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withCreatedBy(createdBy: UserVO): IssueVO {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: UserVO  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): UserVO | undefined {
        return this['created_by'];
    }
    public withBreakStatus(breakStatus: OptionVO): IssueVO {
        this['break_status'] = breakStatus;
        return this;
    }
    public set breakStatus(breakStatus: OptionVO  | undefined) {
        this['break_status'] = breakStatus;
    }
    public get breakStatus(): OptionVO | undefined {
        return this['break_status'];
    }
    public withStatusModifiedDate(statusModifiedDate: string): IssueVO {
        this['status_modified_date'] = statusModifiedDate;
        return this;
    }
    public set statusModifiedDate(statusModifiedDate: string  | undefined) {
        this['status_modified_date'] = statusModifiedDate;
    }
    public get statusModifiedDate(): string | undefined {
        return this['status_modified_date'];
    }
    public withExpectDeliveryTime(expectDeliveryTime: string): IssueVO {
        this['expect_delivery_time'] = expectDeliveryTime;
        return this;
    }
    public set expectDeliveryTime(expectDeliveryTime: string  | undefined) {
        this['expect_delivery_time'] = expectDeliveryTime;
    }
    public get expectDeliveryTime(): string | undefined {
        return this['expect_delivery_time'];
    }
    public withParentId(parentId: string): IssueVO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withAssignee(assignee: UserVO): IssueVO {
        this['assignee'] = assignee;
        return this;
    }
    public withRegion(region: string): IssueVO {
        this['region'] = region;
        return this;
    }
    public withStatus(status: AlmStatus): IssueVO {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): IssueVO {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withPlanPi(planPi: PlanVO): IssueVO {
        this['plan_pi'] = planPi;
        return this;
    }
    public set planPi(planPi: PlanVO  | undefined) {
        this['plan_pi'] = planPi;
    }
    public get planPi(): PlanVO | undefined {
        return this['plan_pi'];
    }
    public withLink(link: string): IssueVO {
        this['link'] = link;
        return this;
    }
    public withDescription(description: string): IssueVO {
        this['description'] = description;
        return this;
    }
    public withIsSuspended(isSuspended: OptionVO): IssueVO {
        this['is_suspended'] = isSuspended;
        return this;
    }
    public set isSuspended(isSuspended: OptionVO  | undefined) {
        this['is_suspended'] = isSuspended;
    }
    public get isSuspended(): OptionVO | undefined {
        return this['is_suspended'];
    }
    public withChangeStatus(changeStatus: OptionVO): IssueVO {
        this['change_status'] = changeStatus;
        return this;
    }
    public set changeStatus(changeStatus: OptionVO  | undefined) {
        this['change_status'] = changeStatus;
    }
    public get changeStatus(): OptionVO | undefined {
        return this['change_status'];
    }
    public withTitle(title: string): IssueVO {
        this['title'] = title;
        return this;
    }
    public withSumWorkloadManDay(sumWorkloadManDay: string): IssueVO {
        this['sum_workload_man_day'] = sumWorkloadManDay;
        return this;
    }
    public set sumWorkloadManDay(sumWorkloadManDay: string  | undefined) {
        this['sum_workload_man_day'] = sumWorkloadManDay;
    }
    public get sumWorkloadManDay(): string | undefined {
        return this['sum_workload_man_day'];
    }
    public withSysCloseReason(sysCloseReason: string): IssueVO {
        this['sys_close_reason'] = sysCloseReason;
        return this;
    }
    public set sysCloseReason(sysCloseReason: string  | undefined) {
        this['sys_close_reason'] = sysCloseReason;
    }
    public get sysCloseReason(): string | undefined {
        return this['sys_close_reason'];
    }
    public withSysResubmitReason(sysResubmitReason: string): IssueVO {
        this['sys_resubmit_reason'] = sysResubmitReason;
        return this;
    }
    public set sysResubmitReason(sysResubmitReason: string  | undefined) {
        this['sys_resubmit_reason'] = sysResubmitReason;
    }
    public get sysResubmitReason(): string | undefined {
        return this['sys_resubmit_reason'];
    }
    public withPlanEndDate(planEndDate: string): IssueVO {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: string  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): string | undefined {
        return this['plan_end_date'];
    }
    public withRr2ir(rr2ir: string): IssueVO {
        this['rr2ir'] = rr2ir;
        return this;
    }
    public withCategoryLayerId(categoryLayerId: string): IssueVO {
        this['category_layer_id'] = categoryLayerId;
        return this;
    }
    public set categoryLayerId(categoryLayerId: string  | undefined) {
        this['category_layer_id'] = categoryLayerId;
    }
    public get categoryLayerId(): string | undefined {
        return this['category_layer_id'];
    }
    public withSubmittedBy(submittedBy: Array<UserVO>): IssueVO {
        this['submitted_by'] = submittedBy;
        return this;
    }
    public set submittedBy(submittedBy: Array<UserVO>  | undefined) {
        this['submitted_by'] = submittedBy;
    }
    public get submittedBy(): Array<UserVO> | undefined {
        return this['submitted_by'];
    }
    public withRr2us(rr2us: string): IssueVO {
        this['rr2us'] = rr2us;
        return this;
    }
    public withSysNoDevelopReason(sysNoDevelopReason: string): IssueVO {
        this['sys_no_develop_reason'] = sysNoDevelopReason;
        return this;
    }
    public set sysNoDevelopReason(sysNoDevelopReason: string  | undefined) {
        this['sys_no_develop_reason'] = sysNoDevelopReason;
    }
    public get sysNoDevelopReason(): string | undefined {
        return this['sys_no_develop_reason'];
    }
    public withPlanIteration(planIteration: PlanVO): IssueVO {
        this['plan_iteration'] = planIteration;
        return this;
    }
    public set planIteration(planIteration: PlanVO  | undefined) {
        this['plan_iteration'] = planIteration;
    }
    public get planIteration(): PlanVO | undefined {
        return this['plan_iteration'];
    }
    public withSysReturnReason(sysReturnReason: string): IssueVO {
        this['sys_return_reason'] = sysReturnReason;
        return this;
    }
    public set sysReturnReason(sysReturnReason: string  | undefined) {
        this['sys_return_reason'] = sysReturnReason;
    }
    public get sysReturnReason(): string | undefined {
        return this['sys_return_reason'];
    }
    public withCascadeDelete(cascadeDelete: string): IssueVO {
        this['cascade_delete'] = cascadeDelete;
        return this;
    }
    public set cascadeDelete(cascadeDelete: string  | undefined) {
        this['cascade_delete'] = cascadeDelete;
    }
    public get cascadeDelete(): string | undefined {
        return this['cascade_delete'];
    }
    public withRecipient(recipient: Array<UserVO>): IssueVO {
        this['recipient'] = recipient;
        return this;
    }
    public withModifiedBy(modifiedBy: UserVO): IssueVO {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: UserVO  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): UserVO | undefined {
        return this['modified_by'];
    }
    public withCreatedDate(createdDate: string): IssueVO {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withCategory(category: string): IssueVO {
        this['category'] = category;
        return this;
    }
    public withCollaborativeStatus(collaborativeStatus: Array<string>): IssueVO {
        this['collaborative_status'] = collaborativeStatus;
        return this;
    }
    public set collaborativeStatus(collaborativeStatus: Array<string>  | undefined) {
        this['collaborative_status'] = collaborativeStatus;
    }
    public get collaborativeStatus(): Array<string> | undefined {
        return this['collaborative_status'];
    }
    public withProject(project: DomainVO): IssueVO {
        this['project'] = project;
        return this;
    }
    public withChildIssues(childIssues: { [key: string]: IssueVO; }): IssueVO {
        this['child_issues'] = childIssues;
        return this;
    }
    public set childIssues(childIssues: { [key: string]: IssueVO; }  | undefined) {
        this['child_issues'] = childIssues;
    }
    public get childIssues(): { [key: string]: IssueVO; } | undefined {
        return this['child_issues'];
    }
    public withActivateTimes(activateTimes: number): IssueVO {
        this['activate_times'] = activateTimes;
        return this;
    }
    public set activateTimes(activateTimes: number  | undefined) {
        this['activate_times'] = activateTimes;
    }
    public get activateTimes(): number | undefined {
        return this['activate_times'];
    }
    public withBaseline(baseline: OptionVO): IssueVO {
        this['baseline'] = baseline;
        return this;
    }
    public withBusinessDomain(businessDomain: OptionVO): IssueVO {
        this['business_domain'] = businessDomain;
        return this;
    }
    public set businessDomain(businessDomain: OptionVO  | undefined) {
        this['business_domain'] = businessDomain;
    }
    public get businessDomain(): OptionVO | undefined {
        return this['business_domain'];
    }
    public withChildren(children: string): IssueVO {
        this['children'] = children;
        return this;
    }
    public withCollaborativeHistory(collaborativeHistory: string): IssueVO {
        this['collaborative_history'] = collaborativeHistory;
        return this;
    }
    public set collaborativeHistory(collaborativeHistory: string  | undefined) {
        this['collaborative_history'] = collaborativeHistory;
    }
    public get collaborativeHistory(): string | undefined {
        return this['collaborative_history'];
    }
    public withCollaboratives(collaboratives: string): IssueVO {
        this['collaboratives'] = collaboratives;
        return this;
    }
    public withConvolutionActualHours(convolutionActualHours: string): IssueVO {
        this['convolution_actual_hours'] = convolutionActualHours;
        return this;
    }
    public set convolutionActualHours(convolutionActualHours: string  | undefined) {
        this['convolution_actual_hours'] = convolutionActualHours;
    }
    public get convolutionActualHours(): string | undefined {
        return this['convolution_actual_hours'];
    }
    public withConvolutionPlanHours(convolutionPlanHours: string): IssueVO {
        this['convolution_plan_hours'] = convolutionPlanHours;
        return this;
    }
    public set convolutionPlanHours(convolutionPlanHours: string  | undefined) {
        this['convolution_plan_hours'] = convolutionPlanHours;
    }
    public get convolutionPlanHours(): string | undefined {
        return this['convolution_plan_hours'];
    }
    public withDevelopOwner(developOwner: string): IssueVO {
        this['develop_owner'] = developOwner;
        return this;
    }
    public set developOwner(developOwner: string  | undefined) {
        this['develop_owner'] = developOwner;
    }
    public get developOwner(): string | undefined {
        return this['develop_owner'];
    }
    public withDoneRatio(doneRatio: OptionVO): IssueVO {
        this['done_ratio'] = doneRatio;
        return this;
    }
    public set doneRatio(doneRatio: OptionVO  | undefined) {
        this['done_ratio'] = doneRatio;
    }
    public get doneRatio(): OptionVO | undefined {
        return this['done_ratio'];
    }
    public withExpectedRepairDate(expectedRepairDate: string): IssueVO {
        this['expected_repair_date'] = expectedRepairDate;
        return this;
    }
    public set expectedRepairDate(expectedRepairDate: string  | undefined) {
        this['expected_repair_date'] = expectedRepairDate;
    }
    public get expectedRepairDate(): string | undefined {
        return this['expected_repair_date'];
    }
    public withFeature2ir(feature2ir: string): IssueVO {
        this['feature2ir'] = feature2ir;
        return this;
    }
    public withFeatureSet(featureSet: OptionVO): IssueVO {
        this['feature_set'] = featureSet;
        return this;
    }
    public set featureSet(featureSet: OptionVO  | undefined) {
        this['feature_set'] = featureSet;
    }
    public get featureSet(): OptionVO | undefined {
        return this['feature_set'];
    }
    public withFoundEnv(foundEnv: OptionVO): IssueVO {
        this['found_env'] = foundEnv;
        return this;
    }
    public set foundEnv(foundEnv: OptionVO  | undefined) {
        this['found_env'] = foundEnv;
    }
    public get foundEnv(): OptionVO | undefined {
        return this['found_env'];
    }
    public withFoundIteration(foundIteration: PlanVO): IssueVO {
        this['found_iteration'] = foundIteration;
        return this;
    }
    public set foundIteration(foundIteration: PlanVO  | undefined) {
        this['found_iteration'] = foundIteration;
    }
    public get foundIteration(): PlanVO | undefined {
        return this['found_iteration'];
    }
    public withFoundPi(foundPi: PlanVO): IssueVO {
        this['found_pi'] = foundPi;
        return this;
    }
    public set foundPi(foundPi: PlanVO  | undefined) {
        this['found_pi'] = foundPi;
    }
    public get foundPi(): PlanVO | undefined {
        return this['found_pi'];
    }
    public withFunctionScene(functionScene: string): IssueVO {
        this['function_scene'] = functionScene;
        return this;
    }
    public set functionScene(functionScene: string  | undefined) {
        this['function_scene'] = functionScene;
    }
    public get functionScene(): string | undefined {
        return this['function_scene'];
    }
    public withIr2feature(ir2feature: string): IssueVO {
        this['ir2feature'] = ir2feature;
        return this;
    }
    public withIr2rr(ir2rr: string): IssueVO {
        this['ir2rr'] = ir2rr;
        return this;
    }
    public withIssueOpinionId(issueOpinionId: string): IssueVO {
        this['issue_opinion_id'] = issueOpinionId;
        return this;
    }
    public set issueOpinionId(issueOpinionId: string  | undefined) {
        this['issue_opinion_id'] = issueOpinionId;
    }
    public get issueOpinionId(): string | undefined {
        return this['issue_opinion_id'];
    }
    public withIssueReviewId(issueReviewId: string): IssueVO {
        this['issue_review_id'] = issueReviewId;
        return this;
    }
    public set issueReviewId(issueReviewId: string  | undefined) {
        this['issue_review_id'] = issueReviewId;
    }
    public get issueReviewId(): string | undefined {
        return this['issue_review_id'];
    }
    public withModule(module: OptionVO): IssueVO {
        this['module'] = module;
        return this;
    }
    public withNeedBreak(needBreak: OptionVO): IssueVO {
        this['need_break'] = needBreak;
        return this;
    }
    public set needBreak(needBreak: OptionVO  | undefined) {
        this['need_break'] = needBreak;
    }
    public get needBreak(): OptionVO | undefined {
        return this['need_break'];
    }
    public withNeedDevelop(needDevelop: OptionVO): IssueVO {
        this['need_develop'] = needDevelop;
        return this;
    }
    public set needDevelop(needDevelop: OptionVO  | undefined) {
        this['need_develop'] = needDevelop;
    }
    public get needDevelop(): OptionVO | undefined {
        return this['need_develop'];
    }
    public withNoBreakReason(noBreakReason: string): IssueVO {
        this['no_break_reason'] = noBreakReason;
        return this;
    }
    public set noBreakReason(noBreakReason: string  | undefined) {
        this['no_break_reason'] = noBreakReason;
    }
    public get noBreakReason(): string | undefined {
        return this['no_break_reason'];
    }
    public withNoDevelopReason(noDevelopReason: string): IssueVO {
        this['no_develop_reason'] = noDevelopReason;
        return this;
    }
    public set noDevelopReason(noDevelopReason: string  | undefined) {
        this['no_develop_reason'] = noDevelopReason;
    }
    public get noDevelopReason(): string | undefined {
        return this['no_develop_reason'];
    }
    public withOrder(order: string): IssueVO {
        this['order'] = order;
        return this;
    }
    public withPlanDevEndDate(planDevEndDate: string): IssueVO {
        this['plan_dev_end_date'] = planDevEndDate;
        return this;
    }
    public set planDevEndDate(planDevEndDate: string  | undefined) {
        this['plan_dev_end_date'] = planDevEndDate;
    }
    public get planDevEndDate(): string | undefined {
        return this['plan_dev_end_date'];
    }
    public withPlanProcessingEndDate(planProcessingEndDate: string): IssueVO {
        this['plan_processing_end_date'] = planProcessingEndDate;
        return this;
    }
    public set planProcessingEndDate(planProcessingEndDate: string  | undefined) {
        this['plan_processing_end_date'] = planProcessingEndDate;
    }
    public get planProcessingEndDate(): string | undefined {
        return this['plan_processing_end_date'];
    }
    public withPlanResearchanddevelopEndDate(planResearchanddevelopEndDate: string): IssueVO {
        this['plan_researchanddevelop_end_date'] = planResearchanddevelopEndDate;
        return this;
    }
    public set planResearchanddevelopEndDate(planResearchanddevelopEndDate: string  | undefined) {
        this['plan_researchanddevelop_end_date'] = planResearchanddevelopEndDate;
    }
    public get planResearchanddevelopEndDate(): string | undefined {
        return this['plan_researchanddevelop_end_date'];
    }
    public withPlanTestEndDate(planTestEndDate: string): IssueVO {
        this['plan_test_end_date'] = planTestEndDate;
        return this;
    }
    public set planTestEndDate(planTestEndDate: string  | undefined) {
        this['plan_test_end_date'] = planTestEndDate;
    }
    public get planTestEndDate(): string | undefined {
        return this['plan_test_end_date'];
    }
    public withPositionFloat(positionFloat: string): IssueVO {
        this['position_float'] = positionFloat;
        return this;
    }
    public set positionFloat(positionFloat: string  | undefined) {
        this['position_float'] = positionFloat;
    }
    public get positionFloat(): string | undefined {
        return this['position_float'];
    }
    public withProcessingOwner(processingOwner: string): IssueVO {
        this['processing_owner'] = processingOwner;
        return this;
    }
    public set processingOwner(processingOwner: string  | undefined) {
        this['processing_owner'] = processingOwner;
    }
    public get processingOwner(): string | undefined {
        return this['processing_owner'];
    }
    public withReasonAnalysis(reasonAnalysis: string): IssueVO {
        this['reason_analysis'] = reasonAnalysis;
        return this;
    }
    public set reasonAnalysis(reasonAnalysis: string  | undefined) {
        this['reason_analysis'] = reasonAnalysis;
    }
    public get reasonAnalysis(): string | undefined {
        return this['reason_analysis'];
    }
    public withRegressionFailureNumber(regressionFailureNumber: number): IssueVO {
        this['regression_failure_number'] = regressionFailureNumber;
        return this;
    }
    public set regressionFailureNumber(regressionFailureNumber: number  | undefined) {
        this['regression_failure_number'] = regressionFailureNumber;
    }
    public get regressionFailureNumber(): number | undefined {
        return this['regression_failure_number'];
    }
    public withRelatedNetworkSecurity(relatedNetworkSecurity: OptionVO): IssueVO {
        this['related_network_security'] = relatedNetworkSecurity;
        return this;
    }
    public set relatedNetworkSecurity(relatedNetworkSecurity: OptionVO  | undefined) {
        this['related_network_security'] = relatedNetworkSecurity;
    }
    public get relatedNetworkSecurity(): OptionVO | undefined {
        return this['related_network_security'];
    }
    public withRepairSolution(repairSolution: string): IssueVO {
        this['repair_solution'] = repairSolution;
        return this;
    }
    public set repairSolution(repairSolution: string  | undefined) {
        this['repair_solution'] = repairSolution;
    }
    public get repairSolution(): string | undefined {
        return this['repair_solution'];
    }
    public withResearchanddevelopOwner(researchanddevelopOwner: string): IssueVO {
        this['researchanddevelop_owner'] = researchanddevelopOwner;
        return this;
    }
    public set researchanddevelopOwner(researchanddevelopOwner: string  | undefined) {
        this['researchanddevelop_owner'] = researchanddevelopOwner;
    }
    public get researchanddevelopOwner(): string | undefined {
        return this['researchanddevelop_owner'];
    }
    public withSeverity(severity: OptionVO): IssueVO {
        this['severity'] = severity;
        return this;
    }
    public withSysActivationReason(sysActivationReason: string): IssueVO {
        this['sys_activation_reason'] = sysActivationReason;
        return this;
    }
    public set sysActivationReason(sysActivationReason: string  | undefined) {
        this['sys_activation_reason'] = sysActivationReason;
    }
    public get sysActivationReason(): string | undefined {
        return this['sys_activation_reason'];
    }
    public withSysNoRepairReason(sysNoRepairReason: string): IssueVO {
        this['sys_no_repair_reason'] = sysNoRepairReason;
        return this;
    }
    public set sysNoRepairReason(sysNoRepairReason: string  | undefined) {
        this['sys_no_repair_reason'] = sysNoRepairReason;
    }
    public get sysNoRepairReason(): string | undefined {
        return this['sys_no_repair_reason'];
    }
    public withTestFailuresTimes(testFailuresTimes: number): IssueVO {
        this['test_failures_times'] = testFailuresTimes;
        return this;
    }
    public set testFailuresTimes(testFailuresTimes: number  | undefined) {
        this['test_failures_times'] = testFailuresTimes;
    }
    public get testFailuresTimes(): number | undefined {
        return this['test_failures_times'];
    }
    public withTestOwner(testOwner: string): IssueVO {
        this['test_owner'] = testOwner;
        return this;
    }
    public set testOwner(testOwner: string  | undefined) {
        this['test_owner'] = testOwner;
    }
    public get testOwner(): string | undefined {
        return this['test_owner'];
    }
    public withTestReport(testReport: string): IssueVO {
        this['test_report'] = testReport;
        return this;
    }
    public set testReport(testReport: string  | undefined) {
        this['test_report'] = testReport;
    }
    public get testReport(): string | undefined {
        return this['test_report'];
    }
    public withValFeature(valFeature: OptionVO): IssueVO {
        this['val_feature'] = valFeature;
        return this;
    }
    public set valFeature(valFeature: OptionVO  | undefined) {
        this['val_feature'] = valFeature;
    }
    public get valFeature(): OptionVO | undefined {
        return this['val_feature'];
    }
    public withWorkitem2ganttchart(workitem2ganttchart: string): IssueVO {
        this['workitem2ganttchart'] = workitem2ganttchart;
        return this;
    }
    public withWorkitem2mindmap(workitem2mindmap: string): IssueVO {
        this['workitem2mindmap'] = workitem2mindmap;
        return this;
    }
}