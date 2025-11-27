

export class DeleteRepoRequest {
    public repoid?: string;
    public constructor(repoid?: string) { 
        this['repoid'] = repoid;
    }
    public withRepoid(repoid: string): DeleteRepoRequest {
        this['repoid'] = repoid;
        return this;
    }
}