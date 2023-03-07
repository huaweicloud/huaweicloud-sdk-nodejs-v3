import { SubtitleModifyReq } from './SubtitleModifyReq';


export class ModifySubtitleRequest {
    public body?: SubtitleModifyReq;
    public constructor() { 
    }
    public withBody(body: SubtitleModifyReq): ModifySubtitleRequest {
        this['body'] = body;
        return this;
    }
}