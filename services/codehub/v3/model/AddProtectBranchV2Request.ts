import { AddProtectRequest } from './AddProtectRequest';


export class AddProtectBranchV2Request {
    private 'repository_id'?: number;
    private 'branch_name'?: string;
    public body?: AddProtectRequest;
    public constructor(repositoryId?: number, branchName?: string) { 
        this['repository_id'] = repositoryId;
        this['branch_name'] = branchName;
    }
    public withRepositoryId(repositoryId: number): AddProtectBranchV2Request {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBranchName(branchName: string): AddProtectBranchV2Request {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withBody(body: AddProtectRequest): AddProtectBranchV2Request {
        this['body'] = body;
        return this;
    }
}