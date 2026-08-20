import { ProcessInstanceResponseResultAssignee } from './ProcessInstanceResponseResultAssignee';
import { ProcessInstanceResponseResultIssuePriority } from './ProcessInstanceResponseResultIssuePriority';
import { ProcessInstanceResponseResultIssueStatus } from './ProcessInstanceResponseResultIssueStatus';


export class ProcessInstanceResponseResultCos {
    public region?: string;
    public category?: string;
    public title?: string;
    public status?: string;
    public assignee?: ProcessInstanceResponseResultAssignee;
    public description?: string;
    private 'number'?: string;
    public order?: string;
    public co2cr?: string;
    public co2br?: string;
    public co2gr?: string;
    public id?: string;
    public type?: string;
    public state?: string;
    private 'before_change'?: string;
    private 'after_change'?: string;
    private 'modified_by'?: string;
    private 'modified_date'?: string;
    private 'created_by'?: string;
    private 'created_date'?: string;
    private 'tenant_id'?: string;
    private 'status_map'?: string;
    private 'domain_id'?: string;
    private 'source_system'?: string;
    private 'source_system_link'?: string;
    private 'issue_category'?: string;
    private 'issue_id'?: string;
    private 'issue_status'?: ProcessInstanceResponseResultIssueStatus;
    private 'issue_severity'?: string;
    private 'issue_priority'?: ProcessInstanceResponseResultIssuePriority;
    private 'domain_title'?: string;
    private 'src_domain_title'?: string;
    private 'issue_assignee_name'?: string;
    private 'change_reason'?: string;
    private 'change_type'?: string;
    private 'source_system_id'?: string;
    private 'change_description'?: string;
    private 'has_deleted'?: string;
    private 'approval_phase_result'?: string;
    private 'approval_complete_time'?: string;
    private 'ccb_description'?: string;
    private 'actual_ccb'?: string;
    public ccbs?: string;
    private 'ccb_info'?: string;
    public opinions?: string;
    private 'opinion_comments'?: string;
    private 'approval_time'?: string;
    private 'src_domain_id'?: string;
    private 'cross_domain'?: string;
    private 'domain_moved'?: string;
    public reviewer?: Array<string>;
    public approver?: Array<string>;
    public rounds?: string;
    private 'last_round_result'?: string;
    public constructor() { 
    }
    public withRegion(region: string): ProcessInstanceResponseResultCos {
        this['region'] = region;
        return this;
    }
    public withCategory(category: string): ProcessInstanceResponseResultCos {
        this['category'] = category;
        return this;
    }
    public withTitle(title: string): ProcessInstanceResponseResultCos {
        this['title'] = title;
        return this;
    }
    public withStatus(status: string): ProcessInstanceResponseResultCos {
        this['status'] = status;
        return this;
    }
    public withAssignee(assignee: ProcessInstanceResponseResultAssignee): ProcessInstanceResponseResultCos {
        this['assignee'] = assignee;
        return this;
    }
    public withDescription(description: string): ProcessInstanceResponseResultCos {
        this['description'] = description;
        return this;
    }
    public withModelNumber(modelNumber: string): ProcessInstanceResponseResultCos {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withOrder(order: string): ProcessInstanceResponseResultCos {
        this['order'] = order;
        return this;
    }
    public withCo2cr(co2cr: string): ProcessInstanceResponseResultCos {
        this['co2cr'] = co2cr;
        return this;
    }
    public withCo2br(co2br: string): ProcessInstanceResponseResultCos {
        this['co2br'] = co2br;
        return this;
    }
    public withCo2gr(co2gr: string): ProcessInstanceResponseResultCos {
        this['co2gr'] = co2gr;
        return this;
    }
    public withId(id: string): ProcessInstanceResponseResultCos {
        this['id'] = id;
        return this;
    }
    public withType(type: string): ProcessInstanceResponseResultCos {
        this['type'] = type;
        return this;
    }
    public withState(state: string): ProcessInstanceResponseResultCos {
        this['state'] = state;
        return this;
    }
    public withBeforeChange(beforeChange: string): ProcessInstanceResponseResultCos {
        this['before_change'] = beforeChange;
        return this;
    }
    public set beforeChange(beforeChange: string  | undefined) {
        this['before_change'] = beforeChange;
    }
    public get beforeChange(): string | undefined {
        return this['before_change'];
    }
    public withAfterChange(afterChange: string): ProcessInstanceResponseResultCos {
        this['after_change'] = afterChange;
        return this;
    }
    public set afterChange(afterChange: string  | undefined) {
        this['after_change'] = afterChange;
    }
    public get afterChange(): string | undefined {
        return this['after_change'];
    }
    public withModifiedBy(modifiedBy: string): ProcessInstanceResponseResultCos {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withModifiedDate(modifiedDate: string): ProcessInstanceResponseResultCos {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withCreatedBy(createdBy: string): ProcessInstanceResponseResultCos {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedDate(createdDate: string): ProcessInstanceResponseResultCos {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withTenantId(tenantId: string): ProcessInstanceResponseResultCos {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withStatusMap(statusMap: string): ProcessInstanceResponseResultCos {
        this['status_map'] = statusMap;
        return this;
    }
    public set statusMap(statusMap: string  | undefined) {
        this['status_map'] = statusMap;
    }
    public get statusMap(): string | undefined {
        return this['status_map'];
    }
    public withDomainId(domainId: string): ProcessInstanceResponseResultCos {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withSourceSystem(sourceSystem: string): ProcessInstanceResponseResultCos {
        this['source_system'] = sourceSystem;
        return this;
    }
    public set sourceSystem(sourceSystem: string  | undefined) {
        this['source_system'] = sourceSystem;
    }
    public get sourceSystem(): string | undefined {
        return this['source_system'];
    }
    public withSourceSystemLink(sourceSystemLink: string): ProcessInstanceResponseResultCos {
        this['source_system_link'] = sourceSystemLink;
        return this;
    }
    public set sourceSystemLink(sourceSystemLink: string  | undefined) {
        this['source_system_link'] = sourceSystemLink;
    }
    public get sourceSystemLink(): string | undefined {
        return this['source_system_link'];
    }
    public withIssueCategory(issueCategory: string): ProcessInstanceResponseResultCos {
        this['issue_category'] = issueCategory;
        return this;
    }
    public set issueCategory(issueCategory: string  | undefined) {
        this['issue_category'] = issueCategory;
    }
    public get issueCategory(): string | undefined {
        return this['issue_category'];
    }
    public withIssueId(issueId: string): ProcessInstanceResponseResultCos {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withIssueStatus(issueStatus: ProcessInstanceResponseResultIssueStatus): ProcessInstanceResponseResultCos {
        this['issue_status'] = issueStatus;
        return this;
    }
    public set issueStatus(issueStatus: ProcessInstanceResponseResultIssueStatus  | undefined) {
        this['issue_status'] = issueStatus;
    }
    public get issueStatus(): ProcessInstanceResponseResultIssueStatus | undefined {
        return this['issue_status'];
    }
    public withIssueSeverity(issueSeverity: string): ProcessInstanceResponseResultCos {
        this['issue_severity'] = issueSeverity;
        return this;
    }
    public set issueSeverity(issueSeverity: string  | undefined) {
        this['issue_severity'] = issueSeverity;
    }
    public get issueSeverity(): string | undefined {
        return this['issue_severity'];
    }
    public withIssuePriority(issuePriority: ProcessInstanceResponseResultIssuePriority): ProcessInstanceResponseResultCos {
        this['issue_priority'] = issuePriority;
        return this;
    }
    public set issuePriority(issuePriority: ProcessInstanceResponseResultIssuePriority  | undefined) {
        this['issue_priority'] = issuePriority;
    }
    public get issuePriority(): ProcessInstanceResponseResultIssuePriority | undefined {
        return this['issue_priority'];
    }
    public withDomainTitle(domainTitle: string): ProcessInstanceResponseResultCos {
        this['domain_title'] = domainTitle;
        return this;
    }
    public set domainTitle(domainTitle: string  | undefined) {
        this['domain_title'] = domainTitle;
    }
    public get domainTitle(): string | undefined {
        return this['domain_title'];
    }
    public withSrcDomainTitle(srcDomainTitle: string): ProcessInstanceResponseResultCos {
        this['src_domain_title'] = srcDomainTitle;
        return this;
    }
    public set srcDomainTitle(srcDomainTitle: string  | undefined) {
        this['src_domain_title'] = srcDomainTitle;
    }
    public get srcDomainTitle(): string | undefined {
        return this['src_domain_title'];
    }
    public withIssueAssigneeName(issueAssigneeName: string): ProcessInstanceResponseResultCos {
        this['issue_assignee_name'] = issueAssigneeName;
        return this;
    }
    public set issueAssigneeName(issueAssigneeName: string  | undefined) {
        this['issue_assignee_name'] = issueAssigneeName;
    }
    public get issueAssigneeName(): string | undefined {
        return this['issue_assignee_name'];
    }
    public withChangeReason(changeReason: string): ProcessInstanceResponseResultCos {
        this['change_reason'] = changeReason;
        return this;
    }
    public set changeReason(changeReason: string  | undefined) {
        this['change_reason'] = changeReason;
    }
    public get changeReason(): string | undefined {
        return this['change_reason'];
    }
    public withChangeType(changeType: string): ProcessInstanceResponseResultCos {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): string | undefined {
        return this['change_type'];
    }
    public withSourceSystemId(sourceSystemId: string): ProcessInstanceResponseResultCos {
        this['source_system_id'] = sourceSystemId;
        return this;
    }
    public set sourceSystemId(sourceSystemId: string  | undefined) {
        this['source_system_id'] = sourceSystemId;
    }
    public get sourceSystemId(): string | undefined {
        return this['source_system_id'];
    }
    public withChangeDescription(changeDescription: string): ProcessInstanceResponseResultCos {
        this['change_description'] = changeDescription;
        return this;
    }
    public set changeDescription(changeDescription: string  | undefined) {
        this['change_description'] = changeDescription;
    }
    public get changeDescription(): string | undefined {
        return this['change_description'];
    }
    public withHasDeleted(hasDeleted: string): ProcessInstanceResponseResultCos {
        this['has_deleted'] = hasDeleted;
        return this;
    }
    public set hasDeleted(hasDeleted: string  | undefined) {
        this['has_deleted'] = hasDeleted;
    }
    public get hasDeleted(): string | undefined {
        return this['has_deleted'];
    }
    public withApprovalPhaseResult(approvalPhaseResult: string): ProcessInstanceResponseResultCos {
        this['approval_phase_result'] = approvalPhaseResult;
        return this;
    }
    public set approvalPhaseResult(approvalPhaseResult: string  | undefined) {
        this['approval_phase_result'] = approvalPhaseResult;
    }
    public get approvalPhaseResult(): string | undefined {
        return this['approval_phase_result'];
    }
    public withApprovalCompleteTime(approvalCompleteTime: string): ProcessInstanceResponseResultCos {
        this['approval_complete_time'] = approvalCompleteTime;
        return this;
    }
    public set approvalCompleteTime(approvalCompleteTime: string  | undefined) {
        this['approval_complete_time'] = approvalCompleteTime;
    }
    public get approvalCompleteTime(): string | undefined {
        return this['approval_complete_time'];
    }
    public withCcbDescription(ccbDescription: string): ProcessInstanceResponseResultCos {
        this['ccb_description'] = ccbDescription;
        return this;
    }
    public set ccbDescription(ccbDescription: string  | undefined) {
        this['ccb_description'] = ccbDescription;
    }
    public get ccbDescription(): string | undefined {
        return this['ccb_description'];
    }
    public withActualCcb(actualCcb: string): ProcessInstanceResponseResultCos {
        this['actual_ccb'] = actualCcb;
        return this;
    }
    public set actualCcb(actualCcb: string  | undefined) {
        this['actual_ccb'] = actualCcb;
    }
    public get actualCcb(): string | undefined {
        return this['actual_ccb'];
    }
    public withCcbs(ccbs: string): ProcessInstanceResponseResultCos {
        this['ccbs'] = ccbs;
        return this;
    }
    public withCcbInfo(ccbInfo: string): ProcessInstanceResponseResultCos {
        this['ccb_info'] = ccbInfo;
        return this;
    }
    public set ccbInfo(ccbInfo: string  | undefined) {
        this['ccb_info'] = ccbInfo;
    }
    public get ccbInfo(): string | undefined {
        return this['ccb_info'];
    }
    public withOpinions(opinions: string): ProcessInstanceResponseResultCos {
        this['opinions'] = opinions;
        return this;
    }
    public withOpinionComments(opinionComments: string): ProcessInstanceResponseResultCos {
        this['opinion_comments'] = opinionComments;
        return this;
    }
    public set opinionComments(opinionComments: string  | undefined) {
        this['opinion_comments'] = opinionComments;
    }
    public get opinionComments(): string | undefined {
        return this['opinion_comments'];
    }
    public withApprovalTime(approvalTime: string): ProcessInstanceResponseResultCos {
        this['approval_time'] = approvalTime;
        return this;
    }
    public set approvalTime(approvalTime: string  | undefined) {
        this['approval_time'] = approvalTime;
    }
    public get approvalTime(): string | undefined {
        return this['approval_time'];
    }
    public withSrcDomainId(srcDomainId: string): ProcessInstanceResponseResultCos {
        this['src_domain_id'] = srcDomainId;
        return this;
    }
    public set srcDomainId(srcDomainId: string  | undefined) {
        this['src_domain_id'] = srcDomainId;
    }
    public get srcDomainId(): string | undefined {
        return this['src_domain_id'];
    }
    public withCrossDomain(crossDomain: string): ProcessInstanceResponseResultCos {
        this['cross_domain'] = crossDomain;
        return this;
    }
    public set crossDomain(crossDomain: string  | undefined) {
        this['cross_domain'] = crossDomain;
    }
    public get crossDomain(): string | undefined {
        return this['cross_domain'];
    }
    public withDomainMoved(domainMoved: string): ProcessInstanceResponseResultCos {
        this['domain_moved'] = domainMoved;
        return this;
    }
    public set domainMoved(domainMoved: string  | undefined) {
        this['domain_moved'] = domainMoved;
    }
    public get domainMoved(): string | undefined {
        return this['domain_moved'];
    }
    public withReviewer(reviewer: Array<string>): ProcessInstanceResponseResultCos {
        this['reviewer'] = reviewer;
        return this;
    }
    public withApprover(approver: Array<string>): ProcessInstanceResponseResultCos {
        this['approver'] = approver;
        return this;
    }
    public withRounds(rounds: string): ProcessInstanceResponseResultCos {
        this['rounds'] = rounds;
        return this;
    }
    public withLastRoundResult(lastRoundResult: string): ProcessInstanceResponseResultCos {
        this['last_round_result'] = lastRoundResult;
        return this;
    }
    public set lastRoundResult(lastRoundResult: string  | undefined) {
        this['last_round_result'] = lastRoundResult;
    }
    public get lastRoundResult(): string | undefined {
        return this['last_round_result'];
    }
}