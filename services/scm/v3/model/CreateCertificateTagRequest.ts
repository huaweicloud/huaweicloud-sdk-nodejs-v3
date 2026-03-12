import { CreateCertificateTagRequestBody } from './CreateCertificateTagRequestBody';


export class CreateCertificateTagRequest {
    private 'resource_id'?: string;
    public body?: CreateCertificateTagRequestBody;
    public constructor(resourceId?: string) { 
        this['resource_id'] = resourceId;
    }
    public withResourceId(resourceId: string): CreateCertificateTagRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: CreateCertificateTagRequestBody): CreateCertificateTagRequest {
        this['body'] = body;
        return this;
    }
}