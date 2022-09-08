import { ExportRoutePolicy } from './ExportRoutePolicy';


export class Association {
    public id?: string;
    private 'route_table_id'?: string | undefined;
    private 'attachment_id'?: string | undefined;
    private 'resource_type'?: string | undefined;
    private 'resource_id'?: string | undefined;
    public state?: string;
    private 'created_at'?: Date | undefined;
    private 'updated_at'?: Date | undefined;
    private 'route_policy'?: ExportRoutePolicy | undefined;
    public constructor() { 
    }
    public withId(id: string): Association {
        this['id'] = id;
        return this;
    }
    public withRouteTableId(routeTableId: string): Association {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId() {
        return this['route_table_id'];
    }
    public withAttachmentId(attachmentId: string): Association {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId() {
        return this['attachment_id'];
    }
    public withResourceType(resourceType: string): Association {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): Association {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withState(state: string): Association {
        this['state'] = state;
        return this;
    }
    public withCreatedAt(createdAt: Date): Association {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Association {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withRoutePolicy(routePolicy: ExportRoutePolicy): Association {
        this['route_policy'] = routePolicy;
        return this;
    }
    public set routePolicy(routePolicy: ExportRoutePolicy | undefined) {
        this['route_policy'] = routePolicy;
    }
    public get routePolicy() {
        return this['route_policy'];
    }
}