

export class DeployKeyValueDto {
    public key?: string;
    public constructor() { 
    }
    public withKey(key: string): DeployKeyValueDto {
        this['key'] = key;
        return this;
    }
}