

export class ShowMrsFlavorsRequest {
    private 'version_name'?: string;
    public constructor(versionName?: string) { 
        this['version_name'] = versionName;
    }
    public withVersionName(versionName: string): ShowMrsFlavorsRequest {
        this['version_name'] = versionName;
        return this;
    }
    public set versionName(versionName: string  | undefined) {
        this['version_name'] = versionName;
    }
    public get versionName(): string | undefined {
        return this['version_name'];
    }
}