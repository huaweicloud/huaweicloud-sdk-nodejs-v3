import { LogReplayDatabaseReq } from './LogReplayDatabaseReq';


export class RestoreLogReplayDatabaseRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public body?: LogReplayDatabaseReq;
    public constructor(instanceId?: string, xLanguage?: string) { 
        this['instance_id'] = instanceId;
        this['X-Language'] = xLanguage;
    }
    public withInstanceId(instanceId: string): RestoreLogReplayDatabaseRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): RestoreLogReplayDatabaseRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: LogReplayDatabaseReq): RestoreLogReplayDatabaseRequest {
        this['body'] = body;
        return this;
    }
}