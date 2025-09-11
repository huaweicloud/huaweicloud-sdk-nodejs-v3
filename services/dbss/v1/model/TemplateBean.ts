

export class TemplateBean {
    private 'db_ids'?: string;
    private 'db_names'?: string;
    public desc?: string;
    public frequency?: string;
    public group?: TemplateBeanGroupEnum | string;
    public id?: string;
    public name?: string;
    public status?: TemplateBeanStatusEnum | string;
    public type?: TemplateBeanTypeEnum | string;
    public constructor() { 
    }
    public withDbIds(dbIds: string): TemplateBean {
        this['db_ids'] = dbIds;
        return this;
    }
    public set dbIds(dbIds: string  | undefined) {
        this['db_ids'] = dbIds;
    }
    public get dbIds(): string | undefined {
        return this['db_ids'];
    }
    public withDbNames(dbNames: string): TemplateBean {
        this['db_names'] = dbNames;
        return this;
    }
    public set dbNames(dbNames: string  | undefined) {
        this['db_names'] = dbNames;
    }
    public get dbNames(): string | undefined {
        return this['db_names'];
    }
    public withDesc(desc: string): TemplateBean {
        this['desc'] = desc;
        return this;
    }
    public withFrequency(frequency: string): TemplateBean {
        this['frequency'] = frequency;
        return this;
    }
    public withGroup(group: TemplateBeanGroupEnum | string): TemplateBean {
        this['group'] = group;
        return this;
    }
    public withId(id: string): TemplateBean {
        this['id'] = id;
        return this;
    }
    public withName(name: string): TemplateBean {
        this['name'] = name;
        return this;
    }
    public withStatus(status: TemplateBeanStatusEnum | string): TemplateBean {
        this['status'] = status;
        return this;
    }
    public withType(type: TemplateBeanTypeEnum | string): TemplateBean {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TemplateBeanGroupEnum {
    COMPREHENSIVE = 'COMPREHENSIVE',
    COMPLIANCE = 'COMPLIANCE',
    DB_SPECIAL = 'DB_SPECIAL',
    CLIENT_SPECIAL = 'CLIENT_SPECIAL',
    SQL_SPECIAL = 'SQL_SPECIAL'
}
/**
    * @export
    * @enum {string}
    */
export enum TemplateBeanStatusEnum {
    OFF = 'OFF',
    ON = 'ON'
}
/**
    * @export
    * @enum {string}
    */
export enum TemplateBeanTypeEnum {
    COMPREHENSIVE = 'COMPREHENSIVE',
    COMPLIANCE = 'COMPLIANCE',
    SOX = 'SOX',
    PCI = 'PCI',
    DB_ANALYSIS = 'DB_ANALYSIS',
    CLIENT_IP_ANALYSIS = 'CLIENT_IP_ANALYSIS',
    SQL_DCL_COMMAND = 'SQL_DCL_COMMAND',
    SQL_DDL_COMMAND = 'SQL_DDL_COMMAND',
    SQL_DML_COMMAND = 'SQL_DML_COMMAND'
}
