import { UninstallApkRequestBody } from './UninstallApkRequestBody';


export class UninstallApkRequest {
    public body?: UninstallApkRequestBody;
    public constructor() { 
    }
    public withBody(body: UninstallApkRequestBody): UninstallApkRequest {
        this['body'] = body;
        return this;
    }
}