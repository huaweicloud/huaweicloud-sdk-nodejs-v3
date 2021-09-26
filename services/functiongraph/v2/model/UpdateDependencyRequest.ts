import { UpdateDependencyRequestBody } from './UpdateDependencyRequestBody';


export class UpdateDependencyRequest {
    private 'depend_id': string | undefined;
    public body?: UpdateDependencyRequestBody;
    public constructor(dependId?: any) { 
        this['depend_id'] = dependId;
    }
    public withDependId(dependId: string): UpdateDependencyRequest {
        this['depend_id'] = dependId;
        return this;
    }
    public set dependId(dependId: string | undefined) {
        this['depend_id'] = dependId;
    }
    public get dependId() {
        return this['depend_id'];
    }
    public withBody(body: UpdateDependencyRequestBody): UpdateDependencyRequest {
        this['body'] = body;
        return this;
    }
}