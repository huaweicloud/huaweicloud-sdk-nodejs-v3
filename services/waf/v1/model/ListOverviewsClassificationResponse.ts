import { AttackTypeClassificationItem } from './AttackTypeClassificationItem';
import { DomainClassificationItem } from './DomainClassificationItem';
import { GeoClassificationItem } from './GeoClassificationItem';
import { IpClassificationItem } from './IpClassificationItem';
import { UrlClassificationItem } from './UrlClassificationItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOverviewsClassificationResponse extends SdkResponse {
    public domain?: DomainClassificationItem;
    private 'attack_type'?: AttackTypeClassificationItem | undefined;
    public ip?: IpClassificationItem;
    public url?: UrlClassificationItem;
    public geo?: GeoClassificationItem;
    public constructor() { 
        super();
    }
    public withDomain(domain: DomainClassificationItem): ListOverviewsClassificationResponse {
        this['domain'] = domain;
        return this;
    }
    public withAttackType(attackType: AttackTypeClassificationItem): ListOverviewsClassificationResponse {
        this['attack_type'] = attackType;
        return this;
    }
    public set attackType(attackType: AttackTypeClassificationItem | undefined) {
        this['attack_type'] = attackType;
    }
    public get attackType() {
        return this['attack_type'];
    }
    public withIp(ip: IpClassificationItem): ListOverviewsClassificationResponse {
        this['ip'] = ip;
        return this;
    }
    public withUrl(url: UrlClassificationItem): ListOverviewsClassificationResponse {
        this['url'] = url;
        return this;
    }
    public withGeo(geo: GeoClassificationItem): ListOverviewsClassificationResponse {
        this['geo'] = geo;
        return this;
    }
}