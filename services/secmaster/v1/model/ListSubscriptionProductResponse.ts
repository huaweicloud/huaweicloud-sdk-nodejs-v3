import { ProductRspBasic } from './ProductRspBasic';
import { ProductRspLargeScreen } from './ProductRspLargeScreen';
import { ProductRspLogAnalysis } from './ProductRspLogAnalysis';
import { ProductRspLogCollection } from './ProductRspLogCollection';
import { ProductRspLogRetention } from './ProductRspLogRetention';
import { ProductRspProfessional } from './ProductRspProfessional';
import { ProductRspSoar } from './ProductRspSoar';
import { ProductRspStandard } from './ProductRspStandard';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSubscriptionProductResponse extends SdkResponse {
    public basic?: ProductRspBasic;
    public standard?: ProductRspStandard;
    public professional?: ProductRspProfessional;
    private 'large_screen'?: ProductRspLargeScreen;
    private 'log_collection'?: ProductRspLogCollection;
    private 'log_retention'?: ProductRspLogRetention;
    private 'log_analysis'?: ProductRspLogAnalysis;
    public soar?: ProductRspSoar;
    public constructor() { 
        super();
    }
    public withBasic(basic: ProductRspBasic): ListSubscriptionProductResponse {
        this['basic'] = basic;
        return this;
    }
    public withStandard(standard: ProductRspStandard): ListSubscriptionProductResponse {
        this['standard'] = standard;
        return this;
    }
    public withProfessional(professional: ProductRspProfessional): ListSubscriptionProductResponse {
        this['professional'] = professional;
        return this;
    }
    public withLargeScreen(largeScreen: ProductRspLargeScreen): ListSubscriptionProductResponse {
        this['large_screen'] = largeScreen;
        return this;
    }
    public set largeScreen(largeScreen: ProductRspLargeScreen  | undefined) {
        this['large_screen'] = largeScreen;
    }
    public get largeScreen(): ProductRspLargeScreen | undefined {
        return this['large_screen'];
    }
    public withLogCollection(logCollection: ProductRspLogCollection): ListSubscriptionProductResponse {
        this['log_collection'] = logCollection;
        return this;
    }
    public set logCollection(logCollection: ProductRspLogCollection  | undefined) {
        this['log_collection'] = logCollection;
    }
    public get logCollection(): ProductRspLogCollection | undefined {
        return this['log_collection'];
    }
    public withLogRetention(logRetention: ProductRspLogRetention): ListSubscriptionProductResponse {
        this['log_retention'] = logRetention;
        return this;
    }
    public set logRetention(logRetention: ProductRspLogRetention  | undefined) {
        this['log_retention'] = logRetention;
    }
    public get logRetention(): ProductRspLogRetention | undefined {
        return this['log_retention'];
    }
    public withLogAnalysis(logAnalysis: ProductRspLogAnalysis): ListSubscriptionProductResponse {
        this['log_analysis'] = logAnalysis;
        return this;
    }
    public set logAnalysis(logAnalysis: ProductRspLogAnalysis  | undefined) {
        this['log_analysis'] = logAnalysis;
    }
    public get logAnalysis(): ProductRspLogAnalysis | undefined {
        return this['log_analysis'];
    }
    public withSoar(soar: ProductRspSoar): ListSubscriptionProductResponse {
        this['soar'] = soar;
        return this;
    }
}