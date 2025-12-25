

export class DpeClassifyItemDetail {
    public id?: string;
    private 'classifier_id'?: string;
    private 'classifier_type_id'?: string;
    private 'mapping_id'?: string;
    private 'classifier_order'?: number;
    public expression?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withId(id: string): DpeClassifyItemDetail {
        this['id'] = id;
        return this;
    }
    public withClassifierId(classifierId: string): DpeClassifyItemDetail {
        this['classifier_id'] = classifierId;
        return this;
    }
    public set classifierId(classifierId: string  | undefined) {
        this['classifier_id'] = classifierId;
    }
    public get classifierId(): string | undefined {
        return this['classifier_id'];
    }
    public withClassifierTypeId(classifierTypeId: string): DpeClassifyItemDetail {
        this['classifier_type_id'] = classifierTypeId;
        return this;
    }
    public set classifierTypeId(classifierTypeId: string  | undefined) {
        this['classifier_type_id'] = classifierTypeId;
    }
    public get classifierTypeId(): string | undefined {
        return this['classifier_type_id'];
    }
    public withMappingId(mappingId: string): DpeClassifyItemDetail {
        this['mapping_id'] = mappingId;
        return this;
    }
    public set mappingId(mappingId: string  | undefined) {
        this['mapping_id'] = mappingId;
    }
    public get mappingId(): string | undefined {
        return this['mapping_id'];
    }
    public withClassifierOrder(classifierOrder: number): DpeClassifyItemDetail {
        this['classifier_order'] = classifierOrder;
        return this;
    }
    public set classifierOrder(classifierOrder: number  | undefined) {
        this['classifier_order'] = classifierOrder;
    }
    public get classifierOrder(): number | undefined {
        return this['classifier_order'];
    }
    public withExpression(expression: string): DpeClassifyItemDetail {
        this['expression'] = expression;
        return this;
    }
    public withCreateTime(createTime: string): DpeClassifyItemDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): DpeClassifyItemDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}