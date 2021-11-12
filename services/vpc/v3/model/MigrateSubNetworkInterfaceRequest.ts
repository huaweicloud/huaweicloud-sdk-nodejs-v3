import { MigrateSubNetworkInterfaceRequestBody } from './MigrateSubNetworkInterfaceRequestBody';


export class MigrateSubNetworkInterfaceRequest {
    public body?: MigrateSubNetworkInterfaceRequestBody;
    public constructor() { 
    }
    public withBody(body: MigrateSubNetworkInterfaceRequestBody): MigrateSubNetworkInterfaceRequest {
        this['body'] = body;
        return this;
    }
}