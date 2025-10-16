import { TmsResourceInstancesRequest } from './TmsResourceInstancesRequest';


export class ConfirmTmsResourceInstancesRequest {
    private 'Content-Type'?: string;
    private 'resource_type'?: string;
    public body?: TmsResourceInstancesRequest;
    public constructor(contentType?: string, resourceType?: string) { 
        this['Content-Type'] = contentType;
        this['resource_type'] = resourceType;
    }
    public withContentType(contentType: string): ConfirmTmsResourceInstancesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withResourceType(resourceType: string): ConfirmTmsResourceInstancesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withBody(body: TmsResourceInstancesRequest): ConfirmTmsResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}