import { ListResourceInstancesRequestBody } from './ListResourceInstancesRequestBody';


export class ListResourceInstancesRequest {
    private 'resource_instances': string | undefined;
    public body?: ListResourceInstancesRequestBody;
    public constructor(resourceInstances?: any) { 
        this['resource_instances'] = resourceInstances;
    }
    public withResourceInstances(resourceInstances: string): ListResourceInstancesRequest {
        this['resource_instances'] = resourceInstances;
        return this;
    }
    public set resourceInstances(resourceInstances: string | undefined) {
        this['resource_instances'] = resourceInstances;
    }
    public get resourceInstances() {
        return this['resource_instances'];
    }
    public withBody(body: ListResourceInstancesRequestBody): ListResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}