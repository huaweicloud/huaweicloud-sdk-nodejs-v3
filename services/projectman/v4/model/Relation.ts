import { RelateAction } from './RelateAction';


export class Relation {
    public type?: string;
    public categories?: Array<string>;
    private 'link_field_code'?: string;
    private 'relation_name'?: string;
    public description?: string;
    private 'display_scope'?: string;
    public actions?: Array<RelateAction>;
    private 'relate_type'?: string;
    public constructor() { 
    }
    public withType(type: string): Relation {
        this['type'] = type;
        return this;
    }
    public withCategories(categories: Array<string>): Relation {
        this['categories'] = categories;
        return this;
    }
    public withLinkFieldCode(linkFieldCode: string): Relation {
        this['link_field_code'] = linkFieldCode;
        return this;
    }
    public set linkFieldCode(linkFieldCode: string  | undefined) {
        this['link_field_code'] = linkFieldCode;
    }
    public get linkFieldCode(): string | undefined {
        return this['link_field_code'];
    }
    public withRelationName(relationName: string): Relation {
        this['relation_name'] = relationName;
        return this;
    }
    public set relationName(relationName: string  | undefined) {
        this['relation_name'] = relationName;
    }
    public get relationName(): string | undefined {
        return this['relation_name'];
    }
    public withDescription(description: string): Relation {
        this['description'] = description;
        return this;
    }
    public withDisplayScope(displayScope: string): Relation {
        this['display_scope'] = displayScope;
        return this;
    }
    public set displayScope(displayScope: string  | undefined) {
        this['display_scope'] = displayScope;
    }
    public get displayScope(): string | undefined {
        return this['display_scope'];
    }
    public withActions(actions: Array<RelateAction>): Relation {
        this['actions'] = actions;
        return this;
    }
    public withRelateType(relateType: string): Relation {
        this['relate_type'] = relateType;
        return this;
    }
    public set relateType(relateType: string  | undefined) {
        this['relate_type'] = relateType;
    }
    public get relateType(): string | undefined {
        return this['relate_type'];
    }
}