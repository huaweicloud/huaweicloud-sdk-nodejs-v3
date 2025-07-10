
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeregisterOrganizationalUnitResponse extends SdkResponse {
    private 'organizational_unit_operation_id'?: string;
    public constructor() { 
        super();
    }
    public withOrganizationalUnitOperationId(organizationalUnitOperationId: string): DeregisterOrganizationalUnitResponse {
        this['organizational_unit_operation_id'] = organizationalUnitOperationId;
        return this;
    }
    public set organizationalUnitOperationId(organizationalUnitOperationId: string  | undefined) {
        this['organizational_unit_operation_id'] = organizationalUnitOperationId;
    }
    public get organizationalUnitOperationId(): string | undefined {
        return this['organizational_unit_operation_id'];
    }
}