

export class CriterionSetListV2Body {
    public id?: string;
    public name?: string;
    public comments?: string;
    public type?: string;
    public creator?: string;
    public createTime?: string;
    public lastReviser?: string;
    public lastUpdateTime?: string;
    public language?: string;
    public parentId?: string;
    public numCriterion?: number;
    public canEdit?: boolean;
    public canDelete?: boolean;
    public managers?: string;
    public parentSetNames?: string;
    public domainId?: string;
    public inheritMode?: string;
    public creatorId?: string;
    public isSystemDefault?: string;
    public isProjectDefault?: string;
    public isSystemSet?: string;
    public ruleIds?: string;
    public region?: string;
    public canSetDefault?: boolean;
    public isUsed?: boolean;
    public childSets?: Array<string>;
    public isReliable?: boolean;
    public isRecommand?: string;
    public isDefault?: boolean;
    public defaultSet?: string;
    public deptId?: string;
    public deptName?: string;
    public reliableTag?: string;
    public recommandType?: string;
    public constructor() { 
    }
    public withId(id: string): CriterionSetListV2Body {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CriterionSetListV2Body {
        this['name'] = name;
        return this;
    }
    public withComments(comments: string): CriterionSetListV2Body {
        this['comments'] = comments;
        return this;
    }
    public withType(type: string): CriterionSetListV2Body {
        this['type'] = type;
        return this;
    }
    public withCreator(creator: string): CriterionSetListV2Body {
        this['creator'] = creator;
        return this;
    }
    public withCreateTime(createTime: string): CriterionSetListV2Body {
        this['createTime'] = createTime;
        return this;
    }
    public withLastReviser(lastReviser: string): CriterionSetListV2Body {
        this['lastReviser'] = lastReviser;
        return this;
    }
    public withLastUpdateTime(lastUpdateTime: string): CriterionSetListV2Body {
        this['lastUpdateTime'] = lastUpdateTime;
        return this;
    }
    public withLanguage(language: string): CriterionSetListV2Body {
        this['language'] = language;
        return this;
    }
    public withParentId(parentId: string): CriterionSetListV2Body {
        this['parentId'] = parentId;
        return this;
    }
    public withNumCriterion(numCriterion: number): CriterionSetListV2Body {
        this['numCriterion'] = numCriterion;
        return this;
    }
    public withCanEdit(canEdit: boolean): CriterionSetListV2Body {
        this['canEdit'] = canEdit;
        return this;
    }
    public withCanDelete(canDelete: boolean): CriterionSetListV2Body {
        this['canDelete'] = canDelete;
        return this;
    }
    public withManagers(managers: string): CriterionSetListV2Body {
        this['managers'] = managers;
        return this;
    }
    public withParentSetNames(parentSetNames: string): CriterionSetListV2Body {
        this['parentSetNames'] = parentSetNames;
        return this;
    }
    public withDomainId(domainId: string): CriterionSetListV2Body {
        this['domainId'] = domainId;
        return this;
    }
    public withInheritMode(inheritMode: string): CriterionSetListV2Body {
        this['inheritMode'] = inheritMode;
        return this;
    }
    public withCreatorId(creatorId: string): CriterionSetListV2Body {
        this['creatorId'] = creatorId;
        return this;
    }
    public withIsSystemDefault(isSystemDefault: string): CriterionSetListV2Body {
        this['isSystemDefault'] = isSystemDefault;
        return this;
    }
    public withIsProjectDefault(isProjectDefault: string): CriterionSetListV2Body {
        this['isProjectDefault'] = isProjectDefault;
        return this;
    }
    public withIsSystemSet(isSystemSet: string): CriterionSetListV2Body {
        this['isSystemSet'] = isSystemSet;
        return this;
    }
    public withRuleIds(ruleIds: string): CriterionSetListV2Body {
        this['ruleIds'] = ruleIds;
        return this;
    }
    public withRegion(region: string): CriterionSetListV2Body {
        this['region'] = region;
        return this;
    }
    public withCanSetDefault(canSetDefault: boolean): CriterionSetListV2Body {
        this['canSetDefault'] = canSetDefault;
        return this;
    }
    public withIsUsed(isUsed: boolean): CriterionSetListV2Body {
        this['isUsed'] = isUsed;
        return this;
    }
    public withChildSets(childSets: Array<string>): CriterionSetListV2Body {
        this['childSets'] = childSets;
        return this;
    }
    public withIsReliable(isReliable: boolean): CriterionSetListV2Body {
        this['isReliable'] = isReliable;
        return this;
    }
    public withIsRecommand(isRecommand: string): CriterionSetListV2Body {
        this['isRecommand'] = isRecommand;
        return this;
    }
    public withIsDefault(isDefault: boolean): CriterionSetListV2Body {
        this['isDefault'] = isDefault;
        return this;
    }
    public withDefaultSet(defaultSet: string): CriterionSetListV2Body {
        this['defaultSet'] = defaultSet;
        return this;
    }
    public withDeptId(deptId: string): CriterionSetListV2Body {
        this['deptId'] = deptId;
        return this;
    }
    public withDeptName(deptName: string): CriterionSetListV2Body {
        this['deptName'] = deptName;
        return this;
    }
    public withReliableTag(reliableTag: string): CriterionSetListV2Body {
        this['reliableTag'] = reliableTag;
        return this;
    }
    public withRecommandType(recommandType: string): CriterionSetListV2Body {
        this['recommandType'] = recommandType;
        return this;
    }
}