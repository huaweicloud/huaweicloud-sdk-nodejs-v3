import { CreateClusterRequestBody } from './CreateClusterRequestBody';


export class CreateClusterRequest {
    private 'X-Language': string | undefined;
    public body?: CreateClusterRequestBody;
    public constructor(xLanguage?: any) { 
        this['X-Language'] = xLanguage;
    }
    public withXLanguage(xLanguage: string): CreateClusterRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: CreateClusterRequestBody): CreateClusterRequest {
        this['body'] = body;
        return this;
    }
}