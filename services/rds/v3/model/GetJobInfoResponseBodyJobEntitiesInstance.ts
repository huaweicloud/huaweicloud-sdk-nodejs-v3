import { GetJobInfoResponseBodyJobEntitiesInstanceDatastore } from './GetJobInfoResponseBodyJobEntitiesInstanceDatastore';


export class GetJobInfoResponseBodyJobEntitiesInstance {
    public endpoint?: string;
    public type?: string;
    public datastore?: GetJobInfoResponseBodyJobEntitiesInstanceDatastore;
    private 'replica_of'?: string;
    public constructor() { 
    }
    public withEndpoint(endpoint: string): GetJobInfoResponseBodyJobEntitiesInstance {
        this['endpoint'] = endpoint;
        return this;
    }
    public withType(type: string): GetJobInfoResponseBodyJobEntitiesInstance {
        this['type'] = type;
        return this;
    }
    public withDatastore(datastore: GetJobInfoResponseBodyJobEntitiesInstanceDatastore): GetJobInfoResponseBodyJobEntitiesInstance {
        this['datastore'] = datastore;
        return this;
    }
    public withReplicaOf(replicaOf: string): GetJobInfoResponseBodyJobEntitiesInstance {
        this['replica_of'] = replicaOf;
        return this;
    }
    public set replicaOf(replicaOf: string  | undefined) {
        this['replica_of'] = replicaOf;
    }
    public get replicaOf(): string | undefined {
        return this['replica_of'];
    }
}