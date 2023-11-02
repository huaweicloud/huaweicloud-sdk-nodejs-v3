import { AtlasClassificationInfo } from './AtlasClassificationInfo';
import { TermAssignmentHeader } from './TermAssignmentHeader';


export class AtlasAssetEntity {
    private 'type_name'?: string;
    public guid?: string;
    public version?: number;
    private 'update_time'?: number;
    private 'update_user'?: string;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'display_text'?: string;
    public status?: string;
    public classifications?: Array<AtlasClassificationInfo>;
    public meanings?: Array<TermAssignmentHeader>;
    private 'relation_ship_attributes'?: object;
    public attributes?: object;
    public constructor(typeName?: string, attributes?: object) { 
        this['type_name'] = typeName;
        this['attributes'] = attributes;
    }
    public withTypeName(typeName: string): AtlasAssetEntity {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withGuid(guid: string): AtlasAssetEntity {
        this['guid'] = guid;
        return this;
    }
    public withVersion(version: number): AtlasAssetEntity {
        this['version'] = version;
        return this;
    }
    public withUpdateTime(updateTime: number): AtlasAssetEntity {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withUpdateUser(updateUser: string): AtlasAssetEntity {
        this['update_user'] = updateUser;
        return this;
    }
    public set updateUser(updateUser: string  | undefined) {
        this['update_user'] = updateUser;
    }
    public get updateUser(): string | undefined {
        return this['update_user'];
    }
    public withCreateTime(createTime: number): AtlasAssetEntity {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): AtlasAssetEntity {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withDisplayText(displayText: string): AtlasAssetEntity {
        this['display_text'] = displayText;
        return this;
    }
    public set displayText(displayText: string  | undefined) {
        this['display_text'] = displayText;
    }
    public get displayText(): string | undefined {
        return this['display_text'];
    }
    public withStatus(status: string): AtlasAssetEntity {
        this['status'] = status;
        return this;
    }
    public withClassifications(classifications: Array<AtlasClassificationInfo>): AtlasAssetEntity {
        this['classifications'] = classifications;
        return this;
    }
    public withMeanings(meanings: Array<TermAssignmentHeader>): AtlasAssetEntity {
        this['meanings'] = meanings;
        return this;
    }
    public withRelationShipAttributes(relationShipAttributes: object): AtlasAssetEntity {
        this['relation_ship_attributes'] = relationShipAttributes;
        return this;
    }
    public set relationShipAttributes(relationShipAttributes: object  | undefined) {
        this['relation_ship_attributes'] = relationShipAttributes;
    }
    public get relationShipAttributes(): object | undefined {
        return this['relation_ship_attributes'];
    }
    public withAttributes(attributes: object): AtlasAssetEntity {
        this['attributes'] = attributes;
        return this;
    }
}