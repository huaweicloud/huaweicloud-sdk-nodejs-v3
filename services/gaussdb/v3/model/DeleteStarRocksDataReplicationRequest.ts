import { DeleteStarRocksDataReplication } from './DeleteStarRocksDataReplication';


export class DeleteStarRocksDataReplicationRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public body?: DeleteStarRocksDataReplication;
    public constructor(instanceId?: string, xLanguage?: string) { 
        this['instance_id'] = instanceId;
        this['X-Language'] = xLanguage;
    }
    public withInstanceId(instanceId: string): DeleteStarRocksDataReplicationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): DeleteStarRocksDataReplicationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: DeleteStarRocksDataReplication): DeleteStarRocksDataReplicationRequest {
        this['body'] = body;
        return this;
    }
}