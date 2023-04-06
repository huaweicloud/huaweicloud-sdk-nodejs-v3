import { MaintenanceWindow } from './MaintenanceWindow';


export class UpdateMaintenanceWindowRequest {
    private 'cluster_id': string | undefined;
    public body?: MaintenanceWindow;
    public constructor(clusterId?: any) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): UpdateMaintenanceWindowRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId() {
        return this['cluster_id'];
    }
    public withBody(body: MaintenanceWindow): UpdateMaintenanceWindowRequest {
        this['body'] = body;
        return this;
    }
}