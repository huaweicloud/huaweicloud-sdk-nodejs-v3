import { AssociationRoutePolicyRequestBody } from './AssociationRoutePolicyRequestBody';


export class ChangeAssociationRoutePolicyRequest {
    private 'er_id'?: string;
    private 'route_table_id'?: string;
    private 'association_id'?: string;
    public body?: AssociationRoutePolicyRequestBody;
    public constructor(erId?: string, routeTableId?: string, associationId?: string) { 
        this['er_id'] = erId;
        this['route_table_id'] = routeTableId;
        this['association_id'] = associationId;
    }
    public withErId(erId: string): ChangeAssociationRoutePolicyRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withRouteTableId(routeTableId: string): ChangeAssociationRoutePolicyRequest {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string  | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId(): string | undefined {
        return this['route_table_id'];
    }
    public withAssociationId(associationId: string): ChangeAssociationRoutePolicyRequest {
        this['association_id'] = associationId;
        return this;
    }
    public set associationId(associationId: string  | undefined) {
        this['association_id'] = associationId;
    }
    public get associationId(): string | undefined {
        return this['association_id'];
    }
    public withBody(body: AssociationRoutePolicyRequestBody): ChangeAssociationRoutePolicyRequest {
        this['body'] = body;
        return this;
    }
}