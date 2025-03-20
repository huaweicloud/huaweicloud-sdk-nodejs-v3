import { RouteAttachment } from './RouteAttachment';


export class Route {
    public id?: string;
    public type?: string;
    public state?: string;
    private 'is_blackhole'?: boolean;
    public destination?: string;
    public attachments?: Array<RouteAttachment>;
    private 'route_table_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public description?: string;
    public constructor(id?: string, type?: string, destination?: string, attachments?: Array<RouteAttachment>, routeTableId?: string, createdAt?: Date) { 
        this['id'] = id;
        this['type'] = type;
        this['destination'] = destination;
        this['attachments'] = attachments;
        this['route_table_id'] = routeTableId;
        this['created_at'] = createdAt;
    }
    public withId(id: string): Route {
        this['id'] = id;
        return this;
    }
    public withType(type: string): Route {
        this['type'] = type;
        return this;
    }
    public withState(state: string): Route {
        this['state'] = state;
        return this;
    }
    public withIsBlackhole(isBlackhole: boolean): Route {
        this['is_blackhole'] = isBlackhole;
        return this;
    }
    public set isBlackhole(isBlackhole: boolean  | undefined) {
        this['is_blackhole'] = isBlackhole;
    }
    public get isBlackhole(): boolean | undefined {
        return this['is_blackhole'];
    }
    public withDestination(destination: string): Route {
        this['destination'] = destination;
        return this;
    }
    public withAttachments(attachments: Array<RouteAttachment>): Route {
        this['attachments'] = attachments;
        return this;
    }
    public withRouteTableId(routeTableId: string): Route {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string  | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId(): string | undefined {
        return this['route_table_id'];
    }
    public withCreatedAt(createdAt: Date): Route {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Route {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withDescription(description: string): Route {
        this['description'] = description;
        return this;
    }
}