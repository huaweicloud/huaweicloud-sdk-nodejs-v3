
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityAdminResponse extends SdkResponse {
    private 'manager_type'?: ShowSecurityAdminResponseManagerTypeEnum | string;
    private 'manager_id'?: string;
    private 'manager_name'?: string;
    public constructor() { 
        super();
    }
    public withManagerType(managerType: ShowSecurityAdminResponseManagerTypeEnum | string): ShowSecurityAdminResponse {
        this['manager_type'] = managerType;
        return this;
    }
    public set managerType(managerType: ShowSecurityAdminResponseManagerTypeEnum | string  | undefined) {
        this['manager_type'] = managerType;
    }
    public get managerType(): ShowSecurityAdminResponseManagerTypeEnum | string | undefined {
        return this['manager_type'];
    }
    public withManagerId(managerId: string): ShowSecurityAdminResponse {
        this['manager_id'] = managerId;
        return this;
    }
    public set managerId(managerId: string  | undefined) {
        this['manager_id'] = managerId;
    }
    public get managerId(): string | undefined {
        return this['manager_id'];
    }
    public withManagerName(managerName: string): ShowSecurityAdminResponse {
        this['manager_name'] = managerName;
        return this;
    }
    public set managerName(managerName: string  | undefined) {
        this['manager_name'] = managerName;
    }
    public get managerName(): string | undefined {
        return this['manager_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSecurityAdminResponseManagerTypeEnum {
    USER = 'USER',
    USER_GROUP = 'USER_GROUP'
}
