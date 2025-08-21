

export class DeployKeyParamsDto {
    public title?: string;
    public key?: string;
    public constructor() { 
    }
    public withTitle(title: string): DeployKeyParamsDto {
        this['title'] = title;
        return this;
    }
    public withKey(key: string): DeployKeyParamsDto {
        this['key'] = key;
        return this;
    }
}