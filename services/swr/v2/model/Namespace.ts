import { NamespaceMetadata } from './NamespaceMetadata';


export class Namespace {
    public name?: string;
    public metadata?: NamespaceMetadata;
    private 'namespace_id'?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'repo_count'?: number;
    public constructor() { 
    }
    public withName(name: string): Namespace {
        this['name'] = name;
        return this;
    }
    public withMetadata(metadata: NamespaceMetadata): Namespace {
        this['metadata'] = metadata;
        return this;
    }
    public withNamespaceId(namespaceId: number): Namespace {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withCreatedAt(createdAt: string): Namespace {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): Namespace {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withRepoCount(repoCount: number): Namespace {
        this['repo_count'] = repoCount;
        return this;
    }
    public set repoCount(repoCount: number  | undefined) {
        this['repo_count'] = repoCount;
    }
    public get repoCount(): number | undefined {
        return this['repo_count'];
    }
}