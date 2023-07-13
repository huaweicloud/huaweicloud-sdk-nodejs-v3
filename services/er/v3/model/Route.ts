import { RouteAttachment } from './RouteAttachment';


export class Route {
    public id: string;
    public type: string;
    public state?: string;
    private 'is_blackhole'?: boolean | undefined;
    public destination: string;
    public attachments: Array<RouteAttachment>;
    private 'route_table_id': string | undefined;
    private 'created_at': Date | undefined;
    private 'updated_at'?: Date | undefined;
    public constructor(id?: any, type?: any, destination?: any, attachments?: any, routeTableId?: any, createdAt?: any) { 
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
    public set isBlackhole(isBlackhole: boolean | undefined) {
        this['is_blackhole'] = isBlackhole;
    }
    public get isBlackhole() {
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
    public set routeTableId(routeTableId: string | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId() {
        return this['route_table_id'];
    }
    public withCreatedAt(createdAt: Date): Route {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Route {
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