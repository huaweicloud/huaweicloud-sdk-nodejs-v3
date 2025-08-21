import { UserBasicDto } from './UserBasicDto';


export class MergeRequestBaseEvaluationDto {
    public id?: number;
    private 'merge_request_id'?: number;
    public level?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public content?: string;
    public user?: UserBasicDto;
    public constructor() { 
    }
    public withId(id: number): MergeRequestBaseEvaluationDto {
        this['id'] = id;
        return this;
    }
    public withMergeRequestId(mergeRequestId: number): MergeRequestBaseEvaluationDto {
        this['merge_request_id'] = mergeRequestId;
        return this;
    }
    public set mergeRequestId(mergeRequestId: number  | undefined) {
        this['merge_request_id'] = mergeRequestId;
    }
    public get mergeRequestId(): number | undefined {
        return this['merge_request_id'];
    }
    public withLevel(level: number): MergeRequestBaseEvaluationDto {
        this['level'] = level;
        return this;
    }
    public withCreatedAt(createdAt: string): MergeRequestBaseEvaluationDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): MergeRequestBaseEvaluationDto {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withContent(content: string): MergeRequestBaseEvaluationDto {
        this['content'] = content;
        return this;
    }
    public withUser(user: UserBasicDto): MergeRequestBaseEvaluationDto {
        this['user'] = user;
        return this;
    }
}