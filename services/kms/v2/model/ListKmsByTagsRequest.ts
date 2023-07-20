import { ListKmsByTagsRequestBody } from './ListKmsByTagsRequestBody';


export class ListKmsByTagsRequest {
    private 'resource_instances'?: string;
    public body?: ListKmsByTagsRequestBody;
    public constructor(resourceInstances?: string) { 
        this['resource_instances'] = resourceInstances;
    }
    public withResourceInstances(resourceInstances: string): ListKmsByTagsRequest {
        this['resource_instances'] = resourceInstances;
        return this;
    }
    public set resourceInstances(resourceInstances: string  | undefined) {
        this['resource_instances'] = resourceInstances;
    }
    public get resourceInstances(): string | undefined {
        return this['resource_instances'];
    }
    public withBody(body: ListKmsByTagsRequestBody): ListKmsByTagsRequest {
        this['body'] = body;
        return this;
    }
}