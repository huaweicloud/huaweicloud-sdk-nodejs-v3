import { MergeRequestBaseEvaluationDto } from './MergeRequestBaseEvaluationDto';
import { MergeRequestCustomAverageEvaluationDto } from './MergeRequestCustomAverageEvaluationDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAverageEvaluationResponse extends SdkResponse {
    private 'merge_request_id'?: number;
    private 'average_evaluation_level'?: number;
    public evaluations?: Array<MergeRequestBaseEvaluationDto>;
    private 'custom_evaluations'?: Array<MergeRequestCustomAverageEvaluationDto>;
    public constructor() { 
        super();
    }
    public withMergeRequestId(mergeRequestId: number): ShowAverageEvaluationResponse {
        this['merge_request_id'] = mergeRequestId;
        return this;
    }
    public set mergeRequestId(mergeRequestId: number  | undefined) {
        this['merge_request_id'] = mergeRequestId;
    }
    public get mergeRequestId(): number | undefined {
        return this['merge_request_id'];
    }
    public withAverageEvaluationLevel(averageEvaluationLevel: number): ShowAverageEvaluationResponse {
        this['average_evaluation_level'] = averageEvaluationLevel;
        return this;
    }
    public set averageEvaluationLevel(averageEvaluationLevel: number  | undefined) {
        this['average_evaluation_level'] = averageEvaluationLevel;
    }
    public get averageEvaluationLevel(): number | undefined {
        return this['average_evaluation_level'];
    }
    public withEvaluations(evaluations: Array<MergeRequestBaseEvaluationDto>): ShowAverageEvaluationResponse {
        this['evaluations'] = evaluations;
        return this;
    }
    public withCustomEvaluations(customEvaluations: Array<MergeRequestCustomAverageEvaluationDto>): ShowAverageEvaluationResponse {
        this['custom_evaluations'] = customEvaluations;
        return this;
    }
    public set customEvaluations(customEvaluations: Array<MergeRequestCustomAverageEvaluationDto>  | undefined) {
        this['custom_evaluations'] = customEvaluations;
    }
    public get customEvaluations(): Array<MergeRequestCustomAverageEvaluationDto> | undefined {
        return this['custom_evaluations'];
    }
}