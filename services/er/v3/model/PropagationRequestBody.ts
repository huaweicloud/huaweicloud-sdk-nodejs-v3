import { ImportRoutePolicy } from './ImportRoutePolicy';


export class PropagationRequestBody {
    private 'attachment_id'?: string | undefined;
    private 'route_policy'?: ImportRoutePolicy | undefined;
    public constructor() { 
    }
    public withAttachmentId(attachmentId: string): PropagationRequestBody {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId() {
        return this['attachment_id'];
    }
    public withRoutePolicy(routePolicy: ImportRoutePolicy): PropagationRequestBody {
        this['route_policy'] = routePolicy;
        return this;
    }
    public set routePolicy(routePolicy: ImportRoutePolicy | undefined) {
        this['route_policy'] = routePolicy;
    }
    public get routePolicy() {
        return this['route_policy'];
    }
}