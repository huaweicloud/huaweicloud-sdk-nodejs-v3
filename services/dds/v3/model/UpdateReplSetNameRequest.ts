import { MongoUpdateReplSetV3RequestBody } from './MongoUpdateReplSetV3RequestBody';


export class UpdateReplSetNameRequest {
    private 'instance_id'?: string;
    public body?: MongoUpdateReplSetV3RequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateReplSetNameRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: MongoUpdateReplSetV3RequestBody): UpdateReplSetNameRequest {
        this['body'] = body;
        return this;
    }
}