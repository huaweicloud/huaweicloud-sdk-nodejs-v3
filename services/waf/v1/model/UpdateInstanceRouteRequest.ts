import { RouteBody } from './RouteBody';


export class UpdateInstanceRouteRequest {
    private 'Content-Type'?: string;
    private 'instance_id'?: string;
    public body?: Array<RouteBody>;
    public constructor(contentType?: string, instanceId?: string) { 
        this['Content-Type'] = contentType;
        this['instance_id'] = instanceId;
    }
    public withContentType(contentType: string): UpdateInstanceRouteRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withInstanceId(instanceId: string): UpdateInstanceRouteRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: Array<RouteBody>): UpdateInstanceRouteRequest {
        this['body'] = body;
        return this;
    }
}