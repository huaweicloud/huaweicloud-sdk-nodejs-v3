import { AttachShareFilesystemRequestBody } from './AttachShareFilesystemRequestBody';


export class AttachShareFilesystemRequest {
    public body?: AttachShareFilesystemRequestBody;
    public constructor() { 
    }
    public withBody(body: AttachShareFilesystemRequestBody): AttachShareFilesystemRequest {
        this['body'] = body;
        return this;
    }
}