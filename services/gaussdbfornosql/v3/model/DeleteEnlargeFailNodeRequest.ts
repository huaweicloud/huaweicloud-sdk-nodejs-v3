import { DeleteEnlargeFailNodeRequestBody } from './DeleteEnlargeFailNodeRequestBody';


export class DeleteEnlargeFailNodeRequest {
    private 'instance_id'?: string;
    public body?: DeleteEnlargeFailNodeRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteEnlargeFailNodeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: DeleteEnlargeFailNodeRequestBody): DeleteEnlargeFailNodeRequest {
        this['body'] = body;
        return this;
    }
}