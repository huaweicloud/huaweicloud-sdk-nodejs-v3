

export class CreateBusinessModel {
    public name?: string;
    private 'eps_id'?: string;
    private 'display_name'?: string;
    public descp?: string;
    private 'cmdb_datasource_type'?: CreateBusinessModelCmdbDatasourceTypeEnum | string;
    public constructor(name?: string, displayName?: string, descp?: string) { 
        this['name'] = name;
        this['display_name'] = displayName;
        this['descp'] = descp;
    }
    public withName(name: string): CreateBusinessModel {
        this['name'] = name;
        return this;
    }
    public withEpsId(epsId: string): CreateBusinessModel {
        this['eps_id'] = epsId;
        return this;
    }
    public set epsId(epsId: string  | undefined) {
        this['eps_id'] = epsId;
    }
    public get epsId(): string | undefined {
        return this['eps_id'];
    }
    public withDisplayName(displayName: string): CreateBusinessModel {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withDescp(descp: string): CreateBusinessModel {
        this['descp'] = descp;
        return this;
    }
    public withCmdbDatasourceType(cmdbDatasourceType: CreateBusinessModelCmdbDatasourceTypeEnum | string): CreateBusinessModel {
        this['cmdb_datasource_type'] = cmdbDatasourceType;
        return this;
    }
    public set cmdbDatasourceType(cmdbDatasourceType: CreateBusinessModelCmdbDatasourceTypeEnum | string  | undefined) {
        this['cmdb_datasource_type'] = cmdbDatasourceType;
    }
    public get cmdbDatasourceType(): CreateBusinessModelCmdbDatasourceTypeEnum | string | undefined {
        return this['cmdb_datasource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateBusinessModelCmdbDatasourceTypeEnum {
    OTEL = 'OTEL',
    SKYWALKING = 'SKYWALKING'
}
