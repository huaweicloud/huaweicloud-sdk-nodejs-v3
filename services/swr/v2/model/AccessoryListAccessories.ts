

export class AccessoryListAccessories {
    public id?: number;
    private 'domain_id'?: string;
    private 'namespace_name'?: string;
    private 'repo_name'?: string;
    private 'sig_tag'?: string;
    private 'sig_digest'?: string;
    private 'target_digest'?: string;
    public size?: number;
    public type?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: number): AccessoryListAccessories {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): AccessoryListAccessories {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withNamespaceName(namespaceName: string): AccessoryListAccessories {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withRepoName(repoName: string): AccessoryListAccessories {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withSigTag(sigTag: string): AccessoryListAccessories {
        this['sig_tag'] = sigTag;
        return this;
    }
    public set sigTag(sigTag: string  | undefined) {
        this['sig_tag'] = sigTag;
    }
    public get sigTag(): string | undefined {
        return this['sig_tag'];
    }
    public withSigDigest(sigDigest: string): AccessoryListAccessories {
        this['sig_digest'] = sigDigest;
        return this;
    }
    public set sigDigest(sigDigest: string  | undefined) {
        this['sig_digest'] = sigDigest;
    }
    public get sigDigest(): string | undefined {
        return this['sig_digest'];
    }
    public withTargetDigest(targetDigest: string): AccessoryListAccessories {
        this['target_digest'] = targetDigest;
        return this;
    }
    public set targetDigest(targetDigest: string  | undefined) {
        this['target_digest'] = targetDigest;
    }
    public get targetDigest(): string | undefined {
        return this['target_digest'];
    }
    public withSize(size: number): AccessoryListAccessories {
        this['size'] = size;
        return this;
    }
    public withType(type: string): AccessoryListAccessories {
        this['type'] = type;
        return this;
    }
    public withCreatedAt(createdAt: string): AccessoryListAccessories {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): AccessoryListAccessories {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}