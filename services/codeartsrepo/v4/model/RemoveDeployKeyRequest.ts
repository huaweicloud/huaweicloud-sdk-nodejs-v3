

export class RemoveDeployKeyRequest {
    private 'repository_id'?: number;
    private 'key_id'?: number;
    public constructor(repositoryId?: number, keyId?: number) { 
        this['repository_id'] = repositoryId;
        this['key_id'] = keyId;
    }
    public withRepositoryId(repositoryId: number): RemoveDeployKeyRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withKeyId(keyId: number): RemoveDeployKeyRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: number  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): number | undefined {
        return this['key_id'];
    }
}