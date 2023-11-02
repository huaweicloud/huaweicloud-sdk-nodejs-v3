import { SearchParametersExt } from './SearchParametersExt';


export class ShowUnrelatedTableRequest {
    public workspace?: string;
    public body?: SearchParametersExt;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowUnrelatedTableRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: SearchParametersExt): ShowUnrelatedTableRequest {
        this['body'] = body;
        return this;
    }
}