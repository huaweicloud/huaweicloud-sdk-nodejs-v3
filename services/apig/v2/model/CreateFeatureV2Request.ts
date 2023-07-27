import { FeatureToggle } from './FeatureToggle';


export class CreateFeatureV2Request {
    private 'instance_id'?: string;
    public body?: FeatureToggle;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateFeatureV2Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: FeatureToggle): CreateFeatureV2Request {
        this['body'] = body;
        return this;
    }
}