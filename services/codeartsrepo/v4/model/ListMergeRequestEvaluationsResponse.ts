import { CustomEvaluationDto } from './CustomEvaluationDto';
import { MergeRequestBaseEvaluationDto } from './MergeRequestBaseEvaluationDto';
import { UserBasicDto } from './UserBasicDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestEvaluationsResponse extends SdkResponse {
    public id?: number;
    private 'merge_request_id'?: number;
    public level?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public content?: string;
    public user?: UserBasicDto;
    private 'custom_evaluations'?: Array<CustomEvaluationDto>;
    public constructor() { 
        super();
    }
    public withId(id: number): ListMergeRequestEvaluationsResponse {
        this['id'] = id;
        return this;
    }
    public withMergeRequestId(mergeRequestId: number): ListMergeRequestEvaluationsResponse {
        this['merge_request_id'] = mergeRequestId;
        return this;
    }
    public set mergeRequestId(mergeRequestId: number  | undefined) {
        this['merge_request_id'] = mergeRequestId;
    }
    public get mergeRequestId(): number | undefined {
        return this['merge_request_id'];
    }
    public withLevel(level: number): ListMergeRequestEvaluationsResponse {
        this['level'] = level;
        return this;
    }
    public withCreatedAt(createdAt: string): ListMergeRequestEvaluationsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ListMergeRequestEvaluationsResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withContent(content: string): ListMergeRequestEvaluationsResponse {
        this['content'] = content;
        return this;
    }
    public withUser(user: UserBasicDto): ListMergeRequestEvaluationsResponse {
        this['user'] = user;
        return this;
    }
    public withCustomEvaluations(customEvaluations: Array<CustomEvaluationDto>): ListMergeRequestEvaluationsResponse {
        this['custom_evaluations'] = customEvaluations;
        return this;
    }
    public set customEvaluations(customEvaluations: Array<CustomEvaluationDto>  | undefined) {
        this['custom_evaluations'] = customEvaluations;
    }
    public get customEvaluations(): Array<CustomEvaluationDto> | undefined {
        return this['custom_evaluations'];
    }
}