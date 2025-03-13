

export class SecretDetail {
    public id?: string;
    public name?: string;
    private 'if_update_available'?: boolean;
    private 'secret_status'?: string;
    public status?: string;
    private 'version_id'?: string;
    private 'modified_time'?: number;
    public constructor(id?: string, name?: string, ifUpdateAvailable?: boolean, secretStatus?: string, status?: string, versionId?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['if_update_available'] = ifUpdateAvailable;
        this['secret_status'] = secretStatus;
        this['status'] = status;
        this['version_id'] = versionId;
    }
    public withId(id: string): SecretDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SecretDetail {
        this['name'] = name;
        return this;
    }
    public withIfUpdateAvailable(ifUpdateAvailable: boolean): SecretDetail {
        this['if_update_available'] = ifUpdateAvailable;
        return this;
    }
    public set ifUpdateAvailable(ifUpdateAvailable: boolean  | undefined) {
        this['if_update_available'] = ifUpdateAvailable;
    }
    public get ifUpdateAvailable(): boolean | undefined {
        return this['if_update_available'];
    }
    public withSecretStatus(secretStatus: string): SecretDetail {
        this['secret_status'] = secretStatus;
        return this;
    }
    public set secretStatus(secretStatus: string  | undefined) {
        this['secret_status'] = secretStatus;
    }
    public get secretStatus(): string | undefined {
        return this['secret_status'];
    }
    public withStatus(status: string): SecretDetail {
        this['status'] = status;
        return this;
    }
    public withVersionId(versionId: string): SecretDetail {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withModifiedTime(modifiedTime: number): SecretDetail {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: number  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): number | undefined {
        return this['modified_time'];
    }
}