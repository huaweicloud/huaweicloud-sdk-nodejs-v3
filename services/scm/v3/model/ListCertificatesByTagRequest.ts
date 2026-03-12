import { ListCertificatesByTagRequestBody } from './ListCertificatesByTagRequestBody';


export class ListCertificatesByTagRequest {
    private 'resource_instances'?: string;
    public body?: ListCertificatesByTagRequestBody;
    public constructor(resourceInstances?: string) { 
        this['resource_instances'] = resourceInstances;
    }
    public withResourceInstances(resourceInstances: string): ListCertificatesByTagRequest {
        this['resource_instances'] = resourceInstances;
        return this;
    }
    public set resourceInstances(resourceInstances: string  | undefined) {
        this['resource_instances'] = resourceInstances;
    }
    public get resourceInstances(): string | undefined {
        return this['resource_instances'];
    }
    public withBody(body: ListCertificatesByTagRequestBody): ListCertificatesByTagRequest {
        this['body'] = body;
        return this;
    }
}