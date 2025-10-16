import { VendorKeyStatistic } from './VendorKeyStatistic';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatisticSecretKeyResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'invalid_count'?: number;
    private 'valid_count'?: number;
    private 'key_counts_by_service_type'?: Array<VendorKeyStatistic>;
    private 'key_counts_by_algorithm'?: Array<VendorKeyStatistic>;
    private 'key_counts_by_algorithm_and_cluster'?: Array<VendorKeyStatistic>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ShowStatisticSecretKeyResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withInvalidCount(invalidCount: number): ShowStatisticSecretKeyResponse {
        this['invalid_count'] = invalidCount;
        return this;
    }
    public set invalidCount(invalidCount: number  | undefined) {
        this['invalid_count'] = invalidCount;
    }
    public get invalidCount(): number | undefined {
        return this['invalid_count'];
    }
    public withValidCount(validCount: number): ShowStatisticSecretKeyResponse {
        this['valid_count'] = validCount;
        return this;
    }
    public set validCount(validCount: number  | undefined) {
        this['valid_count'] = validCount;
    }
    public get validCount(): number | undefined {
        return this['valid_count'];
    }
    public withKeyCountsByServiceType(keyCountsByServiceType: Array<VendorKeyStatistic>): ShowStatisticSecretKeyResponse {
        this['key_counts_by_service_type'] = keyCountsByServiceType;
        return this;
    }
    public set keyCountsByServiceType(keyCountsByServiceType: Array<VendorKeyStatistic>  | undefined) {
        this['key_counts_by_service_type'] = keyCountsByServiceType;
    }
    public get keyCountsByServiceType(): Array<VendorKeyStatistic> | undefined {
        return this['key_counts_by_service_type'];
    }
    public withKeyCountsByAlgorithm(keyCountsByAlgorithm: Array<VendorKeyStatistic>): ShowStatisticSecretKeyResponse {
        this['key_counts_by_algorithm'] = keyCountsByAlgorithm;
        return this;
    }
    public set keyCountsByAlgorithm(keyCountsByAlgorithm: Array<VendorKeyStatistic>  | undefined) {
        this['key_counts_by_algorithm'] = keyCountsByAlgorithm;
    }
    public get keyCountsByAlgorithm(): Array<VendorKeyStatistic> | undefined {
        return this['key_counts_by_algorithm'];
    }
    public withKeyCountsByAlgorithmAndCluster(keyCountsByAlgorithmAndCluster: Array<VendorKeyStatistic>): ShowStatisticSecretKeyResponse {
        this['key_counts_by_algorithm_and_cluster'] = keyCountsByAlgorithmAndCluster;
        return this;
    }
    public set keyCountsByAlgorithmAndCluster(keyCountsByAlgorithmAndCluster: Array<VendorKeyStatistic>  | undefined) {
        this['key_counts_by_algorithm_and_cluster'] = keyCountsByAlgorithmAndCluster;
    }
    public get keyCountsByAlgorithmAndCluster(): Array<VendorKeyStatistic> | undefined {
        return this['key_counts_by_algorithm_and_cluster'];
    }
}