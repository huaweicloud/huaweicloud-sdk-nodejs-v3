

export class CreateOtTemplatesReqDTO {
    private 'tpl_id'?: string;
    public name?: string;
    public description?: string;
    private 'datasource_meta'?: object;
    private 'point_meta'?: object;
    public constructor(tplId?: string, name?: string, description?: string, datasourceMeta?: object, pointMeta?: object) { 
        this['tpl_id'] = tplId;
        this['name'] = name;
        this['description'] = description;
        this['datasource_meta'] = datasourceMeta;
        this['point_meta'] = pointMeta;
    }
    public withTplId(tplId: string): CreateOtTemplatesReqDTO {
        this['tpl_id'] = tplId;
        return this;
    }
    public set tplId(tplId: string  | undefined) {
        this['tpl_id'] = tplId;
    }
    public get tplId(): string | undefined {
        return this['tpl_id'];
    }
    public withName(name: string): CreateOtTemplatesReqDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateOtTemplatesReqDTO {
        this['description'] = description;
        return this;
    }
    public withDatasourceMeta(datasourceMeta: object): CreateOtTemplatesReqDTO {
        this['datasource_meta'] = datasourceMeta;
        return this;
    }
    public set datasourceMeta(datasourceMeta: object  | undefined) {
        this['datasource_meta'] = datasourceMeta;
    }
    public get datasourceMeta(): object | undefined {
        return this['datasource_meta'];
    }
    public withPointMeta(pointMeta: object): CreateOtTemplatesReqDTO {
        this['point_meta'] = pointMeta;
        return this;
    }
    public set pointMeta(pointMeta: object  | undefined) {
        this['point_meta'] = pointMeta;
    }
    public get pointMeta(): object | undefined {
        return this['point_meta'];
    }
}