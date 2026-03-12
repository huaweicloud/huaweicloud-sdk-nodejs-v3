import { Repository } from './Repository';


export class InstanceRepository {
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
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'resource_urn'?: string;
    public constructor() { 
    }
    public withId(id: number): InstanceRepository {
        this['id'] = id;
        return this;
    }
    public withName(name: string): InstanceRepository {
        this['name'] = name;
        return this;
    }
    public withNamespaceName(namespaceName: string): InstanceRepository {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withNamespaceId(namespaceId: number): InstanceRepository {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withTagCount(tagCount: number): InstanceRepository {
        this['tag_count'] = tagCount;
        return this;
    }
    public set tagCount(tagCount: number  | undefined) {
        this['tag_count'] = tagCount;
    }
    public get tagCount(): number | undefined {
        return this['tag_count'];
    }
    public withPullCount(pullCount: number): InstanceRepository {
        this['pull_count'] = pullCount;
        return this;
    }
    public set pullCount(pullCount: number  | undefined) {
        this['pull_count'] = pullCount;
    }
    public get pullCount(): number | undefined {
        return this['pull_count'];
    }
    public withArtifactCount(artifactCount: number): InstanceRepository {
        this['artifact_count'] = artifactCount;
        return this;
    }
    public set artifactCount(artifactCount: number  | undefined) {
        this['artifact_count'] = artifactCount;
    }
    public get artifactCount(): number | undefined {
        return this['artifact_count'];
    }
    public withDescription(description: string): InstanceRepository {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): InstanceRepository {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): InstanceRepository {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withInstanceId(instanceId: string): InstanceRepository {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): InstanceRepository {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withResourceUrn(resourceUrn: string): InstanceRepository {
        this['resource_urn'] = resourceUrn;
        return this;
    }
    public set resourceUrn(resourceUrn: string  | undefined) {
        this['resource_urn'] = resourceUrn;
    }
    public get resourceUrn(): string | undefined {
        return this['resource_urn'];
    }
}