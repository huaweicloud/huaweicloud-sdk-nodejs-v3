

export class DualActiveInfo {
    public role?: string;
    public status?: string;
    private 'destination_instance_id'?: string;
    private 'destination_region'?: string;
    private 'destination_instance_name'?: string;
    private 'destination_instance_node_num'?: string;
    private 'destination_instance_spec_code'?: string;
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
    public withDestinationInstanceName(destinationInstanceName: string): DualActiveInfo {
        this['destination_instance_name'] = destinationInstanceName;
        return this;
    }
    public set destinationInstanceName(destinationInstanceName: string  | undefined) {
        this['destination_instance_name'] = destinationInstanceName;
    }
    public get destinationInstanceName(): string | undefined {
        return this['destination_instance_name'];
    }
    public withDestinationInstanceNodeNum(destinationInstanceNodeNum: string): DualActiveInfo {
        this['destination_instance_node_num'] = destinationInstanceNodeNum;
        return this;
    }
    public set destinationInstanceNodeNum(destinationInstanceNodeNum: string  | undefined) {
        this['destination_instance_node_num'] = destinationInstanceNodeNum;
    }
    public get destinationInstanceNodeNum(): string | undefined {
        return this['destination_instance_node_num'];
    }
    public withDestinationInstanceSpecCode(destinationInstanceSpecCode: string): DualActiveInfo {
        this['destination_instance_spec_code'] = destinationInstanceSpecCode;
        return this;
    }
    public set destinationInstanceSpecCode(destinationInstanceSpecCode: string  | undefined) {
        this['destination_instance_spec_code'] = destinationInstanceSpecCode;
    }
    public get destinationInstanceSpecCode(): string | undefined {
        return this['destination_instance_spec_code'];
    }
}