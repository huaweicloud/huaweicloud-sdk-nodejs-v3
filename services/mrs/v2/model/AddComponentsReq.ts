import { ComponentInstallMode } from './ComponentInstallMode';


export class AddComponentsReq {
    private 'components_install_mode'?: Array<ComponentInstallMode>;
    public constructor(componentsInstallMode?: Array<ComponentInstallMode>) { 
        this['components_install_mode'] = componentsInstallMode;
    }
    public withComponentsInstallMode(componentsInstallMode: Array<ComponentInstallMode>): AddComponentsReq {
        this['components_install_mode'] = componentsInstallMode;
        return this;
    }
    public set componentsInstallMode(componentsInstallMode: Array<ComponentInstallMode>  | undefined) {
        this['components_install_mode'] = componentsInstallMode;
    }
    public get componentsInstallMode(): Array<ComponentInstallMode> | undefined {
        return this['components_install_mode'];
    }
}