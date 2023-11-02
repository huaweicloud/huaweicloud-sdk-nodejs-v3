import { DirectoryVO } from './DirectoryVO';


export class UpdateDirectoryRequest {
    public workspace?: string;
    public body?: DirectoryVO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): UpdateDirectoryRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: DirectoryVO): UpdateDirectoryRequest {
        this['body'] = body;
        return this;
    }
}