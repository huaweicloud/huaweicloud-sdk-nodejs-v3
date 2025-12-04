

export class ListCloudPhonesRequest {
    public offset?: number;
    public limit?: number;
    private 'phone_name'?: string;
    private 'server_id'?: string;
    public status?: number;
    public type?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListCloudPhonesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCloudPhonesRequest {
        this['limit'] = limit;
        return this;
    }
    public withPhoneName(phoneName: string): ListCloudPhonesRequest {
        this['phone_name'] = phoneName;
        return this;
    }
    public set phoneName(phoneName: string  | undefined) {
        this['phone_name'] = phoneName;
    }
    public get phoneName(): string | undefined {
        return this['phone_name'];
    }
    public withServerId(serverId: string): ListCloudPhonesRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withStatus(status: number): ListCloudPhonesRequest {
        this['status'] = status;
        return this;
    }
    public withType(type: number): ListCloudPhonesRequest {
        this['type'] = type;
        return this;
    }
}