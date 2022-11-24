
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountEipsResponse extends SdkResponse {
    private 'object_id'?: string | undefined;
    private 'eip_total'?: number | undefined;
    private 'eip_protected'?: number | undefined;
    public constructor() { 
        super();
    }
    public withObjectId(objectId: string): CountEipsResponse {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId() {
        return this['object_id'];
    }
    public withEipTotal(eipTotal: number): CountEipsResponse {
        this['eip_total'] = eipTotal;
        return this;
    }
    public set eipTotal(eipTotal: number | undefined) {
        this['eip_total'] = eipTotal;
    }
    public get eipTotal() {
        return this['eip_total'];
    }
    public withEipProtected(eipProtected: number): CountEipsResponse {
        this['eip_protected'] = eipProtected;
        return this;
    }
    public set eipProtected(eipProtected: number | undefined) {
        this['eip_protected'] = eipProtected;
    }
    public get eipProtected() {
        return this['eip_protected'];
    }
}