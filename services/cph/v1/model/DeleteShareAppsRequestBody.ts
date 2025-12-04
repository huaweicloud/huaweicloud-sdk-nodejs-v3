

export class DeleteShareAppsRequestBody {
    private 'package_name'?: string;
    private 'server_ids'?: Array<string>;
    public constructor(packageName?: string, serverIds?: Array<string>) { 
        this['package_name'] = packageName;
        this['server_ids'] = serverIds;
    }
    public withPackageName(packageName: string): DeleteShareAppsRequestBody {
        this['package_name'] = packageName;
        return this;
    }
    public set packageName(packageName: string  | undefined) {
        this['package_name'] = packageName;
    }
    public get packageName(): string | undefined {
        return this['package_name'];
    }
    public withServerIds(serverIds: Array<string>): DeleteShareAppsRequestBody {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
}