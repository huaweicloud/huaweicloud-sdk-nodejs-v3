import { IteratorVersionInfo } from './IteratorVersionInfo';


export class CreateTestIteratorRequest {
    private 'branch_uri'?: string;
    public body?: IteratorVersionInfo;
    public constructor(branchUri?: string) { 
        this['branch_uri'] = branchUri;
    }
    public withBranchUri(branchUri: string): CreateTestIteratorRequest {
        this['branch_uri'] = branchUri;
        return this;
    }
    public set branchUri(branchUri: string  | undefined) {
        this['branch_uri'] = branchUri;
    }
    public get branchUri(): string | undefined {
        return this['branch_uri'];
    }
    public withBody(body: IteratorVersionInfo): CreateTestIteratorRequest {
        this['body'] = body;
        return this;
    }
}