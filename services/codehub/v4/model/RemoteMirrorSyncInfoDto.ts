

export class RemoteMirrorSyncInfoDto {
    public username?: string;
    public password?: string;
    private 'endpoint_uuid'?: string;
    public constructor() { 
    }
    public withUsername(username: string): RemoteMirrorSyncInfoDto {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): RemoteMirrorSyncInfoDto {
        this['password'] = password;
        return this;
    }
    public withEndpointUuid(endpointUuid: string): RemoteMirrorSyncInfoDto {
        this['endpoint_uuid'] = endpointUuid;
        return this;
    }
    public set endpointUuid(endpointUuid: string  | undefined) {
        this['endpoint_uuid'] = endpointUuid;
    }
    public get endpointUuid(): string | undefined {
        return this['endpoint_uuid'];
    }
}