import { ProcessInstanceResponseResultCcbs } from './ProcessInstanceResponseResultCcbs';
import { ProcessInstanceResponseResultCos } from './ProcessInstanceResponseResultCos';
import { ProcessInstanceResponseResultCreatedBy } from './ProcessInstanceResponseResultCreatedBy';
import { ProcessInstanceResponseResultModifiedBy } from './ProcessInstanceResponseResultModifiedBy';
import { ProcessInstanceResponseResultOpinions } from './ProcessInstanceResponseResultOpinions';
import { ProcessInstanceResponseResultReviewConfig } from './ProcessInstanceResponseResultReviewConfig';
import { ProcessInstanceResponseResultStatus } from './ProcessInstanceResponseResultStatus';


export class ProcessInstanceResponseResult {
    public cc?: string;
    public approver?: string;
    public description?: string;
    private 'closed_time'?: string;
    public reviewer?: string;
    public type?: string;
    public title?: string;
    private 'modified_date'?: string;
    private 'created_by'?: ProcessInstanceResponseResultCreatedBy;
    private 'domain_id'?: string;
    private 'number'?: string;
    private 'need_approval'?: boolean;
    public br2co?: string;
    private 'modified_by'?: ProcessInstanceResponseResultModifiedBy;
    private 'approval_time'?: string;
    private 'plan_end_date'?: string;
    public id?: string;
    public state?: string;
    private 'created_date'?: string;
    public category?: string;
    private 'plan_start_date'?: string;
    private 'review_config'?: ProcessInstanceResponseResultReviewConfig;
    public status?: ProcessInstanceResponseResultStatus;
    public stage?: string;
    public opinions?: Array<ProcessInstanceResponseResultOpinions>;
    private 'opinion_comments'?: Array<string>;
    public attachments?: Array<string>;
    public wikis?: Array<string>;
    public associatedocuments?: Array<string>;
    public cos?: Array<ProcessInstanceResponseResultCos>;
    private 'approval_phase_result'?: string;
    public ccbs?: Array<ProcessInstanceResponseResultCcbs>;
    public constructor() { 
    }
    public withCc(cc: string): ProcessInstanceResponseResult {
        this['cc'] = cc;
        return this;
    }
    public withApprover(approver: string): ProcessInstanceResponseResult {
        this['approver'] = approver;
        return this;
    }
    public withDescription(description: string): ProcessInstanceResponseResult {
        this['description'] = description;
        return this;
    }
    public withClosedTime(closedTime: string): ProcessInstanceResponseResult {
        this['closed_time'] = closedTime;
        return this;
    }
    public set closedTime(closedTime: string  | undefined) {
        this['closed_time'] = closedTime;
    }
    public get closedTime(): string | undefined {
        return this['closed_time'];
    }
    public withReviewer(reviewer: string): ProcessInstanceResponseResult {
        this['reviewer'] = reviewer;
        return this;
    }
    public withType(type: string): ProcessInstanceResponseResult {
        this['type'] = type;
        return this;
    }
    public withTitle(title: string): ProcessInstanceResponseResult {
        this['title'] = title;
        return this;
    }
    public withModifiedDate(modifiedDate: string): ProcessInstanceResponseResult {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withCreatedBy(createdBy: ProcessInstanceResponseResultCreatedBy): ProcessInstanceResponseResult {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: ProcessInstanceResponseResultCreatedBy  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): ProcessInstanceResponseResultCreatedBy | undefined {
        return this['created_by'];
    }
    public withDomainId(domainId: string): ProcessInstanceResponseResult {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withModelNumber(modelNumber: string): ProcessInstanceResponseResult {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withNeedApproval(needApproval: boolean): ProcessInstanceResponseResult {
        this['need_approval'] = needApproval;
        return this;
    }
    public set needApproval(needApproval: boolean  | undefined) {
        this['need_approval'] = needApproval;
    }
    public get needApproval(): boolean | undefined {
        return this['need_approval'];
    }
    public withBr2co(br2co: string): ProcessInstanceResponseResult {
        this['br2co'] = br2co;
        return this;
    }
    public withModifiedBy(modifiedBy: ProcessInstanceResponseResultModifiedBy): ProcessInstanceResponseResult {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: ProcessInstanceResponseResultModifiedBy  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): ProcessInstanceResponseResultModifiedBy | undefined {
        return this['modified_by'];
    }
    public withApprovalTime(approvalTime: string): ProcessInstanceResponseResult {
        this['approval_time'] = approvalTime;
        return this;
    }
    public set approvalTime(approvalTime: string  | undefined) {
        this['approval_time'] = approvalTime;
    }
    public get approvalTime(): string | undefined {
        return this['approval_time'];
    }
    public withPlanEndDate(planEndDate: string): ProcessInstanceResponseResult {
        this['plan_end_date'] = planEndDate;
        return this;
    }
    public set planEndDate(planEndDate: string  | undefined) {
        this['plan_end_date'] = planEndDate;
    }
    public get planEndDate(): string | undefined {
        return this['plan_end_date'];
    }
    public withId(id: string): ProcessInstanceResponseResult {
        this['id'] = id;
        return this;
    }
    public withState(state: string): ProcessInstanceResponseResult {
        this['state'] = state;
        return this;
    }
    public withCreatedDate(createdDate: string): ProcessInstanceResponseResult {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withCategory(category: string): ProcessInstanceResponseResult {
        this['category'] = category;
        return this;
    }
    public withPlanStartDate(planStartDate: string): ProcessInstanceResponseResult {
        this['plan_start_date'] = planStartDate;
        return this;
    }
    public set planStartDate(planStartDate: string  | undefined) {
        this['plan_start_date'] = planStartDate;
    }
    public get planStartDate(): string | undefined {
        return this['plan_start_date'];
    }
    public withReviewConfig(reviewConfig: ProcessInstanceResponseResultReviewConfig): ProcessInstanceResponseResult {
        this['review_config'] = reviewConfig;
        return this;
    }
    public set reviewConfig(reviewConfig: ProcessInstanceResponseResultReviewConfig  | undefined) {
        this['review_config'] = reviewConfig;
    }
    public get reviewConfig(): ProcessInstanceResponseResultReviewConfig | undefined {
        return this['review_config'];
    }
    public withStatus(status: ProcessInstanceResponseResultStatus): ProcessInstanceResponseResult {
        this['status'] = status;
        return this;
    }
    public withStage(stage: string): ProcessInstanceResponseResult {
        this['stage'] = stage;
        return this;
    }
    public withOpinions(opinions: Array<ProcessInstanceResponseResultOpinions>): ProcessInstanceResponseResult {
        this['opinions'] = opinions;
        return this;
    }
    public withOpinionComments(opinionComments: Array<string>): ProcessInstanceResponseResult {
        this['opinion_comments'] = opinionComments;
        return this;
    }
    public set opinionComments(opinionComments: Array<string>  | undefined) {
        this['opinion_comments'] = opinionComments;
    }
    public get opinionComments(): Array<string> | undefined {
        return this['opinion_comments'];
    }
    public withAttachments(attachments: Array<string>): ProcessInstanceResponseResult {
        this['attachments'] = attachments;
        return this;
    }
    public withWikis(wikis: Array<string>): ProcessInstanceResponseResult {
        this['wikis'] = wikis;
        return this;
    }
    public withAssociatedocuments(associatedocuments: Array<string>): ProcessInstanceResponseResult {
        this['associatedocuments'] = associatedocuments;
        return this;
    }
    public withCos(cos: Array<ProcessInstanceResponseResultCos>): ProcessInstanceResponseResult {
        this['cos'] = cos;
        return this;
    }
    public withApprovalPhaseResult(approvalPhaseResult: string): ProcessInstanceResponseResult {
        this['approval_phase_result'] = approvalPhaseResult;
        return this;
    }
    public set approvalPhaseResult(approvalPhaseResult: string  | undefined) {
        this['approval_phase_result'] = approvalPhaseResult;
    }
    public get approvalPhaseResult(): string | undefined {
        return this['approval_phase_result'];
    }
    public withCcbs(ccbs: Array<ProcessInstanceResponseResultCcbs>): ProcessInstanceResponseResult {
        this['ccbs'] = ccbs;
        return this;
    }
}