

export class ListShareFilesRequest {
    public offset?: number;
    public limit?: number;
    private 'server_ids'?: string;
    public path?: string;
    public constructor(serverIds?: string, path?: string) { 
        this['server_ids'] = serverIds;
        this['path'] = path;
    }
    public withOffset(offset: number): ListShareFilesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListShareFilesRequest {
        this['limit'] = limit;
        return this;
    }
    public withServerIds(serverIds: string): ListShareFilesRequest {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: string  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): string | undefined {
        return this['server_ids'];
    }
    public withPath(path: string): ListShareFilesRequest {
        this['path'] = path;
        return this;
    }
}