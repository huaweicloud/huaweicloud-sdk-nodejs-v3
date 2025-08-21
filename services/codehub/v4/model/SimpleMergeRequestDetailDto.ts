import { UserBasicDto } from './UserBasicDto';


export class SimpleMergeRequestDetailDto {
    public id?: number;
    public iid?: number;
    public title?: string;
    public description?: string;
    private 'source_branch'?: string;
    private 'target_branch'?: string;
    public state?: string;
    private 'created_at'?: string;
    private 'review_mode'?: string;
    public author?: UserBasicDto;
    private 'merge_request_type'?: string;
    private 'moderation_result'?: boolean;
    private 'moderation_time'?: number;
    private 'moderation_status'?: number;
    private 'is_use_temp_branch'?: boolean;
    public constructor() { 
    }
    public withId(id: number): SimpleMergeRequestDetailDto {
        this['id'] = id;
        return this;
    }
    public withIid(iid: number): SimpleMergeRequestDetailDto {
        this['iid'] = iid;
        return this;
    }
    public withTitle(title: string): SimpleMergeRequestDetailDto {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): SimpleMergeRequestDetailDto {
        this['description'] = description;
        return this;
    }
    public withSourceBranch(sourceBranch: string): SimpleMergeRequestDetailDto {
        this['source_branch'] = sourceBranch;
        return this;
    }
    public set sourceBranch(sourceBranch: string  | undefined) {
        this['source_branch'] = sourceBranch;
    }
    public get sourceBranch(): string | undefined {
        return this['source_branch'];
    }
    public withTargetBranch(targetBranch: string): SimpleMergeRequestDetailDto {
        this['target_branch'] = targetBranch;
        return this;
    }
    public set targetBranch(targetBranch: string  | undefined) {
        this['target_branch'] = targetBranch;
    }
    public get targetBranch(): string | undefined {
        return this['target_branch'];
    }
    public withState(state: string): SimpleMergeRequestDetailDto {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: string): SimpleMergeRequestDetailDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withReviewMode(reviewMode: string): SimpleMergeRequestDetailDto {
        this['review_mode'] = reviewMode;
        return this;
    }
    public set reviewMode(reviewMode: string  | undefined) {
        this['review_mode'] = reviewMode;
    }
    public get reviewMode(): string | undefined {
        return this['review_mode'];
    }
    public withAuthor(author: UserBasicDto): SimpleMergeRequestDetailDto {
        this['author'] = author;
        return this;
    }
    public withMergeRequestType(mergeRequestType: string): SimpleMergeRequestDetailDto {
        this['merge_request_type'] = mergeRequestType;
        return this;
    }
    public set mergeRequestType(mergeRequestType: string  | undefined) {
        this['merge_request_type'] = mergeRequestType;
    }
    public get mergeRequestType(): string | undefined {
        return this['merge_request_type'];
    }
    public withModerationResult(moderationResult: boolean): SimpleMergeRequestDetailDto {
        this['moderation_result'] = moderationResult;
        return this;
    }
    public set moderationResult(moderationResult: boolean  | undefined) {
        this['moderation_result'] = moderationResult;
    }
    public get moderationResult(): boolean | undefined {
        return this['moderation_result'];
    }
    public withModerationTime(moderationTime: number): SimpleMergeRequestDetailDto {
        this['moderation_time'] = moderationTime;
        return this;
    }
    public set moderationTime(moderationTime: number  | undefined) {
        this['moderation_time'] = moderationTime;
    }
    public get moderationTime(): number | undefined {
        return this['moderation_time'];
    }
    public withModerationStatus(moderationStatus: number): SimpleMergeRequestDetailDto {
        this['moderation_status'] = moderationStatus;
        return this;
    }
    public set moderationStatus(moderationStatus: number  | undefined) {
        this['moderation_status'] = moderationStatus;
    }
    public get moderationStatus(): number | undefined {
        return this['moderation_status'];
    }
    public withIsUseTempBranch(isUseTempBranch: boolean): SimpleMergeRequestDetailDto {
        this['is_use_temp_branch'] = isUseTempBranch;
        return this;
    }
    public set isUseTempBranch(isUseTempBranch: boolean  | undefined) {
        this['is_use_temp_branch'] = isUseTempBranch;
    }
    public get isUseTempBranch(): boolean | undefined {
        return this['is_use_temp_branch'];
    }
}