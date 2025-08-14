import { CreateBuildJobSteps } from './CreateBuildJobSteps';


export class QueryTemplateVo {
    public steps?: Array<CreateBuildJobSteps>;
    public actions?: object;
    private 'auto_update_sub_module'?: boolean;
    public image?: string;
    private 'image_source'?: string;
    public constructor() { 
    }
    public withSteps(steps: Array<CreateBuildJobSteps>): QueryTemplateVo {
        this['steps'] = steps;
        return this;
    }
    public withActions(actions: object): QueryTemplateVo {
        this['actions'] = actions;
        return this;
    }
    public withAutoUpdateSubModule(autoUpdateSubModule: boolean): QueryTemplateVo {
        this['auto_update_sub_module'] = autoUpdateSubModule;
        return this;
    }
    public set autoUpdateSubModule(autoUpdateSubModule: boolean  | undefined) {
        this['auto_update_sub_module'] = autoUpdateSubModule;
    }
    public get autoUpdateSubModule(): boolean | undefined {
        return this['auto_update_sub_module'];
    }
    public withImage(image: string): QueryTemplateVo {
        this['image'] = image;
        return this;
    }
    public withImageSource(imageSource: string): QueryTemplateVo {
        this['image_source'] = imageSource;
        return this;
    }
    public set imageSource(imageSource: string  | undefined) {
        this['image_source'] = imageSource;
    }
    public get imageSource(): string | undefined {
        return this['image_source'];
    }
}