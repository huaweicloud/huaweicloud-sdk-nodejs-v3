import { CcbEntity } from './CcbEntity';
import { ReviewCommentEntity } from './ReviewCommentEntity';
import { ReviewOpinionEntity } from './ReviewOpinionEntity';
import { UserEntity } from './UserEntity';


export class COEntity {
    private 'after_change'?: string;
    private 'review_complete_time'?: string;
    private 'review_phase_result'?: string;
    private 'review_time'?: string;
    private 'before_change'?: string;
    public category?: COEntityCategoryEnum | string;
    private 'ccb_info'?: CcbEntity;
    public ccbs?: Array<UserEntity>;
    private 'change_type'?: string;
    public co2review?: string;
    private 'created_by'?: string;
    private 'created_date'?: string;
    public description?: string;
    public id?: string;
    private 'issue_id'?: string;
    private 'issue_number'?: string;
    private 'issue_category'?: string;
    private 'modified_by'?: string;
    private 'modified_date'?: string;
    public opinions?: Array<UserEntity>;
    private 'opinion_comments'?: Array<ReviewOpinionEntity>;
    private 'review_comments'?: Array<ReviewCommentEntity>;
    private 'approval_comments'?: Array<ReviewCommentEntity>;
    public reviewer?: Array<string>;
    public approver?: Array<string>;
    public status?: string;
    public constructor() { 
    }
    public withAfterChange(afterChange: string): COEntity {
        this['after_change'] = afterChange;
        return this;
    }
    public set afterChange(afterChange: string  | undefined) {
        this['after_change'] = afterChange;
    }
    public get afterChange(): string | undefined {
        return this['after_change'];
    }
    public withReviewCompleteTime(reviewCompleteTime: string): COEntity {
        this['review_complete_time'] = reviewCompleteTime;
        return this;
    }
    public set reviewCompleteTime(reviewCompleteTime: string  | undefined) {
        this['review_complete_time'] = reviewCompleteTime;
    }
    public get reviewCompleteTime(): string | undefined {
        return this['review_complete_time'];
    }
    public withReviewPhaseResult(reviewPhaseResult: string): COEntity {
        this['review_phase_result'] = reviewPhaseResult;
        return this;
    }
    public set reviewPhaseResult(reviewPhaseResult: string  | undefined) {
        this['review_phase_result'] = reviewPhaseResult;
    }
    public get reviewPhaseResult(): string | undefined {
        return this['review_phase_result'];
    }
    public withReviewTime(reviewTime: string): COEntity {
        this['review_time'] = reviewTime;
        return this;
    }
    public set reviewTime(reviewTime: string  | undefined) {
        this['review_time'] = reviewTime;
    }
    public get reviewTime(): string | undefined {
        return this['review_time'];
    }
    public withBeforeChange(beforeChange: string): COEntity {
        this['before_change'] = beforeChange;
        return this;
    }
    public set beforeChange(beforeChange: string  | undefined) {
        this['before_change'] = beforeChange;
    }
    public get beforeChange(): string | undefined {
        return this['before_change'];
    }
    public withCategory(category: COEntityCategoryEnum | string): COEntity {
        this['category'] = category;
        return this;
    }
    public withCcbInfo(ccbInfo: CcbEntity): COEntity {
        this['ccb_info'] = ccbInfo;
        return this;
    }
    public set ccbInfo(ccbInfo: CcbEntity  | undefined) {
        this['ccb_info'] = ccbInfo;
    }
    public get ccbInfo(): CcbEntity | undefined {
        return this['ccb_info'];
    }
    public withCcbs(ccbs: Array<UserEntity>): COEntity {
        this['ccbs'] = ccbs;
        return this;
    }
    public withChangeType(changeType: string): COEntity {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): string | undefined {
        return this['change_type'];
    }
    public withCo2review(co2review: string): COEntity {
        this['co2review'] = co2review;
        return this;
    }
    public withCreatedBy(createdBy: string): COEntity {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreatedDate(createdDate: string): COEntity {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withDescription(description: string): COEntity {
        this['description'] = description;
        return this;
    }
    public withId(id: string): COEntity {
        this['id'] = id;
        return this;
    }
    public withIssueId(issueId: string): COEntity {
        this['issue_id'] = issueId;
        return this;
    }
    public set issueId(issueId: string  | undefined) {
        this['issue_id'] = issueId;
    }
    public get issueId(): string | undefined {
        return this['issue_id'];
    }
    public withIssueNumber(issueNumber: string): COEntity {
        this['issue_number'] = issueNumber;
        return this;
    }
    public set issueNumber(issueNumber: string  | undefined) {
        this['issue_number'] = issueNumber;
    }
    public get issueNumber(): string | undefined {
        return this['issue_number'];
    }
    public withIssueCategory(issueCategory: string): COEntity {
        this['issue_category'] = issueCategory;
        return this;
    }
    public set issueCategory(issueCategory: string  | undefined) {
        this['issue_category'] = issueCategory;
    }
    public get issueCategory(): string | undefined {
        return this['issue_category'];
    }
    public withModifiedBy(modifiedBy: string): COEntity {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
    public withModifiedDate(modifiedDate: string): COEntity {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withOpinions(opinions: Array<UserEntity>): COEntity {
        this['opinions'] = opinions;
        return this;
    }
    public withOpinionComments(opinionComments: Array<ReviewOpinionEntity>): COEntity {
        this['opinion_comments'] = opinionComments;
        return this;
    }
    public set opinionComments(opinionComments: Array<ReviewOpinionEntity>  | undefined) {
        this['opinion_comments'] = opinionComments;
    }
    public get opinionComments(): Array<ReviewOpinionEntity> | undefined {
        return this['opinion_comments'];
    }
    public withReviewComments(reviewComments: Array<ReviewCommentEntity>): COEntity {
        this['review_comments'] = reviewComments;
        return this;
    }
    public set reviewComments(reviewComments: Array<ReviewCommentEntity>  | undefined) {
        this['review_comments'] = reviewComments;
    }
    public get reviewComments(): Array<ReviewCommentEntity> | undefined {
        return this['review_comments'];
    }
    public withApprovalComments(approvalComments: Array<ReviewCommentEntity>): COEntity {
        this['approval_comments'] = approvalComments;
        return this;
    }
    public set approvalComments(approvalComments: Array<ReviewCommentEntity>  | undefined) {
        this['approval_comments'] = approvalComments;
    }
    public get approvalComments(): Array<ReviewCommentEntity> | undefined {
        return this['approval_comments'];
    }
    public withReviewer(reviewer: Array<string>): COEntity {
        this['reviewer'] = reviewer;
        return this;
    }
    public withApprover(approver: Array<string>): COEntity {
        this['approver'] = approver;
        return this;
    }
    public withStatus(status: string): COEntity {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum COEntityCategoryEnum {
    CO = 'CO'
}
