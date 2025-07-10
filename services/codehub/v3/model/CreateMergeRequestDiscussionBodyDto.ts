import { PositionDto } from './PositionDto';


export class CreateMergeRequestDiscussionBodyDto {
    public body?: string;
    public severity?: string;
    private 'assignee_id'?: string;
    private 'review_categories'?: string;
    private 'review_modules'?: string;
    private 'proposer_id'?: string;
    public position?: PositionDto;
    public constructor(body?: string) { 
        this['body'] = body;
    }
    public withBody(body: string): CreateMergeRequestDiscussionBodyDto {
        this['body'] = body;
        return this;
    }
    public withSeverity(severity: string): CreateMergeRequestDiscussionBodyDto {
        this['severity'] = severity;
        return this;
    }
    public withAssigneeId(assigneeId: string): CreateMergeRequestDiscussionBodyDto {
        this['assignee_id'] = assigneeId;
        return this;
    }
    public set assigneeId(assigneeId: string  | undefined) {
        this['assignee_id'] = assigneeId;
    }
    public get assigneeId(): string | undefined {
        return this['assignee_id'];
    }
    public withReviewCategories(reviewCategories: string): CreateMergeRequestDiscussionBodyDto {
        this['review_categories'] = reviewCategories;
        return this;
    }
    public set reviewCategories(reviewCategories: string  | undefined) {
        this['review_categories'] = reviewCategories;
    }
    public get reviewCategories(): string | undefined {
        return this['review_categories'];
    }
    public withReviewModules(reviewModules: string): CreateMergeRequestDiscussionBodyDto {
        this['review_modules'] = reviewModules;
        return this;
    }
    public set reviewModules(reviewModules: string  | undefined) {
        this['review_modules'] = reviewModules;
    }
    public get reviewModules(): string | undefined {
        return this['review_modules'];
    }
    public withProposerId(proposerId: string): CreateMergeRequestDiscussionBodyDto {
        this['proposer_id'] = proposerId;
        return this;
    }
    public set proposerId(proposerId: string  | undefined) {
        this['proposer_id'] = proposerId;
    }
    public get proposerId(): string | undefined {
        return this['proposer_id'];
    }
    public withPosition(position: PositionDto): CreateMergeRequestDiscussionBodyDto {
        this['position'] = position;
        return this;
    }
}