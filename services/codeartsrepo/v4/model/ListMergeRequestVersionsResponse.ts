
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMergeRequestVersionsResponse extends SdkResponse {
    public id?: number;
    private 'head_commit_sha'?: string;
    private 'base_commit_sha'?: string;
    private 'start_commit_sha'?: string;
    private 'created_at'?: string;
    private 'merge_request_id'?: number;
    public state?: string;
    private 'real_size'?: string;
    public constructor() { 
        super();
    }
    public withId(id: number): ListMergeRequestVersionsResponse {
        this['id'] = id;
        return this;
    }
    public withHeadCommitSha(headCommitSha: string): ListMergeRequestVersionsResponse {
        this['head_commit_sha'] = headCommitSha;
        return this;
    }
    public set headCommitSha(headCommitSha: string  | undefined) {
        this['head_commit_sha'] = headCommitSha;
    }
    public get headCommitSha(): string | undefined {
        return this['head_commit_sha'];
    }
    public withBaseCommitSha(baseCommitSha: string): ListMergeRequestVersionsResponse {
        this['base_commit_sha'] = baseCommitSha;
        return this;
    }
    public set baseCommitSha(baseCommitSha: string  | undefined) {
        this['base_commit_sha'] = baseCommitSha;
    }
    public get baseCommitSha(): string | undefined {
        return this['base_commit_sha'];
    }
    public withStartCommitSha(startCommitSha: string): ListMergeRequestVersionsResponse {
        this['start_commit_sha'] = startCommitSha;
        return this;
    }
    public set startCommitSha(startCommitSha: string  | undefined) {
        this['start_commit_sha'] = startCommitSha;
    }
    public get startCommitSha(): string | undefined {
        return this['start_commit_sha'];
    }
    public withCreatedAt(createdAt: string): ListMergeRequestVersionsResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withMergeRequestId(mergeRequestId: number): ListMergeRequestVersionsResponse {
        this['merge_request_id'] = mergeRequestId;
        return this;
    }
    public set mergeRequestId(mergeRequestId: number  | undefined) {
        this['merge_request_id'] = mergeRequestId;
    }
    public get mergeRequestId(): number | undefined {
        return this['merge_request_id'];
    }
    public withState(state: string): ListMergeRequestVersionsResponse {
        this['state'] = state;
        return this;
    }
    public withRealSize(realSize: string): ListMergeRequestVersionsResponse {
        this['real_size'] = realSize;
        return this;
    }
    public set realSize(realSize: string  | undefined) {
        this['real_size'] = realSize;
    }
    public get realSize(): string | undefined {
        return this['real_size'];
    }
}