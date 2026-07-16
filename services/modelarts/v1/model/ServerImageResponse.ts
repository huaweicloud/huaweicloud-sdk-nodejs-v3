

export class ServerImageResponse {
    public arch?: ServerImageResponseArchEnum | string;
    private 'image_id'?: string;
    public name?: string;
    private 'server_type'?: ServerImageResponseServerTypeEnum | string;
    public status?: string;
    public constructor() { 
    }
    public withArch(arch: ServerImageResponseArchEnum | string): ServerImageResponse {
        this['arch'] = arch;
        return this;
    }
    public withImageId(imageId: string): ServerImageResponse {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withName(name: string): ServerImageResponse {
        this['name'] = name;
        return this;
    }
    public withServerType(serverType: ServerImageResponseServerTypeEnum | string): ServerImageResponse {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: ServerImageResponseServerTypeEnum | string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): ServerImageResponseServerTypeEnum | string | undefined {
        return this['server_type'];
    }
    public withStatus(status: string): ServerImageResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ServerImageResponseArchEnum {
    ARM = 'ARM',
    X86 = 'X86'
}
/**
    * @export
    * @enum {string}
    */
export enum ServerImageResponseServerTypeEnum {
    BMS = 'BMS',
    ECS = 'ECS',
    HPS = 'HPS'
}
