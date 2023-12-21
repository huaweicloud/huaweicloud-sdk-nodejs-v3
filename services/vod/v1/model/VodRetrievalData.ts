

export class VodRetrievalData {
    private 'retrieval_warm'?: number;
    private 'retrieval_cold'?: number;
    private 'retrieval_cold_speed'?: number;
    public constructor() { 
    }
    public withRetrievalWarm(retrievalWarm: number): VodRetrievalData {
        this['retrieval_warm'] = retrievalWarm;
        return this;
    }
    public set retrievalWarm(retrievalWarm: number  | undefined) {
        this['retrieval_warm'] = retrievalWarm;
    }
    public get retrievalWarm(): number | undefined {
        return this['retrieval_warm'];
    }
    public withRetrievalCold(retrievalCold: number): VodRetrievalData {
        this['retrieval_cold'] = retrievalCold;
        return this;
    }
    public set retrievalCold(retrievalCold: number  | undefined) {
        this['retrieval_cold'] = retrievalCold;
    }
    public get retrievalCold(): number | undefined {
        return this['retrieval_cold'];
    }
    public withRetrievalColdSpeed(retrievalColdSpeed: number): VodRetrievalData {
        this['retrieval_cold_speed'] = retrievalColdSpeed;
        return this;
    }
    public set retrievalColdSpeed(retrievalColdSpeed: number  | undefined) {
        this['retrieval_cold_speed'] = retrievalColdSpeed;
    }
    public get retrievalColdSpeed(): number | undefined {
        return this['retrieval_cold_speed'];
    }
}