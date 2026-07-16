

export class ListDevServerImagesRequest {
    private 'server_type'?: string;
    private 'flavor_name'?: string;
    public constructor() { 
    }
    public withServerType(serverType: string): ListDevServerImagesRequest {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): string | undefined {
        return this['server_type'];
    }
    public withFlavorName(flavorName: string): ListDevServerImagesRequest {
        this['flavor_name'] = flavorName;
        return this;
    }
    public set flavorName(flavorName: string  | undefined) {
        this['flavor_name'] = flavorName;
    }
    public get flavorName(): string | undefined {
        return this['flavor_name'];
    }
}