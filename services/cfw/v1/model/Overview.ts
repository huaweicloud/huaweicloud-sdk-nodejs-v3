import { AccessPolicy } from './AccessPolicy';
import { AttackEvent } from './AttackEvent';
import { ChangedVO } from './ChangedVO';
import { TrendVO } from './TrendVO';


export class Overview {
    private 'access_policies'?: AccessPolicy;
    public assets?: ChangedVO;
    private 'attack_event'?: AttackEvent;
    private 'traffic_peak'?: TrendVO;
    public constructor() { 
    }
    public withAccessPolicies(accessPolicies: AccessPolicy): Overview {
        this['access_policies'] = accessPolicies;
        return this;
    }
    public set accessPolicies(accessPolicies: AccessPolicy  | undefined) {
        this['access_policies'] = accessPolicies;
    }
    public get accessPolicies(): AccessPolicy | undefined {
        return this['access_policies'];
    }
    public withAssets(assets: ChangedVO): Overview {
        this['assets'] = assets;
        return this;
    }
    public withAttackEvent(attackEvent: AttackEvent): Overview {
        this['attack_event'] = attackEvent;
        return this;
    }
    public set attackEvent(attackEvent: AttackEvent  | undefined) {
        this['attack_event'] = attackEvent;
    }
    public get attackEvent(): AttackEvent | undefined {
        return this['attack_event'];
    }
    public withTrafficPeak(trafficPeak: TrendVO): Overview {
        this['traffic_peak'] = trafficPeak;
        return this;
    }
    public set trafficPeak(trafficPeak: TrendVO  | undefined) {
        this['traffic_peak'] = trafficPeak;
    }
    public get trafficPeak(): TrendVO | undefined {
        return this['traffic_peak'];
    }
}