
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEnterpriseIdResponse extends SdkResponse {
    private 'enterprise_id'?: string;
    public constructor() { 
        super();
    }
    public withEnterpriseId(enterpriseId: string): UpdateEnterpriseIdResponse {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
}