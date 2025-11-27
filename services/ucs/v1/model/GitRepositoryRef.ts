

export class GitRepositoryRef {
    public branch?: string;
    public constructor() { 
    }
    public withBranch(branch: string): GitRepositoryRef {
        this['branch'] = branch;
        return this;
    }
}