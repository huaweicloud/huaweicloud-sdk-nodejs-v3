import { StarRocksDatabaseUserPSinfo } from './StarRocksDatabaseUserPSinfo';


export class UpdateStarRocksDatabaseUserPermissionRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public body?: StarRocksDatabaseUserPSinfo;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateStarRocksDatabaseUserPermissionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): UpdateStarRocksDatabaseUserPermissionRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: StarRocksDatabaseUserPSinfo): UpdateStarRocksDatabaseUserPermissionRequest {
        this['body'] = body;
        return this;
    }
}