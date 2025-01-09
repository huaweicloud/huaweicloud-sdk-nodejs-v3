import { SoldOutInfo } from './SoldOutInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAzDetailsResponse extends SdkResponse {
    public id?: string;
    private 'region_id'?: string;
    public type?: string;
    private 'display_name'?: string;
    public status?: string;
    private 'sold_out'?: SoldOutInfo;
    private 'product_ids'?: Array<string>;
    public mode?: string;
    public alias?: string;
    private 'public_border_group'?: string;
    public category?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowAzDetailsResponse {
        this['id'] = id;
        return this;
    }
    public withRegionId(regionId: string): ShowAzDetailsResponse {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withType(type: string): ShowAzDetailsResponse {
        this['type'] = type;
        return this;
    }
    public withDisplayName(displayName: string): ShowAzDetailsResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withStatus(status: string): ShowAzDetailsResponse {
        this['status'] = status;
        return this;
    }
    public withSoldOut(soldOut: SoldOutInfo): ShowAzDetailsResponse {
        this['sold_out'] = soldOut;
        return this;
    }
    public set soldOut(soldOut: SoldOutInfo  | undefined) {
        this['sold_out'] = soldOut;
    }
    public get soldOut(): SoldOutInfo | undefined {
        return this['sold_out'];
    }
    public withProductIds(productIds: Array<string>): ShowAzDetailsResponse {
        this['product_ids'] = productIds;
        return this;
    }
    public set productIds(productIds: Array<string>  | undefined) {
        this['product_ids'] = productIds;
    }
    public get productIds(): Array<string> | undefined {
        return this['product_ids'];
    }
    public withMode(mode: string): ShowAzDetailsResponse {
        this['mode'] = mode;
        return this;
    }
    public withAlias(alias: string): ShowAzDetailsResponse {
        this['alias'] = alias;
        return this;
    }
    public withPublicBorderGroup(publicBorderGroup: string): ShowAzDetailsResponse {
        this['public_border_group'] = publicBorderGroup;
        return this;
    }
    public set publicBorderGroup(publicBorderGroup: string  | undefined) {
        this['public_border_group'] = publicBorderGroup;
    }
    public get publicBorderGroup(): string | undefined {
        return this['public_border_group'];
    }
    public withCategory(category: number): ShowAzDetailsResponse {
        this['category'] = category;
        return this;
    }
}