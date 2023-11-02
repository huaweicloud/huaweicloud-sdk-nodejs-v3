import { CustomizedFieldsVOList } from './CustomizedFieldsVOList';


export class ModifyCustomizedFieldsRequest {
    public workspace?: string;
    public body?: CustomizedFieldsVOList;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ModifyCustomizedFieldsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withBody(body: CustomizedFieldsVOList): ModifyCustomizedFieldsRequest {
        this['body'] = body;
        return this;
    }
}