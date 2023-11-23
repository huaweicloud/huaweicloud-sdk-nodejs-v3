import { PostgresqlPreCheckUpgradeMajorVersionReq } from './PostgresqlPreCheckUpgradeMajorVersionReq';


export class UpgradeDbMajorVersionPreCheckRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public body?: PostgresqlPreCheckUpgradeMajorVersionReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpgradeDbMajorVersionPreCheckRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): UpgradeDbMajorVersionPreCheckRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: PostgresqlPreCheckUpgradeMajorVersionReq): UpgradeDbMajorVersionPreCheckRequest {
        this['body'] = body;
        return this;
    }
}