import { ServerGroupTagsInfo } from './ServerGroupTagsInfo';


export class BatchDeleteServerGroupTagsReq {
    public items?: Array<ServerGroupTagsInfo>;
    public constructor(items?: Array<ServerGroupTagsInfo>) { 
        this['items'] = items;
    }
    public withItems(items: Array<ServerGroupTagsInfo>): BatchDeleteServerGroupTagsReq {
        this['items'] = items;
        return this;
    }
}