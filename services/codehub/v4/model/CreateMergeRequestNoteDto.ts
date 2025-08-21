import { PositionDto } from './PositionDto';


export class CreateMergeRequestNoteDto {
    public body?: string;
    public severity?: CreateMergeRequestNoteDtoSeverityEnum | string;
    private 'assignee_id'?: string;
    private 'review_categories'?: string;
    private 'review_modules'?: string;
    private 'proposer_id'?: string;
    private 'line_types'?: CreateMergeRequestNoteDtoLineTypesEnum | string;
    public position?: PositionDto;
    public constructor() { 
    }
    public withBody(body: string): CreateMergeRequestNoteDto {
        this['body'] = body;
        return this;
    }
    public withSeverity(severity: CreateMergeRequestNoteDtoSeverityEnum | string): CreateMergeRequestNoteDto {
        this['severity'] = severity;
        return this;
    }
    public withAssigneeId(assigneeId: string): CreateMergeRequestNoteDto {
        this['assignee_id'] = assigneeId;
        return this;
    }
    public set assigneeId(assigneeId: string  | undefined) {
        this['assignee_id'] = assigneeId;
    }
    public get assigneeId(): string | undefined {
        return this['assignee_id'];
    }
    public withReviewCategories(reviewCategories: string): CreateMergeRequestNoteDto {
        this['review_categories'] = reviewCategories;
        return this;
    }
    public set reviewCategories(reviewCategories: string  | undefined) {
        this['review_categories'] = reviewCategories;
    }
    public get reviewCategories(): string | undefined {
        return this['review_categories'];
    }
    public withReviewModules(reviewModules: string): CreateMergeRequestNoteDto {
        this['review_modules'] = reviewModules;
        return this;
    }
    public set reviewModules(reviewModules: string  | undefined) {
        this['review_modules'] = reviewModules;
    }
    public get reviewModules(): string | undefined {
        return this['review_modules'];
    }
    public withProposerId(proposerId: string): CreateMergeRequestNoteDto {
        this['proposer_id'] = proposerId;
        return this;
    }
    public set proposerId(proposerId: string  | undefined) {
        this['proposer_id'] = proposerId;
    }
    public get proposerId(): string | undefined {
        return this['proposer_id'];
    }
    public withLineTypes(lineTypes: CreateMergeRequestNoteDtoLineTypesEnum | string): CreateMergeRequestNoteDto {
        this['line_types'] = lineTypes;
        return this;
    }
    public set lineTypes(lineTypes: CreateMergeRequestNoteDtoLineTypesEnum | string  | undefined) {
        this['line_types'] = lineTypes;
    }
    public get lineTypes(): CreateMergeRequestNoteDtoLineTypesEnum | string | undefined {
        return this['line_types'];
    }
    public withPosition(position: PositionDto): CreateMergeRequestNoteDto {
        this['position'] = position;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateMergeRequestNoteDtoSeverityEnum {
    SUGGESTION = 'suggestion',
    MINOR = 'minor',
    MAJOR = 'major',
    FATAL = 'fatal'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateMergeRequestNoteDtoLineTypesEnum {
    NEW = 'new',
    OLD = 'old'
}
