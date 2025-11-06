import { UserSafeDto } from './UserSafeDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateMergeRequestVoteResponse extends SdkResponse {
    public id?: number;
    private 'merge_request_id'?: number;
    public score?: number;
    public author?: UserSafeDto;
    public constructor() { 
        super();
    }
    public withId(id: number): UpdateMergeRequestVoteResponse {
        this['id'] = id;
        return this;
    }
    public withMergeRequestId(mergeRequestId: number): UpdateMergeRequestVoteResponse {
        this['merge_request_id'] = mergeRequestId;
        return this;
    }
    public set mergeRequestId(mergeRequestId: number  | undefined) {
        this['merge_request_id'] = mergeRequestId;
    }
    public get mergeRequestId(): number | undefined {
        return this['merge_request_id'];
    }
    public withScore(score: number): UpdateMergeRequestVoteResponse {
        this['score'] = score;
        return this;
    }
    public withAuthor(author: UserSafeDto): UpdateMergeRequestVoteResponse {
        this['author'] = author;
        return this;
    }
}