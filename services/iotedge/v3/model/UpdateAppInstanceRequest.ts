import { UpdateAppInstanceRequestDTO } from './UpdateAppInstanceRequestDTO';


export class UpdateAppInstanceRequest {
    private 'cluster_id'?: string;
    private 'app_instance_id'?: string;
    public body?: UpdateAppInstanceRequestDTO;
    public constructor(clusterId?: string, appInstanceId?: string) { 
        this['cluster_id'] = clusterId;
        this['app_instance_id'] = appInstanceId;
    }
    public withClusterId(clusterId: string): UpdateAppInstanceRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withAppInstanceId(appInstanceId: string): UpdateAppInstanceRequest {
        this['app_instance_id'] = appInstanceId;
        return this;
    }
    public set appInstanceId(appInstanceId: string  | undefined) {
        this['app_instance_id'] = appInstanceId;
    }
    public get appInstanceId(): string | undefined {
        return this['app_instance_id'];
    }
    public withBody(body: UpdateAppInstanceRequestDTO): UpdateAppInstanceRequest {
        this['body'] = body;
        return this;
    }
}