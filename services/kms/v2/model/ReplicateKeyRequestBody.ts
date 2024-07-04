import { TagItem } from './TagItem';


export class ReplicateKeyRequestBody {
    private 'key_id'?: string;
    private 'replica_region'?: string;
    private 'key_alias'?: string;
    private 'key_description'?: string;
    private 'enterprise_project_id'?: string;
    private 'replica_project_id'?: string;
    public tags?: Array<TagItem>;
    public constructor(keyId?: string, replicaRegion?: string, keyAlias?: string, replicaProjectId?: string) { 
        this['key_id'] = keyId;
        this['replica_region'] = replicaRegion;
        this['key_alias'] = keyAlias;
        this['replica_project_id'] = replicaProjectId;
    }
    public withKeyId(keyId: string): ReplicateKeyRequestBody {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withReplicaRegion(replicaRegion: string): ReplicateKeyRequestBody {
        this['replica_region'] = replicaRegion;
        return this;
    }
    public set replicaRegion(replicaRegion: string  | undefined) {
        this['replica_region'] = replicaRegion;
    }
    public get replicaRegion(): string | undefined {
        return this['replica_region'];
    }
    public withKeyAlias(keyAlias: string): ReplicateKeyRequestBody {
        this['key_alias'] = keyAlias;
        return this;
    }
    public set keyAlias(keyAlias: string  | undefined) {
        this['key_alias'] = keyAlias;
    }
    public get keyAlias(): string | undefined {
        return this['key_alias'];
    }
    public withKeyDescription(keyDescription: string): ReplicateKeyRequestBody {
        this['key_description'] = keyDescription;
        return this;
    }
    public set keyDescription(keyDescription: string  | undefined) {
        this['key_description'] = keyDescription;
    }
    public get keyDescription(): string | undefined {
        return this['key_description'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ReplicateKeyRequestBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withReplicaProjectId(replicaProjectId: string): ReplicateKeyRequestBody {
        this['replica_project_id'] = replicaProjectId;
        return this;
    }
    public set replicaProjectId(replicaProjectId: string  | undefined) {
        this['replica_project_id'] = replicaProjectId;
    }
    public get replicaProjectId(): string | undefined {
        return this['replica_project_id'];
    }
    public withTags(tags: Array<TagItem>): ReplicateKeyRequestBody {
        this['tags'] = tags;
        return this;
    }
}