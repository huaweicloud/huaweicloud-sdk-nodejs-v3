import { StaticParam } from './StaticParam';


export class RecordForGetAuthApp {
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'api_using_time'?: number;
    private 'approval_time'?: number;
    private 'relationship_type'?: RecordForGetAuthAppRelationshipTypeEnum | string;
    private 'static_params'?: Array<StaticParam>;
    public constructor() { 
    }
    public withAppId(appId: string): RecordForGetAuthApp {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): RecordForGetAuthApp {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withInstanceId(instanceId: string): RecordForGetAuthApp {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): RecordForGetAuthApp {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withApiUsingTime(apiUsingTime: number): RecordForGetAuthApp {
        this['api_using_time'] = apiUsingTime;
        return this;
    }
    public set apiUsingTime(apiUsingTime: number  | undefined) {
        this['api_using_time'] = apiUsingTime;
    }
    public get apiUsingTime(): number | undefined {
        return this['api_using_time'];
    }
    public withApprovalTime(approvalTime: number): RecordForGetAuthApp {
        this['approval_time'] = approvalTime;
        return this;
    }
    public set approvalTime(approvalTime: number  | undefined) {
        this['approval_time'] = approvalTime;
    }
    public get approvalTime(): number | undefined {
        return this['approval_time'];
    }
    public withRelationshipType(relationshipType: RecordForGetAuthAppRelationshipTypeEnum | string): RecordForGetAuthApp {
        this['relationship_type'] = relationshipType;
        return this;
    }
    public set relationshipType(relationshipType: RecordForGetAuthAppRelationshipTypeEnum | string  | undefined) {
        this['relationship_type'] = relationshipType;
    }
    public get relationshipType(): RecordForGetAuthAppRelationshipTypeEnum | string | undefined {
        return this['relationship_type'];
    }
    public withStaticParams(staticParams: Array<StaticParam>): RecordForGetAuthApp {
        this['static_params'] = staticParams;
        return this;
    }
    public set staticParams(staticParams: Array<StaticParam>  | undefined) {
        this['static_params'] = staticParams;
    }
    public get staticParams(): Array<StaticParam> | undefined {
        return this['static_params'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecordForGetAuthAppRelationshipTypeEnum {
    LINK_WAITING_CHECK = 'LINK_WAITING_CHECK',
    LINKED = 'LINKED',
    OFFLINE_WAITING_CHECK = 'OFFLINE_WAITING_CHECK',
    RENEW_WAITING_CHECK = 'RENEW_WAITING_CHECK'
}
