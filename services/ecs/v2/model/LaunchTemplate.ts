

export class LaunchTemplate {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'default_version'?: number;
    private 'latest_version'?: number;
    public constructor(id?: string, name?: string, description?: string, createdAt?: string, updatedAt?: string, defaultVersion?: number, latestVersion?: number) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['default_version'] = defaultVersion;
        this['latest_version'] = latestVersion;
    }
    public withId(id: string): LaunchTemplate {
        this['id'] = id;
        return this;
    }
    public withName(name: string): LaunchTemplate {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): LaunchTemplate {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): LaunchTemplate {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): LaunchTemplate {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withDefaultVersion(defaultVersion: number): LaunchTemplate {
        this['default_version'] = defaultVersion;
        return this;
    }
    public set defaultVersion(defaultVersion: number  | undefined) {
        this['default_version'] = defaultVersion;
    }
    public get defaultVersion(): number | undefined {
        return this['default_version'];
    }
    public withLatestVersion(latestVersion: number): LaunchTemplate {
        this['latest_version'] = latestVersion;
        return this;
    }
    public set latestVersion(latestVersion: number  | undefined) {
        this['latest_version'] = latestVersion;
    }
    public get latestVersion(): number | undefined {
        return this['latest_version'];
    }
}