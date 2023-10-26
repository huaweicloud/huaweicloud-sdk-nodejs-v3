import { DdosConfig } from './DdosConfig';


export class CreateDefaultConfigRequest {
    public body?: DdosConfig;
    public constructor() { 
    }
    public withBody(body: DdosConfig): CreateDefaultConfigRequest {
        this['body'] = body;
        return this;
    }
}