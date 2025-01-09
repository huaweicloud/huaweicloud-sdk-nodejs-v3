import { ChangeDesktopNetworkReq } from './ChangeDesktopNetworkReq';


export class ChangeDesktopNetworkRequest {
    private 'desktop_id'?: string;
    public body?: ChangeDesktopNetworkReq;
    public constructor(desktopId?: string) { 
        this['desktop_id'] = desktopId;
    }
    public withDesktopId(desktopId: string): ChangeDesktopNetworkRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withBody(body: ChangeDesktopNetworkReq): ChangeDesktopNetworkRequest {
        this['body'] = body;
        return this;
    }
}