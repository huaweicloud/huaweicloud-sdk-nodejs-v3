import { PropagationRequestBody } from './PropagationRequestBody';


export class EnablePropagationRequest {
    private 'X-Client-Token'?: string;
    private 'er_id'?: string;
    private 'route_table_id'?: string;
    public body?: PropagationRequestBody;
    public constructor(erId?: string, routeTableId?: string) { 
        this['er_id'] = erId;
        this['route_table_id'] = routeTableId;
    }
    public withXClientToken(xClientToken: string): EnablePropagationRequest {
        this['X-Client-Token'] = xClientToken;
        return this;
    }
    public set xClientToken(xClientToken: string  | undefined) {
        this['X-Client-Token'] = xClientToken;
    }
    public get xClientToken(): string | undefined {
        return this['X-Client-Token'];
    }
    public withErId(erId: string): EnablePropagationRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withRouteTableId(routeTableId: string): EnablePropagationRequest {
        this['route_table_id'] = routeTableId;
        return this;
    }
    public set routeTableId(routeTableId: string  | undefined) {
        this['route_table_id'] = routeTableId;
    }
    public get routeTableId(): string | undefined {
        return this['route_table_id'];
    }
    public withBody(body: PropagationRequestBody): EnablePropagationRequest {
        this['body'] = body;
        return this;
    }
}