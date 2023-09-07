

export class ListInstancesRecommendationRequest {
    public engine?: ListInstancesRecommendationRequestEngineEnum | string;
    public constructor(engine?: string) { 
        this['engine'] = engine;
    }
    public withEngine(engine: ListInstancesRecommendationRequestEngineEnum | string): ListInstancesRecommendationRequest {
        this['engine'] = engine;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstancesRecommendationRequestEngineEnum {
    MYSQL = 'mysql',
    POSTGRESQL = 'postgresql',
    SQLSERVER = 'sqlserver'
}
