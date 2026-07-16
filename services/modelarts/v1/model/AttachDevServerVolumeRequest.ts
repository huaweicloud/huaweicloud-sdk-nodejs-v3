import { AttachServerVolumeRequest } from './AttachServerVolumeRequest';


export class AttachDevServerVolumeRequest {
    public id?: string;
    public body?: AttachServerVolumeRequest;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): AttachDevServerVolumeRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: AttachServerVolumeRequest): AttachDevServerVolumeRequest {
        this['body'] = body;
        return this;
    }
}