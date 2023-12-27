import { AttentionDO } from './AttentionDO';


export class CreateAttentionRequest {
    public body?: AttentionDO;
    public constructor() { 
    }
    public withBody(body: AttentionDO): CreateAttentionRequest {
        this['body'] = body;
        return this;
    }
}