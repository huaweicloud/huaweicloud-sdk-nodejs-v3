import { AttackReport } from './AttackReport';
import { InternetReport } from './InternetReport';
import { StatisticPeriod } from './StatisticPeriod';
import { VpcReport } from './VpcReport';


export class FirewallReport {
    private 'attack_info'?: AttackReport;
    public category?: string;
    private 'internet_firewall'?: InternetReport;
    private 'send_time'?: number;
    private 'statistic_period'?: StatisticPeriod;
    private 'vpc_firewall'?: VpcReport;
    public constructor() { 
    }
    public withAttackInfo(attackInfo: AttackReport): FirewallReport {
        this['attack_info'] = attackInfo;
        return this;
    }
    public set attackInfo(attackInfo: AttackReport  | undefined) {
        this['attack_info'] = attackInfo;
    }
    public get attackInfo(): AttackReport | undefined {
        return this['attack_info'];
    }
    public withCategory(category: string): FirewallReport {
        this['category'] = category;
        return this;
    }
    public withInternetFirewall(internetFirewall: InternetReport): FirewallReport {
        this['internet_firewall'] = internetFirewall;
        return this;
    }
    public set internetFirewall(internetFirewall: InternetReport  | undefined) {
        this['internet_firewall'] = internetFirewall;
    }
    public get internetFirewall(): InternetReport | undefined {
        return this['internet_firewall'];
    }
    public withSendTime(sendTime: number): FirewallReport {
        this['send_time'] = sendTime;
        return this;
    }
    public set sendTime(sendTime: number  | undefined) {
        this['send_time'] = sendTime;
    }
    public get sendTime(): number | undefined {
        return this['send_time'];
    }
    public withStatisticPeriod(statisticPeriod: StatisticPeriod): FirewallReport {
        this['statistic_period'] = statisticPeriod;
        return this;
    }
    public set statisticPeriod(statisticPeriod: StatisticPeriod  | undefined) {
        this['statistic_period'] = statisticPeriod;
    }
    public get statisticPeriod(): StatisticPeriod | undefined {
        return this['statistic_period'];
    }
    public withVpcFirewall(vpcFirewall: VpcReport): FirewallReport {
        this['vpc_firewall'] = vpcFirewall;
        return this;
    }
    public set vpcFirewall(vpcFirewall: VpcReport  | undefined) {
        this['vpc_firewall'] = vpcFirewall;
    }
    public get vpcFirewall(): VpcReport | undefined {
        return this['vpc_firewall'];
    }
}