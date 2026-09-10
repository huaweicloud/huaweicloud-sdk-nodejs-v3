

export class DetachShareFilesystemRequestBody {
    public type?: string;
    public id?: string;
    private 'server_ids'?: Array<string>;
    public constructor(type?: string, id?: string, serverIds?: Array<string>) { 
        this['type'] = type;
        this['id'] = id;
        this['server_ids'] = serverIds;
    }
    public withType(type: string): DetachShareFilesystemRequestBody {
        this['type'] = type;
        return this;
    }
    public withId(id: string): DetachShareFilesystemRequestBody {
        this['id'] = id;
        return this;
    }
    public withServerIds(serverIds: Array<string>): DetachShareFilesystemRequestBody {
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