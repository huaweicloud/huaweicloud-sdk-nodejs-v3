

export class DualActiveInfo {
    public role?: string;
    public status?: string;
    private 'destination_instance_id'?: string;
    private 'destination_region'?: string;
    public constructor() { 
    }
    public withRole(role: string): DualActiveInfo {
        this['role'] = role;
        return this;
    }
    public withStatus(status: string): DualActiveInfo {
        this['status'] = status;
        return this;
    }
    public withDestinationInstanceId(destinationInstanceId: string): DualActiveInfo {
        this['destination_instance_id'] = destinationInstanceId;
        return this;
    }
    public set destinationInstanceId(destinationInstanceId: string  | undefined) {
        this['destination_instance_id'] = destinationInstanceId;
    }
    public get destinationInstanceId(): string | undefined {
        return this['destination_instance_id'];
    }
    public withDestinationRegion(destinationRegion: string): DualActiveInfo {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
}