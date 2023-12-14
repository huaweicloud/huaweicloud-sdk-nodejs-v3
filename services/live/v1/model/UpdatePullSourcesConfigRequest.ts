import { ModifyPullSourcesConfig } from './ModifyPullSourcesConfig';


export class UpdatePullSourcesConfigRequest {
    public body?: ModifyPullSourcesConfig;
    public constructor() { 
    }
    public withBody(body: ModifyPullSourcesConfig): UpdatePullSourcesConfigRequest {
        this['body'] = body;
        return this;
    }
}