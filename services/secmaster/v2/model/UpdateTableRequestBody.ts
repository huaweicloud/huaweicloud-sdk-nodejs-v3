import { IsapTableDisplaySettingDto } from './IsapTableDisplaySettingDto';
import { IsapTableStorageSettingDto } from './IsapTableStorageSettingDto';


export class UpdateTableRequestBody {
    private 'table_alias'?: string;
    private 'table_alias_en'?: string;
    private 'table_alias_fr'?: string;
    public description?: string;
    private 'description_en'?: string;
    private 'description_fr'?: string;
    public directory?: string;
    private 'directory_en'?: string;
    private 'directory_fr'?: string;
    private 'storage_setting'?: IsapTableStorageSettingDto;
    private 'display_setting'?: IsapTableDisplaySettingDto;
    public constructor() { 
    }
    public withTableAlias(tableAlias: string): UpdateTableRequestBody {
        this['table_alias'] = tableAlias;
        return this;
    }
    public set tableAlias(tableAlias: string  | undefined) {
        this['table_alias'] = tableAlias;
    }
    public get tableAlias(): string | undefined {
        return this['table_alias'];
    }
    public withTableAliasEn(tableAliasEn: string): UpdateTableRequestBody {
        this['table_alias_en'] = tableAliasEn;
        return this;
    }
    public set tableAliasEn(tableAliasEn: string  | undefined) {
        this['table_alias_en'] = tableAliasEn;
    }
    public get tableAliasEn(): string | undefined {
        return this['table_alias_en'];
    }
    public withTableAliasFr(tableAliasFr: string): UpdateTableRequestBody {
        this['table_alias_fr'] = tableAliasFr;
        return this;
    }
    public set tableAliasFr(tableAliasFr: string  | undefined) {
        this['table_alias_fr'] = tableAliasFr;
    }
    public get tableAliasFr(): string | undefined {
        return this['table_alias_fr'];
    }
    public withDescription(description: string): UpdateTableRequestBody {
        this['description'] = description;
        return this;
    }
    public withDescriptionEn(descriptionEn: string): UpdateTableRequestBody {
        this['description_en'] = descriptionEn;
        return this;
    }
    public set descriptionEn(descriptionEn: string  | undefined) {
        this['description_en'] = descriptionEn;
    }
    public get descriptionEn(): string | undefined {
        return this['description_en'];
    }
    public withDescriptionFr(descriptionFr: string): UpdateTableRequestBody {
        this['description_fr'] = descriptionFr;
        return this;
    }
    public set descriptionFr(descriptionFr: string  | undefined) {
        this['description_fr'] = descriptionFr;
    }
    public get descriptionFr(): string | undefined {
        return this['description_fr'];
    }
    public withDirectory(directory: string): UpdateTableRequestBody {
        this['directory'] = directory;
        return this;
    }
    public withDirectoryEn(directoryEn: string): UpdateTableRequestBody {
        this['directory_en'] = directoryEn;
        return this;
    }
    public set directoryEn(directoryEn: string  | undefined) {
        this['directory_en'] = directoryEn;
    }
    public get directoryEn(): string | undefined {
        return this['directory_en'];
    }
    public withDirectoryFr(directoryFr: string): UpdateTableRequestBody {
        this['directory_fr'] = directoryFr;
        return this;
    }
    public set directoryFr(directoryFr: string  | undefined) {
        this['directory_fr'] = directoryFr;
    }
    public get directoryFr(): string | undefined {
        return this['directory_fr'];
    }
    public withStorageSetting(storageSetting: IsapTableStorageSettingDto): UpdateTableRequestBody {
        this['storage_setting'] = storageSetting;
        return this;
    }
    public set storageSetting(storageSetting: IsapTableStorageSettingDto  | undefined) {
        this['storage_setting'] = storageSetting;
    }
    public get storageSetting(): IsapTableStorageSettingDto | undefined {
        return this['storage_setting'];
    }
    public withDisplaySetting(displaySetting: IsapTableDisplaySettingDto): UpdateTableRequestBody {
        this['display_setting'] = displaySetting;
        return this;
    }
    public set displaySetting(displaySetting: IsapTableDisplaySettingDto  | undefined) {
        this['display_setting'] = displaySetting;
    }
    public get displaySetting(): IsapTableDisplaySettingDto | undefined {
        return this['display_setting'];
    }
}