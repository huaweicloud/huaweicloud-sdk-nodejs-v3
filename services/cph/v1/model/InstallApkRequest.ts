import { InstallApkRequestBody } from './InstallApkRequestBody';


export class InstallApkRequest {
    public body?: InstallApkRequestBody;
    public constructor() { 
    }
    public withBody(body: InstallApkRequestBody): InstallApkRequest {
        this['body'] = body;
        return this;
    }
}