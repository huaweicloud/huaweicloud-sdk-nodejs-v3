import { Author } from './Author';


export class MergeRequestsItem {
    public author?: Author;
    private 'closed_at'?: string;
    private 'created_at'?: string;
    public description?: string;
    private 'devcloud_source_branch'?: string;
    public id?: number;
    public iid?: number;
    private 'merge_request_assignee_list'?: Array<Author>;
    private 'merge_status'?: string;
    private 'source_branch'?: string;
    public state?: string;
    private 'target_branch'?: string;
    public title?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withAuthor(author: Author): MergeRequestsItem {
        this['author'] = author;
        return this;
    }
    public withClosedAt(closedAt: string): MergeRequestsItem {
        this['closed_at'] = closedAt;
        return this;
    }
    public set closedAt(closedAt: string  | undefined) {
        this['closed_at'] = closedAt;
    }
    public get closedAt(): string | undefined {
        return this['closed_at'];
    }
    public withCreatedAt(createdAt: string): MergeRequestsItem {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withDescription(description: string): MergeRequestsItem {
        this['description'] = description;
        return this;
    }
    public withDevcloudSourceBranch(devcloudSourceBranch: string): MergeRequestsItem {
        this['devcloud_source_branch'] = devcloudSourceBranch;
        return this;
    }
    public set devcloudSourceBranch(devcloudSourceBranch: string  | undefined) {
        this['devcloud_source_branch'] = devcloudSourceBranch;
    }
    public get devcloudSourceBranch(): string | undefined {
        return this['devcloud_source_branch'];
    }
    public withId(id: number): MergeRequestsItem {
        this['id'] = id;
        return this;
    }
    public withIid(iid: number): MergeRequestsItem {
        this['iid'] = iid;
        return this;
    }
    public withMergeRequestAssigneeList(mergeRequestAssigneeList: Array<Author>): MergeRequestsItem {
        this['merge_request_assignee_list'] = mergeRequestAssigneeList;
        return this;
    }
    public set mergeRequestAssigneeList(mergeRequestAssigneeList: Array<Author>  | undefined) {
        this['merge_request_assignee_list'] = mergeRequestAssigneeList;
    }
    public get mergeRequestAssigneeList(): Array<Author> | undefined {
        return this['merge_request_assignee_list'];
    }
    public withMergeStatus(mergeStatus: string): MergeRequestsItem {
        this['merge_status'] = mergeStatus;
        return this;
    }
    public set mergeStatus(mergeStatus: string  | undefined) {
        this['merge_status'] = mergeStatus;
    }
    public get mergeStatus(): string | undefined {
        return this['merge_status'];
    }
    public withSourceBranch(sourceBranch: string): MergeRequestsItem {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withState(state: string): MergeRequestsItem {
        this['state'] = state;
        return this;
    }
    public withTargetBranch(targetBranch: string): MergeRequestsItem {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withTitle(title: string): MergeRequestsItem {
        this['title'] = title;
        return this;
    }
    public withUpdatedAt(updatedAt: string): MergeRequestsItem {
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