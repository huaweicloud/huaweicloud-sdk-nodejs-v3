
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetDevServerImageResponse extends SdkResponse {
    public arch?: GetDevServerImageResponseArchEnum | string;
    private 'image_id'?: string;
    public name?: string;
    private 'server_type'?: GetDevServerImageResponseServerTypeEnum | string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withArch(arch: GetDevServerImageResponseArchEnum | string): GetDevServerImageResponse {
        this['arch'] = arch;
        return this;
    }
    public withImageId(imageId: string): GetDevServerImageResponse {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withName(name: string): GetDevServerImageResponse {
        this['name'] = name;
        return this;
    }
    public withServerType(serverType: GetDevServerImageResponseServerTypeEnum | string): GetDevServerImageResponse {
        this['server_type'] = serverType;
        return this;
    }
    public set serverType(serverType: GetDevServerImageResponseServerTypeEnum | string  | undefined) {
        this['server_type'] = serverType;
    }
    public get serverType(): GetDevServerImageResponseServerTypeEnum | string | undefined {
        return this['server_type'];
    }
    public withStatus(status: string): GetDevServerImageResponse {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetDevServerImageResponseArchEnum {
    ARM = 'ARM',
    X86 = 'X86'
}
/**
    * @export
    * @enum {string}
    */
export enum GetDevServerImageResponseServerTypeEnum {
    BMS = 'BMS',
    ECS = 'ECS',
    HPS = 'HPS'
}
