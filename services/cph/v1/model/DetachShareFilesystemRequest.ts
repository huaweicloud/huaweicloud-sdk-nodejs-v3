import { DetachShareFilesystemRequestBody } from './DetachShareFilesystemRequestBody';


export class DetachShareFilesystemRequest {
    public body?: DetachShareFilesystemRequestBody;
    public constructor() { 
    }
    public withBody(body: DetachShareFilesystemRequestBody): DetachShareFilesystemRequest {
        this['body'] = body;
        return this;
    }
}