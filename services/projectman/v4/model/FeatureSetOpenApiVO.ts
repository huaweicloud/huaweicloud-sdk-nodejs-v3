import { UserEntity } from './UserEntity';


export class FeatureSetOpenApiVO {
    public id?: string;
    private 'number'?: string;
    private 'parent_id'?: string;
    public title?: string;
    private 'position_float'?: number;
    private 'created_by'?: UserEntity;
    private 'modified_by'?: UserEntity;
    private 'created_date'?: string;
    private 'modified_date'?: string;
    private 'child_fs'?: Array<FeatureSetOpenApiVO>;
    public constructor() { 
    }
    public withId(id: string): FeatureSetOpenApiVO {
        this['id'] = id;
        return this;
    }
    public withModelNumber(modelNumber: string): FeatureSetOpenApiVO {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withParentId(parentId: string): FeatureSetOpenApiVO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withTitle(title: string): FeatureSetOpenApiVO {
        this['title'] = title;
        return this;
    }
    public withPositionFloat(positionFloat: number): FeatureSetOpenApiVO {
        this['position_float'] = positionFloat;
        return this;
    }
    public set positionFloat(positionFloat: number  | undefined) {
        this['position_float'] = positionFloat;
    }
    public get positionFloat(): number | undefined {
        return this['position_float'];
    }
    public withCreatedBy(createdBy: UserEntity): FeatureSetOpenApiVO {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: UserEntity  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): UserEntity | undefined {
        return this['created_by'];
    }
    public withModifiedBy(modifiedBy: UserEntity): FeatureSetOpenApiVO {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: UserEntity  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): UserEntity | undefined {
        return this['modified_by'];
    }
    public withCreatedDate(createdDate: string): FeatureSetOpenApiVO {
        this['created_date'] = createdDate;
        return this;
    }
    public set createdDate(createdDate: string  | undefined) {
        this['created_date'] = createdDate;
    }
    public get createdDate(): string | undefined {
        return this['created_date'];
    }
    public withModifiedDate(modifiedDate: string): FeatureSetOpenApiVO {
        this['modified_date'] = modifiedDate;
        return this;
    }
    public set modifiedDate(modifiedDate: string  | undefined) {
        this['modified_date'] = modifiedDate;
    }
    public get modifiedDate(): string | undefined {
        return this['modified_date'];
    }
    public withChildFs(childFs: Array<FeatureSetOpenApiVO>): FeatureSetOpenApiVO {
        this['child_fs'] = childFs;
        return this;
    }
    public set childFs(childFs: Array<FeatureSetOpenApiVO>  | undefined) {
        this['child_fs'] = childFs;
    }
    public get childFs(): Array<FeatureSetOpenApiVO> | undefined {
        return this['child_fs'];
    }
}