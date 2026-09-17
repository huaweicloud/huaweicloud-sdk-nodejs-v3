import { OperationalTaskConfiguration } from './OperationalTaskConfiguration';


export class UpdateOperationalTaskConfigRequest {
    private 'cluster_id'?: string;
    public body?: OperationalTaskConfiguration;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateOperationalTaskConfigRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: OperationalTaskConfiguration): UpdateOperationalTaskConfigRequest {
        this['body'] = body;
        return this;
    }
}