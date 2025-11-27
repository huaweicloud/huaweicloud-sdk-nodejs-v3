import { UpdateRepoRequestBody } from './UpdateRepoRequestBody';


export class UpdateRepoRequest {
    public repoid?: string;
    public body?: UpdateRepoRequestBody;
    public constructor(repoid?: string) { 
        this['repoid'] = repoid;
    }
    public withRepoid(repoid: string): UpdateRepoRequest {
        this['repoid'] = repoid;
        return this;
    }
    public withBody(body: UpdateRepoRequestBody): UpdateRepoRequest {
        this['body'] = body;
        return this;
    }
}