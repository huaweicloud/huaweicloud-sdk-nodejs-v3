

export class DualActiveRequestBody {
    private 'destination_region'?: string;
    private 'destination_instance_id'?: string;
    public constructor(destinationRegion?: string, destinationInstanceId?: string) { 
        this['destination_region'] = destinationRegion;
        this['destination_instance_id'] = destinationInstanceId;
    }
    public withDestinationRegion(destinationRegion: string): DualActiveRequestBody {
        this['destination_region'] = destinationRegion;
        return this;
    }
    public set destinationRegion(destinationRegion: string  | undefined) {
        this['destination_region'] = destinationRegion;
    }
    public get destinationRegion(): string | undefined {
        return this['destination_region'];
    }
    public withDestinationInstanceId(destinationInstanceId: string): DualActiveRequestBody {
        this['destination_instance_id'] = destinationInstanceId;
        return this;
    }
    public set destinationInstanceId(destinationInstanceId: string  | undefined) {
        this['destination_instance_id'] = destinationInstanceId;
    }
    public get destinationInstanceId(): string | undefined {
        return this['destination_instance_id'];
    }
}