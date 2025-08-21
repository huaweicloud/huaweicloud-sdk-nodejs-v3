import { SubNodeLineageConfig } from './SubNodeLineageConfig';


export class ImportDataMapLineageRequestBody {
    private 'input_source_id'?: string;
    private 'output_source_id'?: string;
    private 'lineage_configs'?: Array<SubNodeLineageConfig>;
    public constructor(inputSourceId?: string, outputSourceId?: string, lineageConfigs?: Array<SubNodeLineageConfig>) { 
        this['input_source_id'] = inputSourceId;
        this['output_source_id'] = outputSourceId;
        this['lineage_configs'] = lineageConfigs;
    }
    public withInputSourceId(inputSourceId: string): ImportDataMapLineageRequestBody {
        this['input_source_id'] = inputSourceId;
        return this;
    }
    public set inputSourceId(inputSourceId: string  | undefined) {
        this['input_source_id'] = inputSourceId;
    }
    public get inputSourceId(): string | undefined {
        return this['input_source_id'];
    }
    public withOutputSourceId(outputSourceId: string): ImportDataMapLineageRequestBody {
        this['output_source_id'] = outputSourceId;
        return this;
    }
    public set outputSourceId(outputSourceId: string  | undefined) {
        this['output_source_id'] = outputSourceId;
    }
    public get outputSourceId(): string | undefined {
        return this['output_source_id'];
    }
    public withLineageConfigs(lineageConfigs: Array<SubNodeLineageConfig>): ImportDataMapLineageRequestBody {
        this['lineage_configs'] = lineageConfigs;
        return this;
    }
    public set lineageConfigs(lineageConfigs: Array<SubNodeLineageConfig>  | undefined) {
        this['lineage_configs'] = lineageConfigs;
    }
    public get lineageConfigs(): Array<SubNodeLineageConfig> | undefined {
        return this['lineage_configs'];
    }
}