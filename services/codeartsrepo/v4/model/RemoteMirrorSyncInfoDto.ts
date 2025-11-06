

export class RemoteMirrorSyncInfoDto {
    public username?: string;
    public password?: string;
    private 'endpoint_uuid'?: string;
    private 'force_fetch'?: boolean;
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
    public withForceFetch(forceFetch: boolean): RemoteMirrorSyncInfoDto {
        this['force_fetch'] = forceFetch;
        return this;
    }
    public set forceFetch(forceFetch: boolean  | undefined) {
        this['force_fetch'] = forceFetch;
    }
    public get forceFetch(): boolean | undefined {
        return this['force_fetch'];
    }
}