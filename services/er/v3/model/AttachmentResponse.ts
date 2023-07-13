import { Tag } from './Tag';


export class AttachmentResponse {
    public name: string;
    public id: string;
    public description: string;
    public state: string;
    private 'created_at': Date | undefined;
    private 'updated_at'?: Date | undefined;
    public tags?: Array<Tag>;
    private 'project_id': string | undefined;
    private 'resource_id': string | undefined;
    private 'resource_type': string | undefined;
    private 'resource_project_id'?: string | undefined;
    public constructor(name?: any, id?: any, description?: any, state?: any, createdAt?: any, projectId?: any, resourceId?: any, resourceType?: any) { 
        this['name'] = name;
        this['id'] = id;
        this['description'] = description;
        this['state'] = state;
        this['created_at'] = createdAt;
        this['project_id'] = projectId;
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withName(name: string): AttachmentResponse {
        this['name'] = name;
        return this;
    }
    public withId(id: string): AttachmentResponse {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): AttachmentResponse {
        this['description'] = description;
        return this;
    }
    public withState(state: string): AttachmentResponse {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: Date): AttachmentResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): AttachmentResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): AttachmentResponse {
        this['tags'] = tags;
        return this;
    }
    public withProjectId(projectId: string): AttachmentResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withResourceId(resourceId: string): AttachmentResponse {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceType(resourceType: string): AttachmentResponse {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceProjectId(resourceProjectId: string): AttachmentResponse {
        this['resource_project_id'] = resourceProjectId;
        return this;
    }
    public set resourceProjectId(resourceProjectId: string | undefined) {
        this['resource_project_id'] = resourceProjectId;
    }
    public get resourceProjectId() {
        return this['resource_project_id'];
    }
}