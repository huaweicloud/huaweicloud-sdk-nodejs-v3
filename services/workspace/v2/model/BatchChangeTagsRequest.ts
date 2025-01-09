import { TagsReq } from './TagsReq';


export class BatchChangeTagsRequest {
    private 'desktop_id'?: string;
    public body?: TagsReq;
    public constructor(desktopId?: string) { 
        this['desktop_id'] = desktopId;
    }
    public withDesktopId(desktopId: string): BatchChangeTagsRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withBody(body: TagsReq): BatchChangeTagsRequest {
        this['body'] = body;
        return this;
    }
}