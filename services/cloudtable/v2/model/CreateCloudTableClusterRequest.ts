import { CreateClusterRequestBody } from './CreateClusterRequestBody';


export class CreateCloudTableClusterRequest {
    private 'X-Language'?: string;
    public body?: CreateClusterRequestBody;
    public constructor() { 
    }
    public withXLanguage(xLanguage: string): CreateCloudTableClusterRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateClusterRequestBody): CreateCloudTableClusterRequest {
        this['body'] = body;
        return this;
    }
}