

export class CloudConnectionId {
    private 'cloud_connection_id'?: string;
    public constructor(cloudConnectionId?: string) { 
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public withCloudConnectionId(cloudConnectionId: string): CloudConnectionId {
        this['cloud_connection_id'] = cloudConnectionId;
        return this;
    }
    public set cloudConnectionId(cloudConnectionId: string  | undefined) {
        this['cloud_connection_id'] = cloudConnectionId;
    }
    public get cloudConnectionId(): string | undefined {
        return this['cloud_connection_id'];
    }
}