import { Credential } from './Credential';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceRegistryResponse extends SdkResponse {
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
        super();
    }
    public withId(id: number): ShowInstanceRegistryResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowInstanceRegistryResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowInstanceRegistryResponse {
        this['description'] = description;
        return this;
    }
    public withRegionId(regionId: string): ShowInstanceRegistryResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withInstanceId(instanceId: string): ShowInstanceRegistryResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: string): ShowInstanceRegistryResponse {
        this['type'] = type;
        return this;
    }
    public withUrl(url: string): ShowInstanceRegistryResponse {
        this['url'] = url;
        return this;
    }
    public withCredential(credential: Credential): ShowInstanceRegistryResponse {
        this['credential'] = credential;
        return this;
    }
    public withInsecure(insecure: boolean): ShowInstanceRegistryResponse {
        this['insecure'] = insecure;
        return this;
    }
    public withStatus(status: string): ShowInstanceRegistryResponse {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): ShowInstanceRegistryResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ShowInstanceRegistryResponse {
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