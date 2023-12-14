import { ModifyDelayConfig } from './ModifyDelayConfig';


export class UpdateDelayConfigRequest {
    public body?: ModifyDelayConfig;
    public constructor() { 
    }
    public withBody(body: ModifyDelayConfig): UpdateDelayConfigRequest {
        this['body'] = body;
        return this;
    }
}