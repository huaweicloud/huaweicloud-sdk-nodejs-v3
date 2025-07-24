import { BranchVersionInfo } from './BranchVersionInfo';


export class CreateProjectBranchRequest {
    public body?: BranchVersionInfo;
    public constructor() { 
    }
    public withBody(body: BranchVersionInfo): CreateProjectBranchRequest {
        this['body'] = body;
        return this;
    }
}