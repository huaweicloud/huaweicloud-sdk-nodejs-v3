

export class PrivateKeyVerify {
    private 'repository_uuid'?: string;
    private 'private_key'?: string;
    public constructor(repositoryUuid?: string, privateKey?: string) { 
        this['repository_uuid'] = repositoryUuid;
        this['private_key'] = privateKey;
    }
    public withRepositoryUuid(repositoryUuid: string): PrivateKeyVerify {
        this['repository_uuid'] = repositoryUuid;
        return this;
    }
    public set repositoryUuid(repositoryUuid: string  | undefined) {
        this['repository_uuid'] = repositoryUuid;
    }
    public get repositoryUuid(): string | undefined {
        return this['repository_uuid'];
    }
    public withPrivateKey(privateKey: string): PrivateKeyVerify {
        this['private_key'] = privateKey;
        return this;
    }
    public set privateKey(privateKey: string  | undefined) {
        this['private_key'] = privateKey;
    }
    public get privateKey(): string | undefined {
        return this['private_key'];
    }
}