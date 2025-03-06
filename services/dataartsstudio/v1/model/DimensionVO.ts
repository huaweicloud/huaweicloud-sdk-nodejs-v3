import { ApprovalVO } from './ApprovalVO';
import { BizDatasourceRelationVO } from './BizDatasourceRelationVO';
import { BizStatusEnum } from './BizStatusEnum';
import { BizVersionManageVO } from './BizVersionManageVO';
import { CodeTableVO } from './CodeTableVO';
import { DimensionAttributeVO } from './DimensionAttributeVO';
import { DimensionHierarchiesVO } from './DimensionHierarchiesVO';
import { EnvTypeEnum } from './EnvTypeEnum';
import { SelfDefinedFieldVO } from './SelfDefinedFieldVO';
import { TableMappingVO } from './TableMappingVO';


export class DimensionVO {
    public id?: string;
    private 'name_en'?: string;
    private 'dimension_type'?: DimensionVODimensionTypeEnum | string;
    private 'name_ch'?: string;
    public description?: string;
    private 'create_by'?: string;
    private 'update_by'?: string;
    private 'code_table_id'?: string;
    private 'code_table'?: CodeTableVO;
    private 'l1_id'?: string;
    private 'l2_id'?: string;
    private 'l3_id'?: string;
    public hierarchies?: Array<DimensionHierarchiesVO>;
    public status?: BizStatusEnum;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'approval_info'?: ApprovalVO;
    private 'new_biz'?: BizVersionManageVO;
    public l1?: string;
    public l2?: string;
    public l3?: string;
    public attributes?: Array<DimensionAttributeVO>;
    public mappings?: Array<TableMappingVO>;
    public datasource?: BizDatasourceRelationVO;
    public owner?: string;
    private 'obs_location'?: string;
    private 'table_type'?: string;
    public distribute?: DimensionVODistributeEnum | string;
    private 'distribute_column'?: string;
    public alias?: string;
    private 'self_defined_fields'?: Array<SelfDefinedFieldVO>;
    public configs?: string;
    private 'dev_version'?: string;
    private 'prod_version'?: string;
    private 'dev_version_name'?: string;
    private 'prod_version_name'?: string;
    private 'env_type'?: EnvTypeEnum;
    public constructor(nameEn?: string, dimensionType?: string, nameCh?: string, description?: string, l3Id?: string, attributes?: Array<DimensionAttributeVO>, datasource?: BizDatasourceRelationVO, owner?: string) { 
        this['name_en'] = nameEn;
        this['dimension_type'] = dimensionType;
        this['name_ch'] = nameCh;
        this['description'] = description;
        this['l3_id'] = l3Id;
        this['attributes'] = attributes;
        this['datasource'] = datasource;
        this['owner'] = owner;
    }
    public withId(id: string): DimensionVO {
        this['id'] = id;
        return this;
    }
    public withNameEn(nameEn: string): DimensionVO {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withDimensionType(dimensionType: DimensionVODimensionTypeEnum | string): DimensionVO {
        this['dimension_type'] = dimensionType;
        return this;
    }
    public set dimensionType(dimensionType: DimensionVODimensionTypeEnum | string  | undefined) {
        this['dimension_type'] = dimensionType;
    }
    public get dimensionType(): DimensionVODimensionTypeEnum | string | undefined {
        return this['dimension_type'];
    }
    public withNameCh(nameCh: string): DimensionVO {
        this['name_ch'] = nameCh;
        return this;
    }
    public set nameCh(nameCh: string  | undefined) {
        this['name_ch'] = nameCh;
    }
    public get nameCh(): string | undefined {
        return this['name_ch'];
    }
    public withDescription(description: string): DimensionVO {
        this['description'] = description;
        return this;
    }
    public withCreateBy(createBy: string): DimensionVO {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withUpdateBy(updateBy: string): DimensionVO {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withCodeTableId(codeTableId: string): DimensionVO {
        this['code_table_id'] = codeTableId;
        return this;
    }
    public set codeTableId(codeTableId: string  | undefined) {
        this['code_table_id'] = codeTableId;
    }
    public get codeTableId(): string | undefined {
        return this['code_table_id'];
    }
    public withCodeTable(codeTable: CodeTableVO): DimensionVO {
        this['code_table'] = codeTable;
        return this;
    }
    public set codeTable(codeTable: CodeTableVO  | undefined) {
        this['code_table'] = codeTable;
    }
    public get codeTable(): CodeTableVO | undefined {
        return this['code_table'];
    }
    public withL1Id(l1Id: string): DimensionVO {
        this['l1_id'] = l1Id;
        return this;
    }
    public set l1Id(l1Id: string  | undefined) {
        this['l1_id'] = l1Id;
    }
    public get l1Id(): string | undefined {
        return this['l1_id'];
    }
    public withL2Id(l2Id: string): DimensionVO {
        this['l2_id'] = l2Id;
        return this;
    }
    public set l2Id(l2Id: string  | undefined) {
        this['l2_id'] = l2Id;
    }
    public get l2Id(): string | undefined {
        return this['l2_id'];
    }
    public withL3Id(l3Id: string): DimensionVO {
        this['l3_id'] = l3Id;
        return this;
    }
    public set l3Id(l3Id: string  | undefined) {
        this['l3_id'] = l3Id;
    }
    public get l3Id(): string | undefined {
        return this['l3_id'];
    }
    public withHierarchies(hierarchies: Array<DimensionHierarchiesVO>): DimensionVO {
        this['hierarchies'] = hierarchies;
        return this;
    }
    public withStatus(status: BizStatusEnum): DimensionVO {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: Date): DimensionVO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): DimensionVO {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withApprovalInfo(approvalInfo: ApprovalVO): DimensionVO {
        this['approval_info'] = approvalInfo;
        return this;
    }
    public set approvalInfo(approvalInfo: ApprovalVO  | undefined) {
        this['approval_info'] = approvalInfo;
    }
    public get approvalInfo(): ApprovalVO | undefined {
        return this['approval_info'];
    }
    public withNewBiz(newBiz: BizVersionManageVO): DimensionVO {
        this['new_biz'] = newBiz;
        return this;
    }
    public set newBiz(newBiz: BizVersionManageVO  | undefined) {
        this['new_biz'] = newBiz;
    }
    public get newBiz(): BizVersionManageVO | undefined {
        return this['new_biz'];
    }
    public withL1(l1: string): DimensionVO {
        this['l1'] = l1;
        return this;
    }
    public withL2(l2: string): DimensionVO {
        this['l2'] = l2;
        return this;
    }
    public withL3(l3: string): DimensionVO {
        this['l3'] = l3;
        return this;
    }
    public withAttributes(attributes: Array<DimensionAttributeVO>): DimensionVO {
        this['attributes'] = attributes;
        return this;
    }
    public withMappings(mappings: Array<TableMappingVO>): DimensionVO {
        this['mappings'] = mappings;
        return this;
    }
    public withDatasource(datasource: BizDatasourceRelationVO): DimensionVO {
        this['datasource'] = datasource;
        return this;
    }
    public withOwner(owner: string): DimensionVO {
        this['owner'] = owner;
        return this;
    }
    public withObsLocation(obsLocation: string): DimensionVO {
        this['obs_location'] = obsLocation;
        return this;
    }
    public set obsLocation(obsLocation: string  | undefined) {
        this['obs_location'] = obsLocation;
    }
    public get obsLocation(): string | undefined {
        return this['obs_location'];
    }
    public withTableType(tableType: string): DimensionVO {
        this['table_type'] = tableType;
        return this;
    }
    public set tableType(tableType: string  | undefined) {
        this['table_type'] = tableType;
    }
    public get tableType(): string | undefined {
        return this['table_type'];
    }
    public withDistribute(distribute: DimensionVODistributeEnum | string): DimensionVO {
        this['distribute'] = distribute;
        return this;
    }
    public withDistributeColumn(distributeColumn: string): DimensionVO {
        this['distribute_column'] = distributeColumn;
        return this;
    }
    public set distributeColumn(distributeColumn: string  | undefined) {
        this['distribute_column'] = distributeColumn;
    }
    public get distributeColumn(): string | undefined {
        return this['distribute_column'];
    }
    public withAlias(alias: string): DimensionVO {
        this['alias'] = alias;
        return this;
    }
    public withSelfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>): DimensionVO {
        this['self_defined_fields'] = selfDefinedFields;
        return this;
    }
    public set selfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>  | undefined) {
        this['self_defined_fields'] = selfDefinedFields;
    }
    public get selfDefinedFields(): Array<SelfDefinedFieldVO> | undefined {
        return this['self_defined_fields'];
    }
    public withConfigs(configs: string): DimensionVO {
        this['configs'] = configs;
        return this;
    }
    public withDevVersion(devVersion: string): DimensionVO {
        this['dev_version'] = devVersion;
        return this;
    }
    public set devVersion(devVersion: string  | undefined) {
        this['dev_version'] = devVersion;
    }
    public get devVersion(): string | undefined {
        return this['dev_version'];
    }
    public withProdVersion(prodVersion: string): DimensionVO {
        this['prod_version'] = prodVersion;
        return this;
    }
    public set prodVersion(prodVersion: string  | undefined) {
        this['prod_version'] = prodVersion;
    }
    public get prodVersion(): string | undefined {
        return this['prod_version'];
    }
    public withDevVersionName(devVersionName: string): DimensionVO {
        this['dev_version_name'] = devVersionName;
        return this;
    }
    public set devVersionName(devVersionName: string  | undefined) {
        this['dev_version_name'] = devVersionName;
    }
    public get devVersionName(): string | undefined {
        return this['dev_version_name'];
    }
    public withProdVersionName(prodVersionName: string): DimensionVO {
        this['prod_version_name'] = prodVersionName;
        return this;
    }
    public set prodVersionName(prodVersionName: string  | undefined) {
        this['prod_version_name'] = prodVersionName;
    }
    public get prodVersionName(): string | undefined {
        return this['prod_version_name'];
    }
    public withEnvType(envType: EnvTypeEnum): DimensionVO {
        this['env_type'] = envType;
        return this;
    }
    public set envType(envType: EnvTypeEnum  | undefined) {
        this['env_type'] = envType;
    }
    public get envType(): EnvTypeEnum | undefined {
        return this['env_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DimensionVODimensionTypeEnum {
    COMMON = 'COMMON',
    LOOKUP = 'LOOKUP',
    HIERARCHIES = 'HIERARCHIES'
}
/**
    * @export
    * @enum {string}
    */
export enum DimensionVODistributeEnum {
    HASH = 'HASH',
    REPLICATION = 'REPLICATION'
}
