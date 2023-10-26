import { ClusterInstance } from './ClusterInstance';
import { Datastore } from './Datastore';
import { Task } from './Task';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterResponse extends SdkResponse {
    public name?: string;
    public id?: string;
    public task?: Task;
    public datastore?: Datastore;
    public instances?: Array<ClusterInstance>;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateClusterResponse {
        this['name'] = name;
        return this;
    }
    public withId(id: string): CreateClusterResponse {
        this['id'] = id;
        return this;
    }
    public withTask(task: Task): CreateClusterResponse {
        this['task'] = task;
        return this;
    }
    public withDatastore(datastore: Datastore): CreateClusterResponse {
        this['datastore'] = datastore;
        return this;
    }
    public withInstances(instances: Array<ClusterInstance>): CreateClusterResponse {
        this['instances'] = instances;
        return this;
    }
}