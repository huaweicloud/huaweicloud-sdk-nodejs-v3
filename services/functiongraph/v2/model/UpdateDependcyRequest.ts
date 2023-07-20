import { UpdateDependencyRequestBody } from './UpdateDependencyRequestBody';


export class UpdateDependcyRequest {
    private 'depend_id'?: string;
    public body?: UpdateDependencyRequestBody;
    public constructor(dependId?: string) { 
        this['depend_id'] = dependId;
    }
    public withDependId(dependId: string): UpdateDependcyRequest {
        this['depend_id'] = dependId;
        return this;
    }
    public set dependId(dependId: string  | undefined) {
        this['depend_id'] = dependId;
    }
    public get dependId(): string | undefined {
        return this['depend_id'];
    }
    public withBody(body: UpdateDependencyRequestBody): UpdateDependcyRequest {
        this['body'] = body;
        return this;
    }
}