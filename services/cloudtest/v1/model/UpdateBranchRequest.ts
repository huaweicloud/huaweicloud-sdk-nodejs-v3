import { BranchVersionInfo } from './BranchVersionInfo';


export class UpdateBranchRequest {
    private 'branch_uri'?: string;
    public body?: BranchVersionInfo;
    public constructor(branchUri?: string) { 
        this['branch_uri'] = branchUri;
    }
    public withBranchUri(branchUri: string): UpdateBranchRequest {
        this['branch_uri'] = branchUri;
        return this;
    }
    public set branchUri(branchUri: string  | undefined) {
        this['branch_uri'] = branchUri;
    }
    public get branchUri(): string | undefined {
        return this['branch_uri'];
    }
    public withBody(body: BranchVersionInfo): UpdateBranchRequest {
        this['body'] = body;
        return this;
    }
}