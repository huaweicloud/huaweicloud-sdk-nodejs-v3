import { RouteAttachment } from './RouteAttachment';


export class EffectiveRoute {
    private 'route_id'?: string | undefined;
    public destination?: string;
    private 'next_hops'?: Array<RouteAttachment> | undefined;
    private 'is_blackhole'?: boolean | undefined;
    private 'route_type'?: string | undefined;
    public constructor() { 
    }
    public withRouteId(routeId: string): EffectiveRoute {
        this['route_id'] = routeId;
        return this;
    }
    public set routeId(routeId: string | undefined) {
        this['route_id'] = routeId;
    }
    public get routeId() {
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
    public set nextHops(nextHops: Array<RouteAttachment> | undefined) {
        this['next_hops'] = nextHops;
    }
    public get nextHops() {
        return this['next_hops'];
    }
    public withIsBlackhole(isBlackhole: boolean): EffectiveRoute {
        this['is_blackhole'] = isBlackhole;
        return this;
    }
    public set isBlackhole(isBlackhole: boolean | undefined) {
        this['is_blackhole'] = isBlackhole;
    }
    public get isBlackhole() {
        return this['is_blackhole'];
    }
    public withRouteType(routeType: string): EffectiveRoute {
        this['route_type'] = routeType;
        return this;
    }
    public set routeType(routeType: string | undefined) {
        this['route_type'] = routeType;
    }
    public get routeType() {
        return this['route_type'];
    }
}