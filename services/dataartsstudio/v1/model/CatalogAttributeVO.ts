import { CatalogAttributeVOParent } from './CatalogAttributeVOParent';
import { SelfDefinedFieldVO } from './SelfDefinedFieldVO';


export class CatalogAttributeVO {
    public path?: string;
    public qualifiedName?: string;
    public level?: string;
    public name?: string;
    public nameEng?: string;
    public alias?: string;
    public description?: string;
    public dataOwner?: string;
    public owner?: string;
    public dataOwnerList?: Array<string>;
    public createTime?: string;
    public createBy?: string;
    public updateTime?: string;
    public updateBy?: string;
    public parent?: CatalogAttributeVOParent;
    public parentId?: string;
    public l1?: boolean;
    public l2?: boolean;
    public l3?: boolean;
    public ordinal?: number;
    public tenantId?: string;
    private 'self_defined_fields'?: Array<SelfDefinedFieldVO>;
    public constructor(path?: string, qualifiedName?: string, level?: string, name?: string, nameEng?: string, description?: string, dataOwner?: string, dataOwnerList?: Array<string>) { 
        this['path'] = path;
        this['qualifiedName'] = qualifiedName;
        this['level'] = level;
        this['name'] = name;
        this['nameEng'] = nameEng;
        this['description'] = description;
        this['dataOwner'] = dataOwner;
        this['dataOwnerList'] = dataOwnerList;
    }
    public withPath(path: string): CatalogAttributeVO {
        this['path'] = path;
        return this;
    }
    public withQualifiedName(qualifiedName: string): CatalogAttributeVO {
        this['qualifiedName'] = qualifiedName;
        return this;
    }
    public withLevel(level: string): CatalogAttributeVO {
        this['level'] = level;
        return this;
    }
    public withName(name: string): CatalogAttributeVO {
        this['name'] = name;
        return this;
    }
    public withNameEng(nameEng: string): CatalogAttributeVO {
        this['nameEng'] = nameEng;
        return this;
    }
    public withAlias(alias: string): CatalogAttributeVO {
        this['alias'] = alias;
        return this;
    }
    public withDescription(description: string): CatalogAttributeVO {
        this['description'] = description;
        return this;
    }
    public withDataOwner(dataOwner: string): CatalogAttributeVO {
        this['dataOwner'] = dataOwner;
        return this;
    }
    public withOwner(owner: string): CatalogAttributeVO {
        this['owner'] = owner;
        return this;
    }
    public withDataOwnerList(dataOwnerList: Array<string>): CatalogAttributeVO {
        this['dataOwnerList'] = dataOwnerList;
        return this;
    }
    public withCreateTime(createTime: string): CatalogAttributeVO {
        this['createTime'] = createTime;
        return this;
    }
    public withCreateBy(createBy: string): CatalogAttributeVO {
        this['createBy'] = createBy;
        return this;
    }
    public withUpdateTime(updateTime: string): CatalogAttributeVO {
        this['updateTime'] = updateTime;
        return this;
    }
    public withUpdateBy(updateBy: string): CatalogAttributeVO {
        this['updateBy'] = updateBy;
        return this;
    }
    public withParent(parent: CatalogAttributeVOParent): CatalogAttributeVO {
        this['parent'] = parent;
        return this;
    }
    public withParentId(parentId: string): CatalogAttributeVO {
        this['parentId'] = parentId;
        return this;
    }
    public withL1(l1: boolean): CatalogAttributeVO {
        this['l1'] = l1;
        return this;
    }
    public withL2(l2: boolean): CatalogAttributeVO {
        this['l2'] = l2;
        return this;
    }
    public withL3(l3: boolean): CatalogAttributeVO {
        this['l3'] = l3;
        return this;
    }
    public withOrdinal(ordinal: number): CatalogAttributeVO {
        this['ordinal'] = ordinal;
        return this;
    }
    public withTenantId(tenantId: string): CatalogAttributeVO {
        this['tenantId'] = tenantId;
        return this;
    }
    public withSelfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>): CatalogAttributeVO {
        this['self_defined_fields'] = selfDefinedFields;
        return this;
    }
    public set selfDefinedFields(selfDefinedFields: Array<SelfDefinedFieldVO>  | undefined) {
        this['self_defined_fields'] = selfDefinedFields;
    }
    public get selfDefinedFields(): Array<SelfDefinedFieldVO> | undefined {
        return this['self_defined_fields'];
    }
}