import { UpdateEnterpriseProjectCollectRequestBody } from './UpdateEnterpriseProjectCollectRequestBody';


export class UpdateEnterpriseProjectCollectRequest {
    public body?: UpdateEnterpriseProjectCollectRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateEnterpriseProjectCollectRequestBody): UpdateEnterpriseProjectCollectRequest {
        this['body'] = body;
        return this;
    }
}