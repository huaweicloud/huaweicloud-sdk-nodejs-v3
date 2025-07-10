

export class GroupSumDto {
    private 'open_merge_requests_count'?: number;
    public constructor() { 
    }
    public withOpenMergeRequestsCount(openMergeRequestsCount: number): GroupSumDto {
        this['open_merge_requests_count'] = openMergeRequestsCount;
        return this;
    }
    public set openMergeRequestsCount(openMergeRequestsCount: number  | undefined) {
        this['open_merge_requests_count'] = openMergeRequestsCount;
    }
    public get openMergeRequestsCount(): number | undefined {
        return this['open_merge_requests_count'];
    }
}