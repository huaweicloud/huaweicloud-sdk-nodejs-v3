
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateBranchNameResponse extends SdkResponse {
    private 'old_branch_name'?: string;
    private 'old_branch_commit_id'?: string;
    private 'new_branch_name'?: string;
    private 'new_branch_commit_id'?: string;
    public constructor() { 
        super();
    }
    public withOldBranchName(oldBranchName: string): UpdateBranchNameResponse {
        this['old_branch_name'] = oldBranchName;
        return this;
    }
    public set oldBranchName(oldBranchName: string  | undefined) {
        this['old_branch_name'] = oldBranchName;
    }
    public get oldBranchName(): string | undefined {
        return this['old_branch_name'];
    }
    public withOldBranchCommitId(oldBranchCommitId: string): UpdateBranchNameResponse {
        this['old_branch_commit_id'] = oldBranchCommitId;
        return this;
    }
    public set oldBranchCommitId(oldBranchCommitId: string  | undefined) {
        this['old_branch_commit_id'] = oldBranchCommitId;
    }
    public get oldBranchCommitId(): string | undefined {
        return this['old_branch_commit_id'];
    }
    public withNewBranchName(newBranchName: string): UpdateBranchNameResponse {
        this['new_branch_name'] = newBranchName;
        return this;
    }
    public set newBranchName(newBranchName: string  | undefined) {
        this['new_branch_name'] = newBranchName;
    }
    public get newBranchName(): string | undefined {
        return this['new_branch_name'];
    }
    public withNewBranchCommitId(newBranchCommitId: string): UpdateBranchNameResponse {
        this['new_branch_commit_id'] = newBranchCommitId;
        return this;
    }
    public set newBranchCommitId(newBranchCommitId: string  | undefined) {
        this['new_branch_commit_id'] = newBranchCommitId;
    }
    public get newBranchCommitId(): string | undefined {
        return this['new_branch_commit_id'];
    }
}