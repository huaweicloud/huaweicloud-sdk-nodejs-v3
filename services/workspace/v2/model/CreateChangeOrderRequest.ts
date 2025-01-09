import { CreateChangeOrderReq } from './CreateChangeOrderReq';


export class CreateChangeOrderRequest {
    private 'desktop_id'?: string;
    public body?: CreateChangeOrderReq;
    public constructor(desktopId?: string) { 
        this['desktop_id'] = desktopId;
    }
    public withDesktopId(desktopId: string): CreateChangeOrderRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withBody(body: CreateChangeOrderReq): CreateChangeOrderRequest {
        this['body'] = body;
        return this;
    }
}