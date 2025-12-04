

export class DeleteCloudPhoneServerRequestBody {
    private 'server_ids'?: Array<string>;
    public constructor(serverIds?: Array<string>) { 
        this['server_ids'] = serverIds;
    }
    public withServerIds(serverIds: Array<string>): DeleteCloudPhoneServerRequestBody {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
}