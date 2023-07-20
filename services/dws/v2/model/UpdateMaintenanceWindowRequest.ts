import { MaintenanceWindow } from './MaintenanceWindow';


export class UpdateMaintenanceWindowRequest {
    private 'cluster_id'?: string;
    public body?: MaintenanceWindow;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateMaintenanceWindowRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: MaintenanceWindow): UpdateMaintenanceWindowRequest {
        this['body'] = body;
        return this;
    }
}