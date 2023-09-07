import { RecommendFlavor } from './RecommendFlavor';


export class RecommendedProduct {
    private 'recommended_level'?: RecommendedProductRecommendedLevelEnum | string;
    private 'application_scenarios'?: RecommendedProductApplicationScenariosEnum | string;
    public flavors?: Array<RecommendFlavor>;
    public constructor(recommendedLevel?: string, applicationScenarios?: string, flavors?: Array<RecommendFlavor>) { 
        this['recommended_level'] = recommendedLevel;
        this['application_scenarios'] = applicationScenarios;
        this['flavors'] = flavors;
    }
    public withRecommendedLevel(recommendedLevel: RecommendedProductRecommendedLevelEnum | string): RecommendedProduct {
        this['recommended_level'] = recommendedLevel;
        return this;
    }
    public set recommendedLevel(recommendedLevel: RecommendedProductRecommendedLevelEnum | string  | undefined) {
        this['recommended_level'] = recommendedLevel;
    }
    public get recommendedLevel(): RecommendedProductRecommendedLevelEnum | string | undefined {
        return this['recommended_level'];
    }
    public withApplicationScenarios(applicationScenarios: RecommendedProductApplicationScenariosEnum | string): RecommendedProduct {
        this['application_scenarios'] = applicationScenarios;
        return this;
    }
    public set applicationScenarios(applicationScenarios: RecommendedProductApplicationScenariosEnum | string  | undefined) {
        this['application_scenarios'] = applicationScenarios;
    }
    public get applicationScenarios(): RecommendedProductApplicationScenariosEnum | string | undefined {
        return this['application_scenarios'];
    }
    public withFlavors(flavors: Array<RecommendFlavor>): RecommendedProduct {
        this['flavors'] = flavors;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecommendedProductRecommendedLevelEnum {
    E_0 = '0',
    E_1 = '1',
    E_2 = '2'
}
/**
    * @export
    * @enum {string}
    */
export enum RecommendedProductApplicationScenariosEnum {
    E_0 = '0',
    E_1 = '1',
    E_2 = '2'
}
