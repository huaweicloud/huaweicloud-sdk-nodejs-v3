import { ExportUserGroupsNewReq } from './ExportUserGroupsNewReq';


export class ExportUserGroupsNewRequest {
    public body?: ExportUserGroupsNewReq;
    public constructor() { 
    }
    public withBody(body: ExportUserGroupsNewReq): ExportUserGroupsNewRequest {
        this['body'] = body;
        return this;
    }
}