import { ConclusionItem } from './ConclusionItem';


export class DiagnosisItem {
    public name?: DiagnosisItemNameEnum | string;
    private 'cause_ids'?: Array<ConclusionItem>;
    private 'impact_ids'?: Array<ConclusionItem>;
    private 'advice_ids'?: Array<ConclusionItem>;
    public result?: DiagnosisItemResultEnum | string;
    public constructor(name?: string, result?: string) { 
        this['name'] = name;
        this['result'] = result;
    }
    public withName(name: DiagnosisItemNameEnum | string): DiagnosisItem {
        this['name'] = name;
        return this;
    }
    public withCauseIds(causeIds: Array<ConclusionItem>): DiagnosisItem {
        this['cause_ids'] = causeIds;
        return this;
    }
    public set causeIds(causeIds: Array<ConclusionItem>  | undefined) {
        this['cause_ids'] = causeIds;
    }
    public get causeIds(): Array<ConclusionItem> | undefined {
        return this['cause_ids'];
    }
    public withImpactIds(impactIds: Array<ConclusionItem>): DiagnosisItem {
        this['impact_ids'] = impactIds;
        return this;
    }
    public set impactIds(impactIds: Array<ConclusionItem>  | undefined) {
        this['impact_ids'] = impactIds;
    }
    public get impactIds(): Array<ConclusionItem> | undefined {
        return this['impact_ids'];
    }
    public withAdviceIds(adviceIds: Array<ConclusionItem>): DiagnosisItem {
        this['advice_ids'] = adviceIds;
        return this;
    }
    public set adviceIds(adviceIds: Array<ConclusionItem>  | undefined) {
        this['advice_ids'] = adviceIds;
    }
    public get adviceIds(): Array<ConclusionItem> | undefined {
        return this['advice_ids'];
    }
    public withResult(result: DiagnosisItemResultEnum | string): DiagnosisItem {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DiagnosisItemNameEnum {
    CONNECTION_NUM = 'connection_num',
    RX_CONTROLLED = 'rx_controlled',
    PERSISTENCE = 'persistence',
    CENTRALIZED_EXPIRATION = 'centralized_expiration',
    INNER_MEMORY_FRAGMENTATION = 'inner_memory_fragmentation',
    TIME_CONSUMING_COMMANDS = 'time_consuming_commands',
    HIT_RATIO = 'hit_ratio',
    MEMORY_USAGE = 'memory_usage',
    CPU_USAGE = 'cpu_usage'
}
/**
    * @export
    * @enum {string}
    */
export enum DiagnosisItemResultEnum {
    FAILED = 'failed',
    ABNORMAL = 'abnormal',
    NORMAL = 'normal'
}
