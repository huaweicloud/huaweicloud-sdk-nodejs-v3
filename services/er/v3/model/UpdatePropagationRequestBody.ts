import { ImportRoutePolicy } from './ImportRoutePolicy';


export class UpdatePropagationRequestBody {
    private 'route_policy'?: ImportRoutePolicy;
    public constructor(routePolicy?: ImportRoutePolicy) { 
        this['route_policy'] = routePolicy;
    }
    public withRoutePolicy(routePolicy: ImportRoutePolicy): UpdatePropagationRequestBody {
        this['route_policy'] = routePolicy;
        return this;
    }
    public set routePolicy(routePolicy: ImportRoutePolicy  | undefined) {
        this['route_policy'] = routePolicy;
    }
    public get routePolicy(): ImportRoutePolicy | undefined {
        return this['route_policy'];
    }
}