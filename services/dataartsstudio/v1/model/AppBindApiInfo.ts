import { StaticParam } from './StaticParam';


export class AppBindApiInfo {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'approval_time'?: number;
    public manager?: string;
    public deadline?: number;
    private 'relationship_type'?: AppBindApiInfoRelationshipTypeEnum | string;
    private 'static_params'?: Array<StaticParam>;
    public constructor() { 
    }
    public withId(id: string): AppBindApiInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): AppBindApiInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): AppBindApiInfo {
        this['description'] = description;
        return this;
    }
    public withApprovalTime(approvalTime: number): AppBindApiInfo {
        this['approval_time'] = approvalTime;
        return this;
    }
    public set approvalTime(approvalTime: number  | undefined) {
        this['approval_time'] = approvalTime;
    }
    public get approvalTime(): number | undefined {
        return this['approval_time'];
    }
    public withManager(manager: string): AppBindApiInfo {
        this['manager'] = manager;
        return this;
    }
    public withDeadline(deadline: number): AppBindApiInfo {
        this['deadline'] = deadline;
        return this;
    }
    public withRelationshipType(relationshipType: AppBindApiInfoRelationshipTypeEnum | string): AppBindApiInfo {
        this['relationship_type'] = relationshipType;
        return this;
    }
    public set relationshipType(relationshipType: AppBindApiInfoRelationshipTypeEnum | string  | undefined) {
        this['relationship_type'] = relationshipType;
    }
    public get relationshipType(): AppBindApiInfoRelationshipTypeEnum | string | undefined {
        return this['relationship_type'];
    }
    public withStaticParams(staticParams: Array<StaticParam>): AppBindApiInfo {
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
export enum AppBindApiInfoRelationshipTypeEnum {
    LINK_WAITING_CHECK = 'LINK_WAITING_CHECK',
    LINKED = 'LINKED',
    OFFLINE_WAITING_CHECK = 'OFFLINE_WAITING_CHECK',
    RENEW_WAITING_CHECK = 'RENEW_WAITING_CHECK'
}
