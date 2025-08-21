

export class UpdateMergeRequestNoteDto {
    public body?: string;
    public severity?: UpdateMergeRequestNoteDtoSeverityEnum | string;
    private 'assignee_id'?: string;
    private 'review_categories'?: string;
    private 'review_modules'?: string;
    private 'proposer_id'?: string;
    public resolved?: boolean;
    public constructor() { 
    }
    public withBody(body: string): UpdateMergeRequestNoteDto {
        this['body'] = body;
        return this;
    }
    public withSeverity(severity: UpdateMergeRequestNoteDtoSeverityEnum | string): UpdateMergeRequestNoteDto {
        this['severity'] = severity;
        return this;
    }
    public withAssigneeId(assigneeId: string): UpdateMergeRequestNoteDto {
        this['assignee_id'] = assigneeId;
        return this;
    }
    public set assigneeId(assigneeId: string  | undefined) {
        this['assignee_id'] = assigneeId;
    }
    public get assigneeId(): string | undefined {
        return this['assignee_id'];
    }
    public withReviewCategories(reviewCategories: string): UpdateMergeRequestNoteDto {
        this['review_categories'] = reviewCategories;
        return this;
    }
    public set reviewCategories(reviewCategories: string  | undefined) {
        this['review_categories'] = reviewCategories;
    }
    public get reviewCategories(): string | undefined {
        return this['review_categories'];
    }
    public withReviewModules(reviewModules: string): UpdateMergeRequestNoteDto {
        this['review_modules'] = reviewModules;
        return this;
    }
    public set reviewModules(reviewModules: string  | undefined) {
        this['review_modules'] = reviewModules;
    }
    public get reviewModules(): string | undefined {
        return this['review_modules'];
    }
    public withProposerId(proposerId: string): UpdateMergeRequestNoteDto {
        this['proposer_id'] = proposerId;
        return this;
    }
    public set proposerId(proposerId: string  | undefined) {
        this['proposer_id'] = proposerId;
    }
    public get proposerId(): string | undefined {
        return this['proposer_id'];
    }
    public withResolved(resolved: boolean): UpdateMergeRequestNoteDto {
        this['resolved'] = resolved;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateMergeRequestNoteDtoSeverityEnum {
    SUGGESTION = 'suggestion',
    MINOR = 'minor',
    MAJOR = 'major',
    FATAL = 'fatal'
}
