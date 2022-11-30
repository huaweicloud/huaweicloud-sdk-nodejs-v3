import { UpdateServiceSetUsingPUTRequestBody } from './UpdateServiceSetUsingPUTRequestBody';


export class UpdateServiceSetUsingPutRequest {
    private 'project_id': string | undefined;
    private 'set_id': string | undefined;
    public body?: UpdateServiceSetUsingPUTRequestBody;
    public constructor(projectId?: any, setId?: any) { 
        this['project_id'] = projectId;
        this['set_id'] = setId;
    }
    public withProjectId(projectId: string): UpdateServiceSetUsingPutRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withSetId(setId: string): UpdateServiceSetUsingPutRequest {
        this['set_id'] = setId;
        return this;
    }
    public set setId(setId: string | undefined) {
        this['set_id'] = setId;
    }
    public get setId() {
        return this['set_id'];
    }
    public withBody(body: UpdateServiceSetUsingPUTRequestBody): UpdateServiceSetUsingPutRequest {
        this['body'] = body;
        return this;
    }
}