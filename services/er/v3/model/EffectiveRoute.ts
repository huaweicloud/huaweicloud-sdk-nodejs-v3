import { RouteAttachment } from './RouteAttachment';


export class EffectiveRoute {
    private 'route_id'?: string;
    public destination?: string;
    private 'next_hops'?: Array<RouteAttachment>;
    private 'is_blackhole'?: boolean;
    private 'route_type'?: string;
    private 'address_group_id'?: string;
    public constructor() { 
    }
    public withRouteId(routeId: string): EffectiveRoute {
        this['route_id'] = routeId;
        return this;
    }
    public set routeId(routeId: string  | undefined) {
        this['route_id'] = routeId;
    }
    public get routeId(): string | undefined {
        return this['route_id'];
    }
    public withDestination(destination: string): EffectiveRoute {
        this['destination'] = destination;
        return this;
    }
    public withNextHops(nextHops: Array<RouteAttachment>): EffectiveRoute {
        this['next_hops'] = nextHops;
        return this;
    }
    public set nextHops(nextHops: Array<RouteAttachment>  | undefined) {
        this['next_hops'] = nextHops;
    }
    public get nextHops(): Array<RouteAttachment> | undefined {
        return this['next_hops'];
    }
    public withIsBlackhole(isBlackhole: boolean): EffectiveRoute {
        this['is_blackhole'] = isBlackhole;
        return this;
    }
    public set isBlackhole(isBlackhole: boolean  | undefined) {
        this['is_blackhole'] = isBlackhole;
    }
    public get isBlackhole(): boolean | undefined {
        return this['is_blackhole'];
    }
    public withRouteType(routeType: string): EffectiveRoute {
        this['route_type'] = routeType;
        return this;
    }
    public set routeType(routeType: string  | undefined) {
        this['route_type'] = routeType;
    }
    public get routeType(): string | undefined {
        return this['route_type'];
    }
    public withAddressGroupId(addressGroupId: string): EffectiveRoute {
        this['address_group_id'] = addressGroupId;
        return this;
    }
    public set addressGroupId(addressGroupId: string  | undefined) {
        this['address_group_id'] = addressGroupId;
    }
    public get addressGroupId(): string | undefined {
        return this['address_group_id'];
    }
}