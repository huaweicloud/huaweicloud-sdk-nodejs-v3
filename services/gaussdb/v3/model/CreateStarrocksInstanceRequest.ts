import { StarRocksCreateRequest } from './StarRocksCreateRequest';


export class CreateStarrocksInstanceRequest {
    private 'instance_id'?: string;
    private 'X-Language'?: string;
    public body?: StarRocksCreateRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateStarrocksInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXLanguage(xLanguage: string): CreateStarrocksInstanceRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withBody(body: StarRocksCreateRequest): CreateStarrocksInstanceRequest {
        this['body'] = body;
        return this;
    }
}