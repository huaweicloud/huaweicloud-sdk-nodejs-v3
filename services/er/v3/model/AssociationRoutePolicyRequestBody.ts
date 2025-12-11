import { ExportRoutePolicy } from './ExportRoutePolicy';


export class AssociationRoutePolicyRequestBody {
    private 'route_policy'?: ExportRoutePolicy;
    public constructor(routePolicy?: ExportRoutePolicy) { 
        this['route_policy'] = routePolicy;
    }
    public withRoutePolicy(routePolicy: ExportRoutePolicy): AssociationRoutePolicyRequestBody {
        this['route_policy'] = routePolicy;
        return this;
    }
    public set routePolicy(routePolicy: ExportRoutePolicy  | undefined) {
        this['route_policy'] = routePolicy;
    }
    public get routePolicy(): ExportRoutePolicy | undefined {
        return this['route_policy'];
    }
}