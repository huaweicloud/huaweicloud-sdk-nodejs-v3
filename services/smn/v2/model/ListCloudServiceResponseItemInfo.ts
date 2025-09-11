

export class ListCloudServiceResponseItemInfo {
    public name?: string;
    private 'show_name'?: string;
    public constructor(name?: string, showName?: string) { 
        this['name'] = name;
        this['show_name'] = showName;
    }
    public withName(name: string): ListCloudServiceResponseItemInfo {
        this['name'] = name;
        return this;
    }
    public withShowName(showName: string): ListCloudServiceResponseItemInfo {
        this['show_name'] = showName;
        return this;
    }
    public set showName(showName: string  | undefined) {
        this['show_name'] = showName;
    }
    public get showName(): string | undefined {
        return this['show_name'];
    }
}