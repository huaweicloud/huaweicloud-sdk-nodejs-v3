import { ApprovalActionTypeDto } from './ApprovalActionTypeDto';


export class UpdateMergeRequestApprovalStateRequest {
    private 'repository_id'?: string;
    private 'merge_request_iid'?: number;
    public body?: ApprovalActionTypeDto;
    public constructor(repositoryId?: string, mergeRequestIid?: number) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
    }
    public withRepositoryId(repositoryId: string): UpdateMergeRequestApprovalStateRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: string  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): string | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): UpdateMergeRequestApprovalStateRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withBody(body: ApprovalActionTypeDto): UpdateMergeRequestApprovalStateRequest {
        this['body'] = body;
        return this;
    }
}