
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRepositoryStatisticsSummaryResponse extends SdkResponse {
    private 'branches_count'?: number;
    private 'commits_count'?: number;
    private 'members_count'?: number;
    private 'tags_count'?: number;
    private 'merge_request_count'?: number;
    private 'note_count'?: number;
    public constructor() { 
        super();
    }
    public withBranchesCount(branchesCount: number): ShowRepositoryStatisticsSummaryResponse {
        this['branches_count'] = branchesCount;
        return this;
    }
    public set branchesCount(branchesCount: number  | undefined) {
        this['branches_count'] = branchesCount;
    }
    public get branchesCount(): number | undefined {
        return this['branches_count'];
    }
    public withCommitsCount(commitsCount: number): ShowRepositoryStatisticsSummaryResponse {
        this['commits_count'] = commitsCount;
        return this;
    }
    public set commitsCount(commitsCount: number  | undefined) {
        this['commits_count'] = commitsCount;
    }
    public get commitsCount(): number | undefined {
        return this['commits_count'];
    }
    public withMembersCount(membersCount: number): ShowRepositoryStatisticsSummaryResponse {
        this['members_count'] = membersCount;
        return this;
    }
    public set membersCount(membersCount: number  | undefined) {
        this['members_count'] = membersCount;
    }
    public get membersCount(): number | undefined {
        return this['members_count'];
    }
    public withTagsCount(tagsCount: number): ShowRepositoryStatisticsSummaryResponse {
        this['tags_count'] = tagsCount;
        return this;
    }
    public set tagsCount(tagsCount: number  | undefined) {
        this['tags_count'] = tagsCount;
    }
    public get tagsCount(): number | undefined {
        return this['tags_count'];
    }
    public withMergeRequestCount(mergeRequestCount: number): ShowRepositoryStatisticsSummaryResponse {
        this['merge_request_count'] = mergeRequestCount;
        return this;
    }
    public set mergeRequestCount(mergeRequestCount: number  | undefined) {
        this['merge_request_count'] = mergeRequestCount;
    }
    public get mergeRequestCount(): number | undefined {
        return this['merge_request_count'];
    }
    public withNoteCount(noteCount: number): ShowRepositoryStatisticsSummaryResponse {
        this['note_count'] = noteCount;
        return this;
    }
    public set noteCount(noteCount: number  | undefined) {
        this['note_count'] = noteCount;
    }
    public get noteCount(): number | undefined {
        return this['note_count'];
    }
}