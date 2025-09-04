
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOtTemplateResponse extends SdkResponse {
    private 'tpl_id'?: string;
    public name?: string;
    public description?: string;
    private 'datasource_meta'?: object;
    private 'point_meta'?: object;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withTplId(tplId: string): ShowOtTemplateResponse {
        this['tpl_id'] = tplId;
        return this;
    }
    public set tplId(tplId: string  | undefined) {
        this['tpl_id'] = tplId;
    }
    public get tplId(): string | undefined {
        return this['tpl_id'];
    }
    public withName(name: string): ShowOtTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowOtTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withDatasourceMeta(datasourceMeta: object): ShowOtTemplateResponse {
        this['datasource_meta'] = datasourceMeta;
        return this;
    }
    public set datasourceMeta(datasourceMeta: object  | undefined) {
        this['datasource_meta'] = datasourceMeta;
    }
    public get datasourceMeta(): object | undefined {
        return this['datasource_meta'];
    }
    public withPointMeta(pointMeta: object): ShowOtTemplateResponse {
        this['point_meta'] = pointMeta;
        return this;
    }
    public set pointMeta(pointMeta: object  | undefined) {
        this['point_meta'] = pointMeta;
    }
    public get pointMeta(): object | undefined {
        return this['point_meta'];
    }
    public withCreateTime(createTime: string): ShowOtTemplateResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowOtTemplateResponse {
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