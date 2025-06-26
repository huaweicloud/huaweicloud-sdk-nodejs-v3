

export class Repository {
    public id?: number;
    public name?: string;
    private 'namespace_name'?: string;
    private 'namespace_id'?: number;
    private 'tag_count'?: number;
    private 'pull_count'?: number;
    private 'artifact_count'?: number;
    public description?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: number): Repository {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Repository {
        this['name'] = name;
        return this;
    }
    public withNamespaceName(namespaceName: string): Repository {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withNamespaceId(namespaceId: number): Repository {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withTagCount(tagCount: number): Repository {
        this['tag_count'] = tagCount;
        return this;
    }
    public set tagCount(tagCount: number  | undefined) {
        this['tag_count'] = tagCount;
    }
    public get tagCount(): number | undefined {
        return this['tag_count'];
    }
    public withPullCount(pullCount: number): Repository {
        this['pull_count'] = pullCount;
        return this;
    }
    public set pullCount(pullCount: number  | undefined) {
        this['pull_count'] = pullCount;
    }
    public get pullCount(): number | undefined {
        return this['pull_count'];
    }
    public withArtifactCount(artifactCount: number): Repository {
        this['artifact_count'] = artifactCount;
        return this;
    }
    public set artifactCount(artifactCount: number  | undefined) {
        this['artifact_count'] = artifactCount;
    }
    public get artifactCount(): number | undefined {
        return this['artifact_count'];
    }
    public withDescription(description: string): Repository {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): Repository {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): Repository {
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