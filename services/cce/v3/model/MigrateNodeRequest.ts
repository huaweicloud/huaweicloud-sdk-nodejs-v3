import { MigrateNodesTask } from './MigrateNodesTask';


export class MigrateNodeRequest {
    private 'cluster_id'?: string;
    private 'target_cluster_id'?: string;
    private 'Content-Type'?: string;
    public body?: MigrateNodesTask;
    public constructor(clusterId?: string, targetClusterId?: string, contentType?: string) { 
        this['cluster_id'] = clusterId;
        this['target_cluster_id'] = targetClusterId;
        this['Content-Type'] = contentType;
    }
    public withClusterId(clusterId: string): MigrateNodeRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withTargetClusterId(targetClusterId: string): MigrateNodeRequest {
        this['target_cluster_id'] = targetClusterId;
        return this;
    }
    public set targetClusterId(targetClusterId: string  | undefined) {
        this['target_cluster_id'] = targetClusterId;
    }
    public get targetClusterId(): string | undefined {
        return this['target_cluster_id'];
    }
    public withContentType(contentType: string): MigrateNodeRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: MigrateNodesTask): MigrateNodeRequest {
        this['body'] = body;
        return this;
    }
}