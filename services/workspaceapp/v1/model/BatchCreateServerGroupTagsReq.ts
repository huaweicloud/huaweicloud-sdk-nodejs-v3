import { ServerGroupTagsInfo } from './ServerGroupTagsInfo';


export class BatchCreateServerGroupTagsReq {
    public items?: Array<ServerGroupTagsInfo>;
    public constructor(items?: Array<ServerGroupTagsInfo>) { 
        this['items'] = items;
    }
    public withItems(items: Array<ServerGroupTagsInfo>): BatchCreateServerGroupTagsReq {
        this['items'] = items;
        return this;
    }
}