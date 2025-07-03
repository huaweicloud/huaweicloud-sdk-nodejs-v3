import { TemplateBlockDeviceMappingAttachmentOption } from './TemplateBlockDeviceMappingAttachmentOption';


export class TemplateBlockDeviceMappingOption {
    private 'source_id'?: string;
    private 'source_type'?: TemplateBlockDeviceMappingOptionSourceTypeEnum | string;
    public encrypted?: boolean;
    private 'cmk_id'?: string;
    private 'volume_type'?: string;
    private 'volume_size'?: number;
    public attachment?: TemplateBlockDeviceMappingAttachmentOption;
    public constructor() { 
    }
    public withSourceId(sourceId: string): TemplateBlockDeviceMappingOption {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withSourceType(sourceType: TemplateBlockDeviceMappingOptionSourceTypeEnum | string): TemplateBlockDeviceMappingOption {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: TemplateBlockDeviceMappingOptionSourceTypeEnum | string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): TemplateBlockDeviceMappingOptionSourceTypeEnum | string | undefined {
        return this['source_type'];
    }
    public withEncrypted(encrypted: boolean): TemplateBlockDeviceMappingOption {
        this['encrypted'] = encrypted;
        return this;
    }
    public withCmkId(cmkId: string): TemplateBlockDeviceMappingOption {
        this['cmk_id'] = cmkId;
        return this;
    }
    public set cmkId(cmkId: string  | undefined) {
        this['cmk_id'] = cmkId;
    }
    public get cmkId(): string | undefined {
        return this['cmk_id'];
    }
    public withVolumeType(volumeType: string): TemplateBlockDeviceMappingOption {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): string | undefined {
        return this['volume_type'];
    }
    public withVolumeSize(volumeSize: number): TemplateBlockDeviceMappingOption {
        this['volume_size'] = volumeSize;
        return this;
    }
    public set volumeSize(volumeSize: number  | undefined) {
        this['volume_size'] = volumeSize;
    }
    public get volumeSize(): number | undefined {
        return this['volume_size'];
    }
    public withAttachment(attachment: TemplateBlockDeviceMappingAttachmentOption): TemplateBlockDeviceMappingOption {
        this['attachment'] = attachment;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TemplateBlockDeviceMappingOptionSourceTypeEnum {
    BLANK = 'blank',
    IMAGE = 'image'
}
