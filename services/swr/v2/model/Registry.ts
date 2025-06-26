import { Credential } from './Credential';


export class Registry {
    public id?: number;
    public name?: string;
    public description?: string;
    private 'region_id'?: string;
    private 'instance_id'?: string;
    public type?: string;
    public url?: string;
    public credential?: Credential;
    public insecure?: boolean;
    public status?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: number): Registry {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Registry {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Registry {
        this['description'] = description;
        return this;
    }
    public withRegionId(regionId: string): Registry {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withInstanceId(instanceId: string): Registry {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: string): Registry {
        this['type'] = type;
        return this;
    }
    public withUrl(url: string): Registry {
        this['url'] = url;
        return this;
    }
    public withCredential(credential: Credential): Registry {
        this['credential'] = credential;
        return this;
    }
    public withInsecure(insecure: boolean): Registry {
        this['insecure'] = insecure;
        return this;
    }
    public withStatus(status: string): Registry {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): Registry {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): Registry {
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