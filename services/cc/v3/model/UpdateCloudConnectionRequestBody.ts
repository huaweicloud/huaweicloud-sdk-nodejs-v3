import { UpdateCloudConnection } from './UpdateCloudConnection';


export class UpdateCloudConnectionRequestBody {
    private 'cloud_connection'?: UpdateCloudConnection;
    public constructor(cloudConnection?: UpdateCloudConnection) { 
        this['cloud_connection'] = cloudConnection;
    }
    public withCloudConnection(cloudConnection: UpdateCloudConnection): UpdateCloudConnectionRequestBody {
        this['cloud_connection'] = cloudConnection;
        return this;
    }
    public set cloudConnection(cloudConnection: UpdateCloudConnection  | undefined) {
        this['cloud_connection'] = cloudConnection;
    }
    public get cloudConnection(): UpdateCloudConnection | undefined {
        return this['cloud_connection'];
    }
}