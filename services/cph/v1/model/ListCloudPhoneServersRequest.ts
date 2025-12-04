

export class ListCloudPhoneServersRequest {
    public offset?: number;
    public limit?: number;
    private 'server_name'?: string;
    private 'server_id'?: string;
    private 'network_version'?: string;
    private 'phone_model_name'?: string;
    private 'create_since'?: number;
    private 'create_until'?: number;
    public status?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ListCloudPhoneServersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCloudPhoneServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withServerName(serverName: string): ListCloudPhoneServersRequest {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withServerId(serverId: string): ListCloudPhoneServersRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withNetworkVersion(networkVersion: string): ListCloudPhoneServersRequest {
        this['network_version'] = networkVersion;
        return this;
    }
    public set networkVersion(networkVersion: string  | undefined) {
        this['network_version'] = networkVersion;
    }
    public get networkVersion(): string | undefined {
        return this['network_version'];
    }
    public withPhoneModelName(phoneModelName: string): ListCloudPhoneServersRequest {
        this['phone_model_name'] = phoneModelName;
        return this;
    }
    public set phoneModelName(phoneModelName: string  | undefined) {
        this['phone_model_name'] = phoneModelName;
    }
    public get phoneModelName(): string | undefined {
        return this['phone_model_name'];
    }
    public withCreateSince(createSince: number): ListCloudPhoneServersRequest {
        this['create_since'] = createSince;
        return this;
    }
    public set createSince(createSince: number  | undefined) {
        this['create_since'] = createSince;
    }
    public get createSince(): number | undefined {
        return this['create_since'];
    }
    public withCreateUntil(createUntil: number): ListCloudPhoneServersRequest {
        this['create_until'] = createUntil;
        return this;
    }
    public set createUntil(createUntil: number  | undefined) {
        this['create_until'] = createUntil;
    }
    public get createUntil(): number | undefined {
        return this['create_until'];
    }
    public withStatus(status: number): ListCloudPhoneServersRequest {
        this['status'] = status;
        return this;
    }
}