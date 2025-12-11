import { UpdatePropagationRequestBody } from './UpdatePropagationRequestBody';


export class UpdatePropagationRoutePolicyRequest {
    private 'er_id'?: string;
    private 'route_table_id'?: string;
    private 'propagation_id'?: string;
    public body?: UpdatePropagationRequestBody;
    public constructor(erId?: string, routeTableId?: string, propagationId?: string) { 
        this['er_id'] = erId;
        this['route_table_id'] = routeTableId;
        this['propagation_id'] = propagationId;
    }
    public withErId(erId: string): UpdatePropagationRoutePolicyRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withRouteTableId(routeTableId: string): UpdatePropagationRoutePolicyRequest {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string  | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId(): string | undefined {
        return this['route_table_id'];
    }
    public withPropagationId(propagationId: string): UpdatePropagationRoutePolicyRequest {
        this['propagation_id'] = propagationId;
        return this;
    }
    public set propagationId(propagationId: string  | undefined) {
        this['propagation_id'] = propagationId;
    }
    public get propagationId(): string | undefined {
        return this['propagation_id'];
    }
    public withBody(body: UpdatePropagationRequestBody): UpdatePropagationRoutePolicyRequest {
        this['body'] = body;
        return this;
    }
}