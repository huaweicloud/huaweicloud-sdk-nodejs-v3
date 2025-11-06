import { ApprovalApproverInfoDto } from './ApprovalApproverInfoDto';


export class UpdateMergeRequestApproversRequest {
    private 'repository_id'?: number;
    private 'merge_request_iid'?: number;
    public body?: ApprovalApproverInfoDto;
    public constructor(repositoryId?: number, mergeRequestIid?: number) { 
        this['repository_id'] = repositoryId;
        this['merge_request_iid'] = mergeRequestIid;
    }
    public withRepositoryId(repositoryId: number): UpdateMergeRequestApproversRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withMergeRequestIid(mergeRequestIid: number): UpdateMergeRequestApproversRequest {
        this['merge_request_iid'] = mergeRequestIid;
        return this;
    }
    public set mergeRequestIid(mergeRequestIid: number  | undefined) {
        this['merge_request_iid'] = mergeRequestIid;
    }
    public get mergeRequestIid(): number | undefined {
        return this['merge_request_iid'];
    }
    public withBody(body: ApprovalApproverInfoDto): UpdateMergeRequestApproversRequest {
        this['body'] = body;
        return this;
    }
}