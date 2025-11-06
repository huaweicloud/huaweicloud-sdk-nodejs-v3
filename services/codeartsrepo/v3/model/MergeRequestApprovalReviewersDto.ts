import { ApprovalUserDto } from './ApprovalUserDto';


export class MergeRequestApprovalReviewersDto {
    private 'approval_merge_request_reviewers'?: Array<ApprovalUserDto>;
    public constructor() { 
    }
    public withApprovalMergeRequestReviewers(approvalMergeRequestReviewers: Array<ApprovalUserDto>): MergeRequestApprovalReviewersDto {
        this['approval_merge_request_reviewers'] = approvalMergeRequestReviewers;
        return this;
    }
    public set approvalMergeRequestReviewers(approvalMergeRequestReviewers: Array<ApprovalUserDto>  | undefined) {
        this['approval_merge_request_reviewers'] = approvalMergeRequestReviewers;
    }
    public get approvalMergeRequestReviewers(): Array<ApprovalUserDto> | undefined {
        return this['approval_merge_request_reviewers'];
    }
}