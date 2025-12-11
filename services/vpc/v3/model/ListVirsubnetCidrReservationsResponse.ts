import { PageInfo } from './PageInfo';
import { VirsubnetCidrReservation } from './VirsubnetCidrReservation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVirsubnetCidrReservationsResponse extends SdkResponse {
    private 'virsubnet_cidr_reservations'?: Array<VirsubnetCidrReservation>;
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withVirsubnetCidrReservations(virsubnetCidrReservations: Array<VirsubnetCidrReservation>): ListVirsubnetCidrReservationsResponse {
        this['virsubnet_cidr_reservations'] = virsubnetCidrReservations;
        return this;
    }
    public set virsubnetCidrReservations(virsubnetCidrReservations: Array<VirsubnetCidrReservation>  | undefined) {
        this['virsubnet_cidr_reservations'] = virsubnetCidrReservations;
    }
    public get virsubnetCidrReservations(): Array<VirsubnetCidrReservation> | undefined {
        return this['virsubnet_cidr_reservations'];
    }
    public withRequestId(requestId: string): ListVirsubnetCidrReservationsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListVirsubnetCidrReservationsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}