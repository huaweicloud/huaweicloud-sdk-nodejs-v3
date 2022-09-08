import { Tag } from './Tag';


export class AttachmentDetails {
    public id: string;
    public name: string;
    public description?: string;
    public state?: string;
    private 'created_at'?: Date | undefined;
    private 'updated_at'?: Date | undefined;
    public tags?: Array<Tag>;
    private 'project_id': string | undefined;
    private 'er_id'?: string | undefined;
    private 'resource_id': string | undefined;
    private 'resource_type': string | undefined;
    private 'resource_project_id'?: string | undefined;
    public associated?: boolean;
    private 'route_table_id'?: string | undefined;
    public constructor(id?: any, name?: any, projectId?: any, resourceId?: any, resourceType?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['project_id'] = projectId;
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withId(id: string): AttachmentDetails {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AttachmentDetails {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AttachmentDetails {
        this['description'] = description;
        return this;
    }
    public withState(state: string): AttachmentDetails {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: Date): AttachmentDetails {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): AttachmentDetails {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): AttachmentDetails {
        this['tags'] = tags;
        return this;
    }
    public withProjectId(projectId: string): AttachmentDetails {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withErId(erId: string): AttachmentDetails {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string | undefined) {
        this['er_id'] = erId;
    }
    public get erId() {
        return this['er_id'];
    }
    public withResourceId(resourceId: string): AttachmentDetails {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceType(resourceType: string): AttachmentDetails {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceProjectId(resourceProjectId: string): AttachmentDetails {
        this['resource_project_id'] = resourceProjectId;
        return this;
    }
    public set resourceProjectId(resourceProjectId: string | undefined) {
        this['resource_project_id'] = resourceProjectId;
    }
    public get resourceProjectId() {
        return this['resource_project_id'];
    }
    public withAssociated(associated: boolean): AttachmentDetails {
        this['associated'] = associated;
        return this;
    }
    public withRouteTableId(routeTableId: string): AttachmentDetails {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId() {
        return this['route_table_id'];
    }
}