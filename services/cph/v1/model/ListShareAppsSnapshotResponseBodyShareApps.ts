

export class ListShareAppsSnapshotResponseBodyShareApps {
    private 'package_name'?: string;
    public versions?: Array<string>;
    public constructor() { 
    }
    public withPackageName(packageName: string): ListShareAppsSnapshotResponseBodyShareApps {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withVersions(versions: Array<string>): ListShareAppsSnapshotResponseBodyShareApps {
        this['versions'] = versions;
        return this;
    }
}