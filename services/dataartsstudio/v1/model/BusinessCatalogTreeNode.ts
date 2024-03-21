import { LogicEntityNodes } from './LogicEntityNodes';


export class BusinessCatalogTreeNode {
    private 'business_catalog_guid'?: string;
    private 'business_catalog_name'?: string;
    private 'business_catalog_name_eng'?: string;
    public level?: string;
    private 'qualified_name'?: string;
    public ordinal?: number;
    private 'child_nodes'?: Array<BusinessCatalogTreeNode>;
    private 'logic_entity_nodes'?: Array<LogicEntityNodes>;
    public constructor() { 
    }
    public withBusinessCatalogGuid(businessCatalogGuid: string): BusinessCatalogTreeNode {
        this['business_catalog_guid'] = businessCatalogGuid;
        return this;
    }
    public set businessCatalogGuid(businessCatalogGuid: string  | undefined) {
        this['business_catalog_guid'] = businessCatalogGuid;
    }
    public get businessCatalogGuid(): string | undefined {
        return this['business_catalog_guid'];
    }
    public withBusinessCatalogName(businessCatalogName: string): BusinessCatalogTreeNode {
        this['business_catalog_name'] = businessCatalogName;
        return this;
    }
    public set businessCatalogName(businessCatalogName: string  | undefined) {
        this['business_catalog_name'] = businessCatalogName;
    }
    public get businessCatalogName(): string | undefined {
        return this['business_catalog_name'];
    }
    public withBusinessCatalogNameEng(businessCatalogNameEng: string): BusinessCatalogTreeNode {
        this['business_catalog_name_eng'] = businessCatalogNameEng;
        return this;
    }
    public set businessCatalogNameEng(businessCatalogNameEng: string  | undefined) {
        this['business_catalog_name_eng'] = businessCatalogNameEng;
    }
    public get businessCatalogNameEng(): string | undefined {
        return this['business_catalog_name_eng'];
    }
    public withLevel(level: string): BusinessCatalogTreeNode {
        this['level'] = level;
        return this;
    }
    public withQualifiedName(qualifiedName: string): BusinessCatalogTreeNode {
        this['qualified_name'] = qualifiedName;
        return this;
    }
    public set qualifiedName(qualifiedName: string  | undefined) {
        this['qualified_name'] = qualifiedName;
    }
    public get qualifiedName(): string | undefined {
        return this['qualified_name'];
    }
    public withOrdinal(ordinal: number): BusinessCatalogTreeNode {
        this['ordinal'] = ordinal;
        return this;
    }
    public withChildNodes(childNodes: Array<BusinessCatalogTreeNode>): BusinessCatalogTreeNode {
        this['child_nodes'] = childNodes;
        return this;
    }
    public set childNodes(childNodes: Array<BusinessCatalogTreeNode>  | undefined) {
        this['child_nodes'] = childNodes;
    }
    public get childNodes(): Array<BusinessCatalogTreeNode> | undefined {
        return this['child_nodes'];
    }
    public withLogicEntityNodes(logicEntityNodes: Array<LogicEntityNodes>): BusinessCatalogTreeNode {
        this['logic_entity_nodes'] = logicEntityNodes;
        return this;
    }
    public set logicEntityNodes(logicEntityNodes: Array<LogicEntityNodes>  | undefined) {
        this['logic_entity_nodes'] = logicEntityNodes;
    }
    public get logicEntityNodes(): Array<LogicEntityNodes> | undefined {
        return this['logic_entity_nodes'];
    }
}