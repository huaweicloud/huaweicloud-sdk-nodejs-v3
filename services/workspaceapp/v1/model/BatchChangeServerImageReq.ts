import { ImageTypeEnum } from './ImageTypeEnum';
import { OsTypeEnum } from './OsTypeEnum';


export class BatchChangeServerImageReq {
    private 'server_ids'?: Array<string>;
    private 'image_id'?: string;
    private 'image_type'?: ImageTypeEnum;
    private 'os_type'?: OsTypeEnum;
    private 'image_product_id'?: string;
    private 'update_access_agent'?: boolean;
    public constructor(imageId?: string, imageType?: ImageTypeEnum, osType?: OsTypeEnum) { 
        this['image_id'] = imageId;
        this['image_type'] = imageType;
        this['os_type'] = osType;
    }
    public withServerIds(serverIds: Array<string>): BatchChangeServerImageReq {
        this['server_ids'] = serverIds;
        return this;
    }
    public set serverIds(serverIds: Array<string>  | undefined) {
        this['server_ids'] = serverIds;
    }
    public get serverIds(): Array<string> | undefined {
        return this['server_ids'];
    }
    public withImageId(imageId: string): BatchChangeServerImageReq {
        this['image_id'] = imageId;
        return this;
    }
    public set imageId(imageId: string  | undefined) {
        this['image_id'] = imageId;
    }
    public get imageId(): string | undefined {
        return this['image_id'];
    }
    public withImageType(imageType: ImageTypeEnum): BatchChangeServerImageReq {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: ImageTypeEnum  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): ImageTypeEnum | undefined {
        return this['image_type'];
    }
    public withOsType(osType: OsTypeEnum): BatchChangeServerImageReq {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: OsTypeEnum  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): OsTypeEnum | undefined {
        return this['os_type'];
    }
    public withImageProductId(imageProductId: string): BatchChangeServerImageReq {
        this['image_product_id'] = imageProductId;
        return this;
    }
    public set imageProductId(imageProductId: string  | undefined) {
        this['image_product_id'] = imageProductId;
    }
    public get imageProductId(): string | undefined {
        return this['image_product_id'];
    }
    public withUpdateAccessAgent(updateAccessAgent: boolean): BatchChangeServerImageReq {
        this['update_access_agent'] = updateAccessAgent;
        return this;
    }
    public set updateAccessAgent(updateAccessAgent: boolean  | undefined) {
        this['update_access_agent'] = updateAccessAgent;
    }
    public get updateAccessAgent(): boolean | undefined {
        return this['update_access_agent'];
    }
}