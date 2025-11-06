

export class PutMergeRequestParamsDto {
    public title?: string;
    private 'state_event'?: PutMergeRequestParamsDtoStateEventEnum | string;
    private 'assignee_ids'?: string;
    private 'reviewer_ids'?: string;
    public description?: string;
    private 'milestone_id'?: number;
    public labels?: object;
    private 'force_remove_source_branch'?: boolean;
    public squash?: boolean;
    private 'squash_commit_message'?: string;
    private 'work_item_ids'?: Array<string>;
    public constructor() { 
    }
    public withTitle(title: string): PutMergeRequestParamsDto {
        this['title'] = title;
        return this;
    }
    public withStateEvent(stateEvent: PutMergeRequestParamsDtoStateEventEnum | string): PutMergeRequestParamsDto {
        this['state_event'] = stateEvent;
        return this;
    }
    public set stateEvent(stateEvent: PutMergeRequestParamsDtoStateEventEnum | string  | undefined) {
        this['state_event'] = stateEvent;
    }
    public get stateEvent(): PutMergeRequestParamsDtoStateEventEnum | string | undefined {
        return this['state_event'];
    }
    public withAssigneeIds(assigneeIds: string): PutMergeRequestParamsDto {
        this['assignee_ids'] = assigneeIds;
        return this;
    }
    public set assigneeIds(assigneeIds: string  | undefined) {
        this['assignee_ids'] = assigneeIds;
    }
    public get assigneeIds(): string | undefined {
        return this['assignee_ids'];
    }
    public withReviewerIds(reviewerIds: string): PutMergeRequestParamsDto {
        this['reviewer_ids'] = reviewerIds;
        return this;
    }
    public set reviewerIds(reviewerIds: string  | undefined) {
        this['reviewer_ids'] = reviewerIds;
    }
    public get reviewerIds(): string | undefined {
        return this['reviewer_ids'];
    }
    public withDescription(description: string): PutMergeRequestParamsDto {
        this['description'] = description;
        return this;
    }
    public withMilestoneId(milestoneId: number): PutMergeRequestParamsDto {
        this['milestone_id'] = milestoneId;
        return this;
    }
    public set milestoneId(milestoneId: number  | undefined) {
        this['milestone_id'] = milestoneId;
    }
    public get milestoneId(): number | undefined {
        return this['milestone_id'];
    }
    public withLabels(labels: object): PutMergeRequestParamsDto {
        this['labels'] = labels;
        return this;
    }
    public withForceRemoveSourceBranch(forceRemoveSourceBranch: boolean): PutMergeRequestParamsDto {
        this['force_remove_source_branch'] = forceRemoveSourceBranch;
        return this;
    }
    public set forceRemoveSourceBranch(forceRemoveSourceBranch: boolean  | undefined) {
        this['force_remove_source_branch'] = forceRemoveSourceBranch;
    }
    public get forceRemoveSourceBranch(): boolean | undefined {
        return this['force_remove_source_branch'];
    }
    public withSquash(squash: boolean): PutMergeRequestParamsDto {
        this['squash'] = squash;
        return this;
    }
    public withSquashCommitMessage(squashCommitMessage: string): PutMergeRequestParamsDto {
        this['squash_commit_message'] = squashCommitMessage;
        return this;
    }
    public set squashCommitMessage(squashCommitMessage: string  | undefined) {
        this['squash_commit_message'] = squashCommitMessage;
    }
    public get squashCommitMessage(): string | undefined {
        return this['squash_commit_message'];
    }
    public withWorkItemIds(workItemIds: Array<string>): PutMergeRequestParamsDto {
        this['work_item_ids'] = workItemIds;
        return this;
    }
    public set workItemIds(workItemIds: Array<string>  | undefined) {
        this['work_item_ids'] = workItemIds;
    }
    public get workItemIds(): Array<string> | undefined {
        return this['work_item_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PutMergeRequestParamsDtoStateEventEnum {
    REOPEN = 'reopen',
    CLOSE = 'close'
}
