import { ResourceTag } from './ResourceTag';


export class BackupJobBaseInfo {
    public name?: string;
    private 'engine_type'?: BackupJobBaseInfoEngineTypeEnum | string;
    public description?: string;
    public tags?: Array<ResourceTag>;
    private 'enterprise_project_id'?: string;
    public constructor(name?: string, engineType?: string) { 
        this['name'] = name;
        this['engine_type'] = engineType;
    }
    public withName(name: string): BackupJobBaseInfo {
        this['name'] = name;
        return this;
    }
    public withEngineType(engineType: BackupJobBaseInfoEngineTypeEnum | string): BackupJobBaseInfo {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: BackupJobBaseInfoEngineTypeEnum | string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): BackupJobBaseInfoEngineTypeEnum | string | undefined {
        return this['engine_type'];
    }
    public withDescription(description: string): BackupJobBaseInfo {
        this['description'] = description;
        return this;
    }
    public withTags(tags: Array<ResourceTag>): BackupJobBaseInfo {
        this['tags'] = tags;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BackupJobBaseInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BackupJobBaseInfoEngineTypeEnum {
    SQLSERVER = 'sqlserver'
}
