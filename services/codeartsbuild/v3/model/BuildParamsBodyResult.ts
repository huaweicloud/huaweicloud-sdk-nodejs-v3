import { BuildParams } from './BuildParams';


export class BuildParamsBodyResult {
    private 'build_parameters'?: Array<BuildParams>;
    public constructor() { 
    }
    public withBuildParameters(buildParameters: Array<BuildParams>): BuildParamsBodyResult {
        this['build_parameters'] = buildParameters;
        return this;
    }
    public set buildParameters(buildParameters: Array<BuildParams>  | undefined) {
        this['build_parameters'] = buildParameters;
    }
    public get buildParameters(): Array<BuildParams> | undefined {
        return this['build_parameters'];
    }
}