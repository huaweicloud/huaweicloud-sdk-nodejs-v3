

export class ShowCrossCloudDisasterRelationsRequest {
    private 'X-Language'?: ShowCrossCloudDisasterRelationsRequestXLanguageEnum | string;
    public limit?: number;
    public offset?: number;
    private 'instance_name'?: string;
    private 'instance_id'?: string;
    private 'dr_role'?: ShowCrossCloudDisasterRelationsRequestDrRoleEnum | string;
    private 'dr_type'?: ShowCrossCloudDisasterRelationsRequestDrTypeEnum | string;
    private 'dr_status'?: ShowCrossCloudDisasterRelationsRequestDrStatusEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ShowCrossCloudDisasterRelationsRequestXLanguageEnum | string): ShowCrossCloudDisasterRelationsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowCrossCloudDisasterRelationsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowCrossCloudDisasterRelationsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withLimit(limit: number): ShowCrossCloudDisasterRelationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowCrossCloudDisasterRelationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withInstanceName(instanceName: string): ShowCrossCloudDisasterRelationsRequest {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withInstanceId(instanceId: string): ShowCrossCloudDisasterRelationsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDrRole(drRole: ShowCrossCloudDisasterRelationsRequestDrRoleEnum | string): ShowCrossCloudDisasterRelationsRequest {
        this['dr_role'] = drRole;
        return this;
    }
    public set drRole(drRole: ShowCrossCloudDisasterRelationsRequestDrRoleEnum | string  | undefined) {
        this['dr_role'] = drRole;
    }
    public get drRole(): ShowCrossCloudDisasterRelationsRequestDrRoleEnum | string | undefined {
        return this['dr_role'];
    }
    public withDrType(drType: ShowCrossCloudDisasterRelationsRequestDrTypeEnum | string): ShowCrossCloudDisasterRelationsRequest {
        this['dr_type'] = drType;
        return this;
    }
    public set drType(drType: ShowCrossCloudDisasterRelationsRequestDrTypeEnum | string  | undefined) {
        this['dr_type'] = drType;
    }
    public get drType(): ShowCrossCloudDisasterRelationsRequestDrTypeEnum | string | undefined {
        return this['dr_type'];
    }
    public withDrStatus(drStatus: ShowCrossCloudDisasterRelationsRequestDrStatusEnum | string): ShowCrossCloudDisasterRelationsRequest {
        this['dr_status'] = drStatus;
        return this;
    }
    public set drStatus(drStatus: ShowCrossCloudDisasterRelationsRequestDrStatusEnum | string  | undefined) {
        this['dr_status'] = drStatus;
    }
    public get drStatus(): ShowCrossCloudDisasterRelationsRequestDrStatusEnum | string | undefined {
        return this['dr_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowCrossCloudDisasterRelationsRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowCrossCloudDisasterRelationsRequestDrRoleEnum {
    MASTER = 'master',
    DISASTER = 'disaster'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowCrossCloudDisasterRelationsRequestDrTypeEnum {
    STREAM = 'stream',
    DORADO = 'dorado'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowCrossCloudDisasterRelationsRequestDrStatusEnum {
    NORMAL = 'normal',
    FAILOVER = 'failover',
    PENDING = 'pending',
    PRE_CHECK_FAILED = 'pre_check_failed',
    PRE_CHECKING = 'pre_checking'
}
