

export class TemplateRO {
    public id?: string;
    public name?: string;
    private 'directory_id'?: number;
    private 'dimension_id'?: number;
    public description?: string;
    private 'sql_info'?: string;
    private 'result_description'?: string;
    public publish?: boolean;
    private 'origin_name'?: string;
    private 'abnormal_table_template'?: string;
    private 'user_define_version_name'?: string;
    private 'version_num'?: number;
    public status?: number;
    public constructor() { 
    }
    public withId(id: string): TemplateRO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TemplateRO {
        this['name'] = name;
        return this;
    }
    public withDirectoryId(directoryId: number): TemplateRO {
        this['directory_id'] = directoryId;
        return this;
    }
    public set directoryId(directoryId: number  | undefined) {
        this['directory_id'] = directoryId;
    }
    public get directoryId(): number | undefined {
        return this['directory_id'];
    }
    public withDimensionId(dimensionId: number): TemplateRO {
        this['dimension_id'] = dimensionId;
        return this;
    }
    public set dimensionId(dimensionId: number  | undefined) {
        this['dimension_id'] = dimensionId;
    }
    public get dimensionId(): number | undefined {
        return this['dimension_id'];
    }
    public withDescription(description: string): TemplateRO {
        this['description'] = description;
        return this;
    }
    public withSqlInfo(sqlInfo: string): TemplateRO {
        this['sql_info'] = sqlInfo;
        return this;
    }
    public set sqlInfo(sqlInfo: string  | undefined) {
        this['sql_info'] = sqlInfo;
    }
    public get sqlInfo(): string | undefined {
        return this['sql_info'];
    }
    public withResultDescription(resultDescription: string): TemplateRO {
        this['result_description'] = resultDescription;
        return this;
    }
    public set resultDescription(resultDescription: string  | undefined) {
        this['result_description'] = resultDescription;
    }
    public get resultDescription(): string | undefined {
        return this['result_description'];
    }
    public withPublish(publish: boolean): TemplateRO {
        this['publish'] = publish;
        return this;
    }
    public withOriginName(originName: string): TemplateRO {
        this['origin_name'] = originName;
        return this;
    }
    public set originName(originName: string  | undefined) {
        this['origin_name'] = originName;
    }
    public get originName(): string | undefined {
        return this['origin_name'];
    }
    public withAbnormalTableTemplate(abnormalTableTemplate: string): TemplateRO {
        this['abnormal_table_template'] = abnormalTableTemplate;
        return this;
    }
    public set abnormalTableTemplate(abnormalTableTemplate: string  | undefined) {
        this['abnormal_table_template'] = abnormalTableTemplate;
    }
    public get abnormalTableTemplate(): string | undefined {
        return this['abnormal_table_template'];
    }
    public withUserDefineVersionName(userDefineVersionName: string): TemplateRO {
        this['user_define_version_name'] = userDefineVersionName;
        return this;
    }
    public set userDefineVersionName(userDefineVersionName: string  | undefined) {
        this['user_define_version_name'] = userDefineVersionName;
    }
    public get userDefineVersionName(): string | undefined {
        return this['user_define_version_name'];
    }
    public withVersionNum(versionNum: number): TemplateRO {
        this['version_num'] = versionNum;
        return this;
    }
    public set versionNum(versionNum: number  | undefined) {
        this['version_num'] = versionNum;
    }
    public get versionNum(): number | undefined {
        return this['version_num'];
    }
    public withStatus(status: number): TemplateRO {
        this['status'] = status;
        return this;
    }
}