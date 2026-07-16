

export class DevServerTaskResponse {
    public id?: string;
    private 'server_id'?: string;
    private 'server_name'?: string;
    public status?: string;
    private 'cloud_server'?: { [key: string]: string; };
    public message?: string;
    private 'create_at'?: string;
    private 'update_at'?: string;
    public constructor() { 
    }
    public withId(id: string): DevServerTaskResponse {
        this['id'] = id;
        return this;
    }
    public withServerId(serverId: string): DevServerTaskResponse {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withServerName(serverName: string): DevServerTaskResponse {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withStatus(status: string): DevServerTaskResponse {
        this['status'] = status;
        return this;
    }
    public withCloudServer(cloudServer: { [key: string]: string; }): DevServerTaskResponse {
        this['cloud_server'] = cloudServer;
        return this;
    }
    public set cloudServer(cloudServer: { [key: string]: string; }  | undefined) {
        this['cloud_server'] = cloudServer;
    }
    public get cloudServer(): { [key: string]: string; } | undefined {
        return this['cloud_server'];
    }
    public withMessage(message: string): DevServerTaskResponse {
        this['message'] = message;
        return this;
    }
    public withCreateAt(createAt: string): DevServerTaskResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: string  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): string | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: string): DevServerTaskResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
}