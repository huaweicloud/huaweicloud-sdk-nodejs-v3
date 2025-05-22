import { BuildStageRecord } from './BuildStageRecord';


export class FullStagesResult {
    private 'build_stages'?: { [key: string]: BuildStageRecord; };
    public constructor() { 
    }
    public withBuildStages(buildStages: { [key: string]: BuildStageRecord; }): FullStagesResult {
        this['build_stages'] = buildStages;
        return this;
    }
    public set buildStages(buildStages: { [key: string]: BuildStageRecord; }  | undefined) {
        this['build_stages'] = buildStages;
    }
    public get buildStages(): { [key: string]: BuildStageRecord; } | undefined {
        return this['build_stages'];
    }
}