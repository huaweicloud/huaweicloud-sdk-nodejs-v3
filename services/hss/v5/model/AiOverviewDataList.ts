import { AiOverviewDimensionStats } from './AiOverviewDimensionStats';
import { AiOverviewSourceInfo } from './AiOverviewSourceInfo';


export class AiOverviewDataList {
    public source?: string;
    private 'dimension_stats'?: Array<AiOverviewDimensionStats>;
    private 'source_info'?: AiOverviewSourceInfo;
    public constructor() { 
    }
    public withSource(source: string): AiOverviewDataList {
        this['source'] = source;
        return this;
    }
    public withDimensionStats(dimensionStats: Array<AiOverviewDimensionStats>): AiOverviewDataList {
        this['dimension_stats'] = dimensionStats;
        return this;
    }
    public set dimensionStats(dimensionStats: Array<AiOverviewDimensionStats>  | undefined) {
        this['dimension_stats'] = dimensionStats;
    }
    public get dimensionStats(): Array<AiOverviewDimensionStats> | undefined {
        return this['dimension_stats'];
    }
    public withSourceInfo(sourceInfo: AiOverviewSourceInfo): AiOverviewDataList {
        this['source_info'] = sourceInfo;
        return this;
    }
    public set sourceInfo(sourceInfo: AiOverviewSourceInfo  | undefined) {
        this['source_info'] = sourceInfo;
    }
    public get sourceInfo(): AiOverviewSourceInfo | undefined {
        return this['source_info'];
    }
}