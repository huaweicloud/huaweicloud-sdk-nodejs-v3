import { IteratorVersionInfo } from './IteratorVersionInfo';


export class CreateIteratorRequest {
    private 'branch_uri'?: string;
    public body?: IteratorVersionInfo;
    public constructor(branchUri?: string) { 
        this['branch_uri'] = branchUri;
    }
    public withBranchUri(branchUri: string): CreateIteratorRequest {
        this['branch_uri'] = branchUri;
        return this;
    }
    public set branchUri(branchUri: string  | undefined) {
        this['branch_uri'] = branchUri;
    }
    public get branchUri(): string | undefined {
        return this['branch_uri'];
    }
    public withBody(body: IteratorVersionInfo): CreateIteratorRequest {
        this['body'] = body;
        return this;
    }
}