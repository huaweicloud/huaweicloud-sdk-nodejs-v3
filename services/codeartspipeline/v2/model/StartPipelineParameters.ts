import { StartPipelineBuildParams } from './StartPipelineBuildParams';


export class StartPipelineParameters {
    private 'build_params'?: Array<StartPipelineBuildParams>;
    public constructor() { 
    }
    public withBuildParams(buildParams: Array<StartPipelineBuildParams>): StartPipelineParameters {
        this['build_params'] = buildParams;
        return this;
    }
    public set buildParams(buildParams: Array<StartPipelineBuildParams>  | undefined) {
        this['build_params'] = buildParams;
    }
    public get buildParams(): Array<StartPipelineBuildParams> | undefined {
        return this['build_params'];
    }
}