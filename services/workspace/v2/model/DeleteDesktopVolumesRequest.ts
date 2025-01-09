import { DeleteVolumesReq } from './DeleteVolumesReq';


export class DeleteDesktopVolumesRequest {
    private 'Service-Transaction-Id'?: string;
    private 'desktop_id'?: string;
    public body?: DeleteVolumesReq;
    public constructor(desktopId?: string) { 
        this['desktop_id'] = desktopId;
    }
    public withServiceTransactionId(serviceTransactionId: string): DeleteDesktopVolumesRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withDesktopId(desktopId: string): DeleteDesktopVolumesRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withBody(body: DeleteVolumesReq): DeleteDesktopVolumesRequest {
        this['body'] = body;
        return this;
    }
}