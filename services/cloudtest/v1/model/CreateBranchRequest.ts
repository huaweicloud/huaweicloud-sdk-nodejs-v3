import { BranchVersionInfo } from './BranchVersionInfo';


export class CreateBranchRequest {
    public body?: BranchVersionInfo;
    public constructor() { 
    }
    public withBody(body: BranchVersionInfo): CreateBranchRequest {
        this['body'] = body;
        return this;
    }
}