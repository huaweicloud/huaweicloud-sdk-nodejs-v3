
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckEnterpriseIdResponse extends SdkResponse {
    private 'is_used'?: boolean;
    private 'enterprise_id'?: string;
    public constructor() { 
        super();
    }
    public withIsUsed(isUsed: boolean): CheckEnterpriseIdResponse {
        this['is_used'] = isUsed;
        return this;
    }
    public set isUsed(isUsed: boolean  | undefined) {
        this['is_used'] = isUsed;
    }
    public get isUsed(): boolean | undefined {
        return this['is_used'];
    }
    public withEnterpriseId(enterpriseId: string): CheckEnterpriseIdResponse {
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