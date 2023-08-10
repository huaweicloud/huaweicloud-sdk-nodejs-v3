

export class CreateFsDirQuotaRequestBody {
    public path?: string;
    public capacity?: number;
    public inode?: number;
    public constructor(path?: string) { 
        this['path'] = path;
    }
    public withPath(path: string): CreateFsDirQuotaRequestBody {
        this['path'] = path;
        return this;
    }
    public withCapacity(capacity: number): CreateFsDirQuotaRequestBody {
        this['capacity'] = capacity;
        return this;
    }
    public withInode(inode: number): CreateFsDirQuotaRequestBody {
        this['inode'] = inode;
        return this;
    }
}