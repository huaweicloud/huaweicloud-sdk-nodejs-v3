import { AttachDevServerPortsRequestBody } from './AttachDevServerPortsRequestBody';


export class AttachDevServerPortRequest {
    public id?: string;
    public body?: AttachDevServerPortsRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): AttachDevServerPortRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: AttachDevServerPortsRequestBody): AttachDevServerPortRequest {
        this['body'] = body;
        return this;
    }
}