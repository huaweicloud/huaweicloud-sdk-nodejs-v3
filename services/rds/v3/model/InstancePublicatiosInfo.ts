

export class InstancePublicatiosInfo {
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'publication_id'?: string;
    private 'publication_name'?: string;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): InstancePublicatiosInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): InstancePublicatiosInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withPublicationId(publicationId: string): InstancePublicatiosInfo {
        this['publication_id'] = publicationId;
        return this;
    }
    public set publicationId(publicationId: string  | undefined) {
        this['publication_id'] = publicationId;
    }
    public get publicationId(): string | undefined {
        return this['publication_id'];
    }
    public withPublicationName(publicationName: string): InstancePublicatiosInfo {
        this['publication_name'] = publicationName;
        return this;
    }
    public set publicationName(publicationName: string  | undefined) {
        this['publication_name'] = publicationName;
    }
    public get publicationName(): string | undefined {
        return this['publication_name'];
    }
}