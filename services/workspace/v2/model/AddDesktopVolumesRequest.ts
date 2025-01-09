import { AddVolumesReq } from './AddVolumesReq';


export class AddDesktopVolumesRequest {
    private 'desktop_id'?: string;
    private 'Service-Transaction-Id'?: string;
    public body?: AddVolumesReq;
    public constructor(desktopId?: string) { 
        this['desktop_id'] = desktopId;
    }
    public withDesktopId(desktopId: string): AddDesktopVolumesRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withServiceTransactionId(serviceTransactionId: string): AddDesktopVolumesRequest {
        this['Service-Transaction-Id'] = serviceTransactionId;
        return this;
    }
    public set serviceTransactionId(serviceTransactionId: string  | undefined) {
        this['Service-Transaction-Id'] = serviceTransactionId;
    }
    public get serviceTransactionId(): string | undefined {
        return this['Service-Transaction-Id'];
    }
    public withBody(body: AddVolumesReq): AddDesktopVolumesRequest {
        this['body'] = body;
        return this;
    }
}