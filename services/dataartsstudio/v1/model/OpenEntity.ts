import { Connection } from './Connection';
import { TagHeader } from './TagHeader';


export class OpenEntity {
    public attributes?: object;
    public connection?: Connection;
    private 'create_time'?: number;
    private 'created_by'?: string;
    private 'display_text'?: string;
    public guid?: string;
    private 'relationship_attributes'?: object;
    private 'type_name'?: string;
    private 'updated_by'?: string;
    private 'update_time'?: number;
    public tags?: Array<TagHeader>;
    private 'classification_names'?: Array<string>;
    public constructor() { 
    }
    public withAttributes(attributes: object): OpenEntity {
        this['attributes'] = attributes;
        return this;
    }
    public withConnection(connection: Connection): OpenEntity {
        this['connection'] = connection;
        return this;
    }
    public withCreateTime(createTime: number): OpenEntity {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreatedBy(createdBy: string): OpenEntity {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withDisplayText(displayText: string): OpenEntity {
        this['display_text'] = displayText;
        return this;
    }
    public set displayText(displayText: string  | undefined) {
        this['display_text'] = displayText;
    }
    public get displayText(): string | undefined {
        return this['display_text'];
    }
    public withGuid(guid: string): OpenEntity {
        this['guid'] = guid;
        return this;
    }
    public withRelationshipAttributes(relationshipAttributes: object): OpenEntity {
        this['relationship_attributes'] = relationshipAttributes;
        return this;
    }
    public set relationshipAttributes(relationshipAttributes: object  | undefined) {
        this['relationship_attributes'] = relationshipAttributes;
    }
    public get relationshipAttributes(): object | undefined {
        return this['relationship_attributes'];
    }
    public withTypeName(typeName: string): OpenEntity {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withUpdatedBy(updatedBy: string): OpenEntity {
        this['updated_by'] = updatedBy;
        return this;
    }
    public set updatedBy(updatedBy: string  | undefined) {
        this['updated_by'] = updatedBy;
    }
    public get updatedBy(): string | undefined {
        return this['updated_by'];
    }
    public withUpdateTime(updateTime: number): OpenEntity {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withTags(tags: Array<TagHeader>): OpenEntity {
        this['tags'] = tags;
        return this;
    }
    public withClassificationNames(classificationNames: Array<string>): OpenEntity {
        this['classification_names'] = classificationNames;
        return this;
    }
    public set classificationNames(classificationNames: Array<string>  | undefined) {
        this['classification_names'] = classificationNames;
    }
    public get classificationNames(): Array<string> | undefined {
        return this['classification_names'];
    }
}