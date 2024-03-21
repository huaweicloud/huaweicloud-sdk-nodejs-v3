import { DataProfileRO } from './DataProfileRO';


export class RenewDataProfileRequest {
    public workspace?: string;
    public body?: DataProfileRO;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): RenewDataProfileRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: DataProfileRO): RenewDataProfileRequest {
        this['body'] = body;
        return this;
    }
}