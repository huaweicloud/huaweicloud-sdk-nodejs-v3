

export class AttachShareFilesystemRequestBody {
    public type?: string;
    public id?: string;
    private 'server_ids'?: Array<string>;
    public path?: string;
    public constructor(type?: string, id?: string, serverIds?: Array<string>) { 
        this['type'] = type;
        this['id'] = id;
        this['server_ids'] = serverIds;
    }
    public withType(type: string): AttachShareFilesystemRequestBody {
        this['type'] = type;
        return this;
    }
    public withId(id: string): AttachShareFilesystemRequestBody {
        this['id'] = id;
        return this;
    }
    public withServerIds(serverIds: Array<string>): AttachShareFilesystemRequestBody {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
    public withPath(path: string): AttachShareFilesystemRequestBody {
        this['path'] = path;
        return this;
    }
}