

export class DeleteShareFilesRequestBody {
    private 'server_ids'?: Array<string>;
    private 'file_paths'?: Array<string>;
    public constructor(serverIds?: Array<string>, filePaths?: Array<string>) { 
        this['server_ids'] = serverIds;
        this['file_paths'] = filePaths;
    }
    public withServerIds(serverIds: Array<string>): DeleteShareFilesRequestBody {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
    public withFilePaths(filePaths: Array<string>): DeleteShareFilesRequestBody {
        this['file_paths'] = filePaths;
        return this;
    }
    public set filePaths(filePaths: Array<string>  | undefined) {
        this['file_paths'] = filePaths;
    }
    public get filePaths(): Array<string> | undefined {
        return this['file_paths'];
    }
}