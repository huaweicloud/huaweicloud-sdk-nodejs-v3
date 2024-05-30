import { BizTypeEnum } from './BizTypeEnum';


export class BizDatasourceRelationVO {
    public id?: string;
    private 'biz_id'?: string;
    private 'biz_type'?: BizTypeEnum;
    private 'dw_type'?: string;
    private 'dw_id'?: string;
    private 'dw_name'?: string;
    private 'db_name'?: string;
    private 'queue_name'?: string;
    public schema?: string;
    public constructor(dwType?: string, dwId?: string) { 
        this['dw_type'] = dwType;
        this['dw_id'] = dwId;
    }
    public withId(id: string): BizDatasourceRelationVO {
        this['id'] = id;
        return this;
    }
    public withBizId(bizId: string): BizDatasourceRelationVO {
        this['biz_id'] = bizId;
        return this;
    }
    public set bizId(bizId: string  | undefined) {
        this['biz_id'] = bizId;
    }
    public get bizId(): string | undefined {
        return this['biz_id'];
    }
    public withBizType(bizType: BizTypeEnum): BizDatasourceRelationVO {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: BizTypeEnum  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): BizTypeEnum | undefined {
        return this['biz_type'];
    }
    public withDwType(dwType: string): BizDatasourceRelationVO {
        this['dw_type'] = dwType;
        return this;
    }
    public set dwType(dwType: string  | undefined) {
        this['dw_type'] = dwType;
    }
    public get dwType(): string | undefined {
        return this['dw_type'];
    }
    public withDwId(dwId: string): BizDatasourceRelationVO {
        this['dw_id'] = dwId;
        return this;
    }
    public set dwId(dwId: string  | undefined) {
        this['dw_id'] = dwId;
    }
    public get dwId(): string | undefined {
        return this['dw_id'];
    }
    public withDwName(dwName: string): BizDatasourceRelationVO {
        this['dw_name'] = dwName;
        return this;
    }
    public set dwName(dwName: string  | undefined) {
        this['dw_name'] = dwName;
    }
    public get dwName(): string | undefined {
        return this['dw_name'];
    }
    public withDbName(dbName: string): BizDatasourceRelationVO {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withQueueName(queueName: string): BizDatasourceRelationVO {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withSchema(schema: string): BizDatasourceRelationVO {
        this['schema'] = schema;
        return this;
    }
}