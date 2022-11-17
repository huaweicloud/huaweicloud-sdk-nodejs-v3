

export class CreateRedislogDownloadLinkRequest {
    private 'instance_id': string | undefined;
    public id: string;
    public constructor(instanceId?: any, id?: any) { 
        this['instance_id'] = instanceId;
        this['id'] = id;
    }
    public withInstanceId(instanceId: string): CreateRedislogDownloadLinkRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withId(id: string): CreateRedislogDownloadLinkRequest {
        this['id'] = id;
        return this;
    }
}