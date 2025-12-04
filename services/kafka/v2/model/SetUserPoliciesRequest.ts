import { SetUserPoliciesReq } from './SetUserPoliciesReq';


export class SetUserPoliciesRequest {
    public engine?: SetUserPoliciesRequestEngineEnum | string;
    private 'instance_id'?: string;
    private 'user_name'?: string;
    public body?: SetUserPoliciesReq;
    public constructor(engine?: string, instanceId?: string, userName?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['user_name'] = userName;
    }
    public withEngine(engine: SetUserPoliciesRequestEngineEnum | string): SetUserPoliciesRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): SetUserPoliciesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withUserName(userName: string): SetUserPoliciesRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withBody(body: SetUserPoliciesReq): SetUserPoliciesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SetUserPoliciesRequestEngineEnum {
    KAFKA = 'kafka'
}
