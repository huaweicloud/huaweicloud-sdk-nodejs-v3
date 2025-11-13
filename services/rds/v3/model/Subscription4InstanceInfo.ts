

export class Subscription4InstanceInfo {
    private 'publication_instance_id'?: string;
    private 'publication_instance_name'?: string;
    public constructor() { 
    }
    public withPublicationInstanceId(publicationInstanceId: string): Subscription4InstanceInfo {
        this['publication_instance_id'] = publicationInstanceId;
        return this;
    }
    public set publicationInstanceId(publicationInstanceId: string  | undefined) {
        this['publication_instance_id'] = publicationInstanceId;
    }
    public get publicationInstanceId(): string | undefined {
        return this['publication_instance_id'];
    }
    public withPublicationInstanceName(publicationInstanceName: string): Subscription4InstanceInfo {
        this['publication_instance_name'] = publicationInstanceName;
        return this;
    }
    public set publicationInstanceName(publicationInstanceName: string  | undefined) {
        this['publication_instance_name'] = publicationInstanceName;
    }
    public get publicationInstanceName(): string | undefined {
        return this['publication_instance_name'];
    }
}