

export class DeployKeyDto {
    public id?: number;
    public title?: string;
    public fingerprint?: string;
    private 'created_at'?: string;
    public constructor() { 
    }
    public withId(id: number): DeployKeyDto {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): DeployKeyDto {
        this['title'] = title;
        return this;
    }
    public withFingerprint(fingerprint: string): DeployKeyDto {
        this['fingerprint'] = fingerprint;
        return this;
    }
    public withCreatedAt(createdAt: string): DeployKeyDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}