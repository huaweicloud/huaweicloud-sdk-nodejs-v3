import { ApprovalMergeRequestApproversItem } from './ApprovalMergeRequestApproversItem';
import { Author } from './Author';
import { MergeRequestAssigneeListItem } from './MergeRequestAssigneeListItem';
import { MergeRequestDiff } from './MergeRequestDiff';


export class MergeInfoResult {
    private 'approval_merge_request_approvers'?: Array<ApprovalMergeRequestApproversItem>;
    public author?: Author;
    private 'closed_at'?: string;
    private 'created_at'?: string;
    public description?: string;
    private 'devcloud_source_branch'?: string;
    public id?: number;
    public iid?: number;
    private 'is_source_branch_exist'?: boolean;
    private 'merge_request_assignee_list'?: Array<MergeRequestAssigneeListItem>;
    private 'merge_request_diff'?: MergeRequestDiff;
    private 'merge_status'?: string;
    private 'source_branch'?: string;
    public state?: string;
    private 'target_branch'?: string;
    public title?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withApprovalMergeRequestApprovers(approvalMergeRequestApprovers: Array<ApprovalMergeRequestApproversItem>): MergeInfoResult {
        this['approval_merge_request_approvers'] = approvalMergeRequestApprovers;
        return this;
    }
    public set approvalMergeRequestApprovers(approvalMergeRequestApprovers: Array<ApprovalMergeRequestApproversItem>  | undefined) {
        this['approval_merge_request_approvers'] = approvalMergeRequestApprovers;
    }
    public get approvalMergeRequestApprovers(): Array<ApprovalMergeRequestApproversItem> | undefined {
        return this['approval_merge_request_approvers'];
    }
    public withAuthor(author: Author): MergeInfoResult {
        this['author'] = author;
        return this;
    }
    public withClosedAt(closedAt: string): MergeInfoResult {
        this['closed_at'] = closedAt;
        return this;
    }
    public set closedAt(closedAt: string  | undefined) {
        this['closed_at'] = closedAt;
    }
    public get closedAt(): string | undefined {
        return this['closed_at'];
    }
    public withCreatedAt(createdAt: string): MergeInfoResult {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withDescription(description: string): MergeInfoResult {
        this['description'] = description;
        return this;
    }
    public withDevcloudSourceBranch(devcloudSourceBranch: string): MergeInfoResult {
        this['devcloud_source_branch'] = devcloudSourceBranch;
        return this;
    }
    public set devcloudSourceBranch(devcloudSourceBranch: string  | undefined) {
        this['devcloud_source_branch'] = devcloudSourceBranch;
    }
    public get devcloudSourceBranch(): string | undefined {
        return this['devcloud_source_branch'];
    }
    public withId(id: number): MergeInfoResult {
        this['id'] = id;
        return this;
    }
    public withIid(iid: number): MergeInfoResult {
        this['iid'] = iid;
        return this;
    }
    public withIsSourceBranchExist(isSourceBranchExist: boolean): MergeInfoResult {
        this['is_source_branch_exist'] = isSourceBranchExist;
        return this;
    }
    public set isSourceBranchExist(isSourceBranchExist: boolean  | undefined) {
        this['is_source_branch_exist'] = isSourceBranchExist;
    }
    public get isSourceBranchExist(): boolean | undefined {
        return this['is_source_branch_exist'];
    }
    public withMergeRequestAssigneeList(mergeRequestAssigneeList: Array<MergeRequestAssigneeListItem>): MergeInfoResult {
        this['merge_request_assignee_list'] = mergeRequestAssigneeList;
        return this;
    }
    public set mergeRequestAssigneeList(mergeRequestAssigneeList: Array<MergeRequestAssigneeListItem>  | undefined) {
        this['merge_request_assignee_list'] = mergeRequestAssigneeList;
    }
    public get mergeRequestAssigneeList(): Array<MergeRequestAssigneeListItem> | undefined {
        return this['merge_request_assignee_list'];
    }
    public withMergeRequestDiff(mergeRequestDiff: MergeRequestDiff): MergeInfoResult {
        this['merge_request_diff'] = mergeRequestDiff;
        return this;
    }
    public set mergeRequestDiff(mergeRequestDiff: MergeRequestDiff  | undefined) {
        this['merge_request_diff'] = mergeRequestDiff;
    }
    public get mergeRequestDiff(): MergeRequestDiff | undefined {
        return this['merge_request_diff'];
    }
    public withMergeStatus(mergeStatus: string): MergeInfoResult {
        this['merge_status'] = mergeStatus;
        return this;
    }
    public set mergeStatus(mergeStatus: string  | undefined) {
        this['merge_status'] = mergeStatus;
    }
    public get mergeStatus(): string | undefined {
        return this['merge_status'];
    }
    public withSourceBranch(sourceBranch: string): MergeInfoResult {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withState(state: string): MergeInfoResult {
        this['state'] = state;
        return this;
    }
    public withTargetBranch(targetBranch: string): MergeInfoResult {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withTitle(title: string): MergeInfoResult {
        this['title'] = title;
        return this;
    }
    public withUpdatedAt(updatedAt: string): MergeInfoResult {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}