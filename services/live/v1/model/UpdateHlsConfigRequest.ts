import { ModifyHlsConfig } from './ModifyHlsConfig';


export class UpdateHlsConfigRequest {
    public body?: ModifyHlsConfig;
    public constructor() { 
    }
    public withBody(body: ModifyHlsConfig): UpdateHlsConfigRequest {
        this['body'] = body;
        return this;
    }
}