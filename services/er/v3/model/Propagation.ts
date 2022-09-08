import { ImportRoutePolicy } from './ImportRoutePolicy';


export class Propagation {
    public id?: string;
    private 'project_id'?: string | undefined;
    private 'er_id'?: string | undefined;
    private 'route_table_id'?: string | undefined;
    private 'attachment_id'?: string | undefined;
    private 'resource_type'?: string | undefined;
    private 'resource_id'?: string | undefined;
    private 'route_policy'?: ImportRoutePolicy | undefined;
    public state?: string;
    private 'created_at'?: Date | undefined;
    private 'updated_at'?: Date | undefined;
    public constructor() { 
    }
    public withId(id: string): Propagation {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): Propagation {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withErId(erId: string): Propagation {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string | undefined) {
        this['er_id'] = erId;
    }
    public get erId() {
        return this['er_id'];
    }
    public withRouteTableId(routeTableId: string): Propagation {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId() {
        return this['route_table_id'];
    }
    public withAttachmentId(attachmentId: string): Propagation {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId() {
        return this['attachment_id'];
    }
    public withResourceType(resourceType: string): Propagation {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): Propagation {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withRoutePolicy(routePolicy: ImportRoutePolicy): Propagation {
        this['route_policy'] = routePolicy;
        return this;
    }
    public set routePolicy(routePolicy: ImportRoutePolicy | undefined) {
        this['route_policy'] = routePolicy;
    }
    public get routePolicy() {
        return this['route_policy'];
    }
    public withState(state: string): Propagation {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: Date): Propagation {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Propagation {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}