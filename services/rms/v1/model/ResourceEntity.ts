

export class ResourceEntity {
    public id?: string;
    public name?: string;
    public provider?: string;
    public type?: string;
    private 'region_id'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'project_name'?: string | undefined;
    private 'ep_id'?: string | undefined;
    private 'ep_name'?: string | undefined;
    public checksum?: string;
    public created?: string;
    public updated?: string;
    private 'provisioning_state'?: string | undefined;
    public tags?: { [key: string]: string; };
    public properties?: { [key: string]: object; };
    public constructor() { 
    }
    public withId(id: string): ResourceEntity {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ResourceEntity {
        this['name'] = name;
        return this;
    }
    public withProvider(provider: string): ResourceEntity {
        this['provider'] = provider;
        return this;
    }
    public withType(type: string): ResourceEntity {
        this['type'] = type;
        return this;
    }
    public withRegionId(regionId: string): ResourceEntity {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withProjectId(projectId: string): ResourceEntity {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ResourceEntity {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName() {
        return this['project_name'];
    }
    public withEpId(epId: string): ResourceEntity {
        this['ep_id'] = epId;
        return this;
    }
    public set epId(epId: string | undefined) {
        this['ep_id'] = epId;
    }
    public get epId() {
        return this['ep_id'];
    }
    public withEpName(epName: string): ResourceEntity {
        this['ep_name'] = epName;
        return this;
    }
    public set epName(epName: string | undefined) {
        this['ep_name'] = epName;
    }
    public get epName() {
        return this['ep_name'];
    }
    public withChecksum(checksum: string): ResourceEntity {
        this['checksum'] = checksum;
        return this;
    }
    public withCreated(created: string): ResourceEntity {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ResourceEntity {
        this['updated'] = updated;
        return this;
    }
    public withProvisioningState(provisioningState: string): ResourceEntity {
        this['provisioning_state'] = provisioningState;
        return this;
    }
    public set provisioningState(provisioningState: string | undefined) {
        this['provisioning_state'] = provisioningState;
    }
    public get provisioningState() {
        return this['provisioning_state'];
    }
    public withTags(tags: { [key: string]: string; }): ResourceEntity {
        this['tags'] = tags;
        return this;
    }
    public withProperties(properties: { [key: string]: object; }): ResourceEntity {
        this['properties'] = properties;
        return this;
    }
}