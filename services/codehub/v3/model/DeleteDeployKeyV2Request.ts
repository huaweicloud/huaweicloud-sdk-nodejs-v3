

export class DeleteDeployKeyV2Request {
    private 'key_id'?: number;
    private 'repository_id'?: number;
    public constructor(keyId?: number, repositoryId?: number) { 
        this['key_id'] = keyId;
        this['repository_id'] = repositoryId;
    }
    public withKeyId(keyId: number): DeleteDeployKeyV2Request {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: number  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): number | undefined {
        return this['key_id'];
    }
    public withRepositoryId(repositoryId: number): DeleteDeployKeyV2Request {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
}