import { UploadDatabaseSslFileRequest } from './UploadDatabaseSslFileRequest';


export class AddDatabaseSslKeyRequest {
    private 'instance_id'?: string;
    private 'db_id'?: string;
    public body?: UploadDatabaseSslFileRequest;
    public constructor(instanceId?: string, dbId?: string) { 
        this['instance_id'] = instanceId;
        this['db_id'] = dbId;
    }
    public withInstanceId(instanceId: string): AddDatabaseSslKeyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDbId(dbId: string): AddDatabaseSslKeyRequest {
        this['db_id'] = dbId;
        return this;
    }
    public set dbId(dbId: string  | undefined) {
        this['db_id'] = dbId;
    }
    public get dbId(): string | undefined {
        return this['db_id'];
    }
    public withBody(body: UploadDatabaseSslFileRequest): AddDatabaseSslKeyRequest {
        this['body'] = body;
        return this;
    }
}