import { CreateCloudConnection } from './CreateCloudConnection';


export class CreateCloudConnectionRequestBody {
    private 'cloud_connection'?: CreateCloudConnection;
    public constructor(cloudConnection?: CreateCloudConnection) { 
        this['cloud_connection'] = cloudConnection;
    }
    public withCloudConnection(cloudConnection: CreateCloudConnection): CreateCloudConnectionRequestBody {
        this['cloud_connection'] = cloudConnection;
        return this;
    }
    public set cloudConnection(cloudConnection: CreateCloudConnection  | undefined) {
        this['cloud_connection'] = cloudConnection;
    }
    public get cloudConnection(): CreateCloudConnection | undefined {
        return this['cloud_connection'];
    }
}