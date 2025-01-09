import { CreateTagReq } from './CreateTagReq';


export class CreateTagRequest {
    private 'desktop_id'?: string;
    public body?: CreateTagReq;
    public constructor(desktopId?: string) { 
        this['desktop_id'] = desktopId;
    }
    public withDesktopId(desktopId: string): CreateTagRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withBody(body: CreateTagReq): CreateTagRequest {
        this['body'] = body;
        return this;
    }
}