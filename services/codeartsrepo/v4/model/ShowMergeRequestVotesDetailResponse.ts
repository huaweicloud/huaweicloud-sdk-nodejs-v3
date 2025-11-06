import { MergeRequestVotesDto } from './MergeRequestVotesDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowMergeRequestVotesDetailResponse extends SdkResponse {
    public scores?: number;
    private 'merge_request_id'?: number;
    private 'merge_request_creator'?: string;
    public votes?: Array<MergeRequestVotesDto>;
    public constructor() { 
        super();
    }
    public withScores(scores: number): ShowMergeRequestVotesDetailResponse {
        this['scores'] = scores;
        return this;
    }
    public withMergeRequestId(mergeRequestId: number): ShowMergeRequestVotesDetailResponse {
        this['merge_request_id'] = mergeRequestId;
        return this;
    }
    public set mergeRequestId(mergeRequestId: number  | undefined) {
        this['merge_request_id'] = mergeRequestId;
    }
    public get mergeRequestId(): number | undefined {
        return this['merge_request_id'];
    }
    public withMergeRequestCreator(mergeRequestCreator: string): ShowMergeRequestVotesDetailResponse {
        this['merge_request_creator'] = mergeRequestCreator;
        return this;
    }
    public set mergeRequestCreator(mergeRequestCreator: string  | undefined) {
        this['merge_request_creator'] = mergeRequestCreator;
    }
    public get mergeRequestCreator(): string | undefined {
        return this['merge_request_creator'];
    }
    public withVotes(votes: Array<MergeRequestVotesDto>): ShowMergeRequestVotesDetailResponse {
        this['votes'] = votes;
        return this;
    }
}