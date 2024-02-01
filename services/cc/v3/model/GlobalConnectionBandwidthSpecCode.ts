import { CreatedAt } from './CreatedAt';
import { GcbLocalArea } from './GcbLocalArea';
import { GcbRemoteArea } from './GcbRemoteArea';
import { UUIDIdentifier } from './UUIDIdentifier';
import { UpdatedAt } from './UpdatedAt';


export class GlobalConnectionBandwidthSpecCode {
    public id?: string;
    private 'local_area'?: string;
    private 'remote_area'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'name_zh'?: string;
    private 'name_en'?: string;
    public level?: GlobalConnectionBandwidthSpecCodeLevelEnum | string;
    public sku?: string;
    public size?: number;
    public constructor(id?: string, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): GlobalConnectionBandwidthSpecCode {
        this['id'] = id;
        return this;
    }
    public withLocalArea(localArea: string): GlobalConnectionBandwidthSpecCode {
        this['local_area'] = localArea;
        return this;
    }
    public set localArea(localArea: string  | undefined) {
        this['local_area'] = localArea;
    }
    public get localArea(): string | undefined {
        return this['local_area'];
    }
    public withRemoteArea(remoteArea: string): GlobalConnectionBandwidthSpecCode {
        this['remote_area'] = remoteArea;
        return this;
    }
    public set remoteArea(remoteArea: string  | undefined) {
        this['remote_area'] = remoteArea;
    }
    public get remoteArea(): string | undefined {
        return this['remote_area'];
    }
    public withCreatedAt(createdAt: Date): GlobalConnectionBandwidthSpecCode {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): GlobalConnectionBandwidthSpecCode {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withNameZh(nameZh: string): GlobalConnectionBandwidthSpecCode {
        this['name_zh'] = nameZh;
        return this;
    }
    public set nameZh(nameZh: string  | undefined) {
        this['name_zh'] = nameZh;
    }
    public get nameZh(): string | undefined {
        return this['name_zh'];
    }
    public withNameEn(nameEn: string): GlobalConnectionBandwidthSpecCode {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withLevel(level: GlobalConnectionBandwidthSpecCodeLevelEnum | string): GlobalConnectionBandwidthSpecCode {
        this['level'] = level;
        return this;
    }
    public withSku(sku: string): GlobalConnectionBandwidthSpecCode {
        this['sku'] = sku;
        return this;
    }
    public withSize(size: number): GlobalConnectionBandwidthSpecCode {
        this['size'] = size;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GlobalConnectionBandwidthSpecCodeLevelEnum {
    PT = 'Pt',
    AU = 'Au',
    AG = 'Ag'
}
