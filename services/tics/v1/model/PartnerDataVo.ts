import { TicsDatasetColumn } from './TicsDatasetColumn';


export class PartnerDataVo {
    private 'column_list'?: Array<TicsDatasetColumn>;
    private 'create_time'?: Date;
    private 'data_type'?: PartnerDataVoDataTypeEnum | string;
    public description?: string;
    public id?: string;
    public name?: string;
    private 'partner_domain_name'?: string;
    public constructor() { 
    }
    public withColumnList(columnList: Array<TicsDatasetColumn>): PartnerDataVo {
        this['column_list'] = columnList;
        return this;
    }
    public set columnList(columnList: Array<TicsDatasetColumn>  | undefined) {
        this['column_list'] = columnList;
    }
    public get columnList(): Array<TicsDatasetColumn> | undefined {
        return this['column_list'];
    }
    public withCreateTime(createTime: Date): PartnerDataVo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withDataType(dataType: PartnerDataVoDataTypeEnum | string): PartnerDataVo {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: PartnerDataVoDataTypeEnum | string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): PartnerDataVoDataTypeEnum | string | undefined {
        return this['data_type'];
    }
    public withDescription(description: string): PartnerDataVo {
        this['description'] = description;
        return this;
    }
    public withId(id: string): PartnerDataVo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PartnerDataVo {
        this['name'] = name;
        return this;
    }
    public withPartnerDomainName(partnerDomainName: string): PartnerDataVo {
        this['partner_domain_name'] = partnerDomainName;
        return this;
    }
    public set partnerDomainName(partnerDomainName: string  | undefined) {
        this['partner_domain_name'] = partnerDomainName;
    }
    public get partnerDomainName(): string | undefined {
        return this['partner_domain_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PartnerDataVoDataTypeEnum {
    DWS = 'DWS',
    LOCAL_CSV = 'LOCAL_CSV',
    MRS = 'MRS',
    MYSQL = 'MYSQL',
    ORACLE = 'ORACLE',
    RDS = 'RDS'
}
