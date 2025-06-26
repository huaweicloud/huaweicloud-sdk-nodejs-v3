import { TmsTag } from './TmsTag';


export class ServerGroupTagsInfo {
    private 'server_group_id'?: string;
    public tags?: Array<TmsTag>;
    public constructor() { 
    }
    public withServerGroupId(serverGroupId: string): ServerGroupTagsInfo {
        this['server_group_id'] = serverGroupId;
        return this;
    }
    public set serverGroupId(serverGroupId: string  | undefined) {
        this['server_group_id'] = serverGroupId;
    }
    public get serverGroupId(): string | undefined {
        return this['server_group_id'];
    }
    public withTags(tags: Array<TmsTag>): ServerGroupTagsInfo {
        this['tags'] = tags;
        return this;
    }
}