import { BaseResourceEntity } from './BaseResourceEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceByIdResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    public provider?: string;
    public type?: string;
    private 'region_id'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'ep_id'?: string;
    private 'ep_name'?: string;
    public checksum?: string;
    public created?: string;
    public updated?: string;
    private 'provisioning_state'?: string;
    public tags?: { [key: string]: string; };
    public properties?: { [key: string]: object; };
    public state?: string;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowResourceByIdResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowResourceByIdResponse {
        this['name'] = name;
        return this;
    }
    public withProvider(provider: string): ShowResourceByIdResponse {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): ShowResourceByIdResponse {
        this['type'] = type;
        return this;
    }
    public withRegionId(regionId: string): ShowResourceByIdResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): ShowResourceByIdResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ShowResourceByIdResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withEpId(epId: string): ShowResourceByIdResponse {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string  | undefined) {
        this['ep_id'] = epId;
    }
    public get epId(): string | undefined {
        return this['ep_id'];
    }
    public withEpName(epName: string): ShowResourceByIdResponse {
        this['ep_name'] = epName;
        return this;
    }
    public set epName(epName: string  | undefined) {
        this['ep_name'] = epName;
    }
    public get epName(): string | undefined {
        return this['ep_name'];
    }
    public withChecksum(checksum: string): ShowResourceByIdResponse {
        this['checksum'] = checksum;
        return this;
    }
    public withCreated(created: string): ShowResourceByIdResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowResourceByIdResponse {
        this['updated'] = updated;
        return this;
    }
    public withProvisioningState(provisioningState: string): ShowResourceByIdResponse {
        this['provisioning_state'] = provisioningState;
        return this;
    }
    public set provisioningState(provisioningState: string  | undefined) {
        this['provisioning_state'] = provisioningState;
    }
    public get provisioningState(): string | undefined {
        return this['provisioning_state'];
    }
    public withTags(tags: { [key: string]: string; }): ShowResourceByIdResponse {
        this['tags'] = tags;
        return this;
    }
    public withProperties(properties: { [key: string]: object; }): ShowResourceByIdResponse {
        this['properties'] = properties;
        return this;
    }
    public withState(state: string): ShowResourceByIdResponse {
        this['state'] = state;
        return this;
    }
}