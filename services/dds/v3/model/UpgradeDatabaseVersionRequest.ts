import { UpgradeDatabaseVersionRequestBody } from './UpgradeDatabaseVersionRequestBody';


export class UpgradeDatabaseVersionRequest {
    private 'instance_id'?: string;
    public body?: UpgradeDatabaseVersionRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpgradeDatabaseVersionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpgradeDatabaseVersionRequestBody): UpgradeDatabaseVersionRequest {
        this['body'] = body;
        return this;
    }
}