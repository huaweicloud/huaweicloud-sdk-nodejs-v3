

export class PublicIpInfoResponse {
    public id?: string;
    public address?: string;
    public status?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'bandwidth_size'?: string;
    public constructor() { 
    }
    public withId(id: string): PublicIpInfoResponse {
        this['id'] = id;
        return this;
    }
    public withAddress(address: string): PublicIpInfoResponse {
        this['address'] = address;
        return this;
    }
    public withStatus(status: string): PublicIpInfoResponse {
        this['status'] = status;
        return this;
    }
    public withInstanceId(instanceId: string): PublicIpInfoResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): PublicIpInfoResponse {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withBandwidthSize(bandwidthSize: string): PublicIpInfoResponse {
        this['bandwidth_size'] = bandwidthSize;
        return this;
    }
    public set bandwidthSize(bandwidthSize: string  | undefined) {
        this['bandwidth_size'] = bandwidthSize;
    }
    public get bandwidthSize(): string | undefined {
        return this['bandwidth_size'];
    }
}