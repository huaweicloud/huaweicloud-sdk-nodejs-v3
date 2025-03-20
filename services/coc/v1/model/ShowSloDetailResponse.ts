import { SliDetail } from './SliDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSloDetailResponse extends SdkResponse {
    public id?: string;
    private 'application_name'?: string;
    private 'application_id'?: string;
    private 'slo_targets'?: number;
    private 'sli_list'?: Array<SliDetail>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowSloDetailResponse {
        this['id'] = id;
        return this;
    }
    public withApplicationName(applicationName: string): ShowSloDetailResponse {
        this['application_name'] = applicationName;
        return this;
    }
    public set applicationName(applicationName: string  | undefined) {
        this['application_name'] = applicationName;
    }
    public get applicationName(): string | undefined {
        return this['application_name'];
    }
    public withApplicationId(applicationId: string): ShowSloDetailResponse {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withSloTargets(sloTargets: number): ShowSloDetailResponse {
        this['slo_targets'] = sloTargets;
        return this;
    }
    public set sloTargets(sloTargets: number  | undefined) {
        this['slo_targets'] = sloTargets;
    }
    public get sloTargets(): number | undefined {
        return this['slo_targets'];
    }
    public withSliList(sliList: Array<SliDetail>): ShowSloDetailResponse {
        this['sli_list'] = sliList;
        return this;
    }
    public set sliList(sliList: Array<SliDetail>  | undefined) {
        this['sli_list'] = sliList;
    }
    public get sliList(): Array<SliDetail> | undefined {
        return this['sli_list'];
    }
}