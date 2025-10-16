import { AuthObject } from './AuthObject';


export class SwitchCpcsTokenRequest {
    public body?: AuthObject;
    public constructor() { 
    }
    public withBody(body: AuthObject): SwitchCpcsTokenRequest {
        this['body'] = body;
        return this;
    }
}