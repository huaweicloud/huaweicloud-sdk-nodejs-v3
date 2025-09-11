

export class InjectionStatisticsBean {
    private 'injection_num'?: number;
    public period?: string;
    public constructor() { 
    }
    public withInjectionNum(injectionNum: number): InjectionStatisticsBean {
        this['injection_num'] = injectionNum;
        return this;
    }
    public set injectionNum(injectionNum: number  | undefined) {
        this['injection_num'] = injectionNum;
    }
    public get injectionNum(): number | undefined {
        return this['injection_num'];
    }
    public withPeriod(period: string): InjectionStatisticsBean {
        this['period'] = period;
        return this;
    }
}