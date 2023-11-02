import { DirectoryVO } from './DirectoryVO';


export class CreateDirectoryRequest {
    public workspace?: string;
    public body?: DirectoryVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): CreateDirectoryRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: DirectoryVO): CreateDirectoryRequest {
        this['body'] = body;
        return this;
    }
}