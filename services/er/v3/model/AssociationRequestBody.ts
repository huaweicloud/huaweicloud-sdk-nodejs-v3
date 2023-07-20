import { ExportRoutePolicy } from './ExportRoutePolicy';


export class AssociationRequestBody {
    private 'attachment_id'?: string;
    private 'route_policy'?: ExportRoutePolicy;
    public constructor() { 
    }
    public withAttachmentId(attachmentId: string): AssociationRequestBody {
        this['attachment_id'] = attachmentId;
        return this;
    }
    public set attachmentId(attachmentId: string  | undefined) {
        this['attachment_id'] = attachmentId;
    }
    public get attachmentId(): string | undefined {
        return this['attachment_id'];
    }
    public withRoutePolicy(routePolicy: ExportRoutePolicy): AssociationRequestBody {
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